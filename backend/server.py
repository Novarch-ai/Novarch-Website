from fastapi import FastAPI, APIRouter, HTTPException, status, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime
from decimal import Decimal, ROUND_HALF_UP
import httpx
import stripe
from emergentintegrations.llm.chat import LlmChat, UserMessage
from novarch_prompt import NOVARCH_SYSTEM_PROMPT

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

BREVO_API_KEY = os.environ.get('BREVO_API_KEY', '')
BREVO_LIST_NAME = os.environ.get('BREVO_LIST_NAME', 'Novarch Early Access')
BREVO_API_URL = "https://api.brevo.com/v3"
EMERGENT_LLM_KEY = os.environ.get('EMERGENT_LLM_KEY', '')
ALLOWED_ORIGINS = [x.strip() for x in os.environ.get('ALLOWED_ORIGINS', '*').split(',') if x.strip()]
STRIPE_SECRET_KEY = os.environ.get('STRIPE_SECRET_KEY', '')
STRIPE_WEBHOOK_SECRET = os.environ.get('STRIPE_WEBHOOK_SECRET', '')
PUBLIC_SITE_URL = os.environ.get('PUBLIC_SITE_URL', 'https://novarch.eu').rstrip('/')
if STRIPE_SECRET_KEY:
    stripe.api_key = STRIPE_SECRET_KEY

app = FastAPI()
api_router = APIRouter(prefix="/api")
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class SubscribeRequest(BaseModel):
    email: EmailStr
    purpose: str = "product_waitlist"
    source: Optional[str] = None
    referral_code: Optional[str] = None
    privacy_acknowledged: bool = True

class SubscribeResponse(BaseModel):
    success: bool
    message: str
    email: Optional[str] = None
    referral_code: Optional[str] = None

class SubscriberInDB(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    email: str
    subscribed_at: datetime = Field(default_factory=datetime.utcnow)
    purpose: str = "product_waitlist"
    source: Optional[str] = None
    referral_code: Optional[str] = None
    privacy_acknowledged: bool = True
    brevo_synced: bool = False
    brevo_contact_id: Optional[int] = None
    status: str = "active"

class PaymentCheckoutRequest(BaseModel):
    email: EmailStr
    amount_eur: Decimal
    reference: str = Field(min_length=2, max_length=120)
    note: Optional[str] = Field(default=None, max_length=500)

class PaymentCheckoutResponse(BaseModel):
    checkout_url: str
    session_id: str
    payment_id: str

class ChatMessage(BaseModel):
    role: str
    content: str

class ChatRequest(BaseModel):
    session_id: str
    message: str
    history: Optional[List[ChatMessage]] = []

class ChatResponse(BaseModel):
    response: str
    session_id: str

class BrevoService:
    def __init__(self):
        self.api_key = BREVO_API_KEY
        self.base_url = BREVO_API_URL
        self.headers = {"api-key": self.api_key, "Content-Type": "application/json", "Accept": "application/json"}

    async def get_or_create_list(self, list_name: str) -> Optional[int]:
        if not self.api_key:
            logger.warning("Brevo API key not configured")
            return None
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(f"{self.base_url}/contacts/lists", headers=self.headers, params={"limit": 50})
                if response.status_code == 200:
                    for contact_list in response.json().get("lists", []):
                        if contact_list.get("name") == list_name:
                            return contact_list.get("id")
                create_response = await client.post(f"{self.base_url}/contacts/lists", headers=self.headers, json={"name": list_name, "folderId": 1})
                if create_response.status_code in [200, 201]:
                    return create_response.json().get("id")
                logger.error(f"Failed to create list: {create_response.text}")
                return None
        except Exception as e:
            logger.error(f"Error getting/creating Brevo list: {str(e)}")
            return None

    async def create_contact(self, email: str, list_id: Optional[int] = None) -> dict:
        if not self.api_key:
            logger.warning("Brevo API key not configured - skipping Brevo sync")
            return {"success": False, "reason": "api_key_not_configured"}
        try:
            payload = {"email": email, "updateEnabled": True}
            if list_id:
                payload["listIds"] = [list_id]
            async with httpx.AsyncClient() as client:
                response = await client.post(f"{self.base_url}/contacts", headers=self.headers, json=payload)
                if response.status_code in [200, 201]:
                    return {"success": True, "data": response.json()}
                if response.status_code == 204:
                    return {"success": True, "data": {"updated": True}}
                error_data = response.json() if response.text else {}
                logger.error(f"Brevo API error: {response.status_code} - {error_data}")
                return {"success": False, "error": error_data}
        except Exception as e:
            logger.error(f"Error creating Brevo contact: {str(e)}")
            return {"success": False, "error": str(e)}

    async def add_contact_to_list(self, email: str, list_id: int) -> bool:
        if not self.api_key:
            return False
        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(f"{self.base_url}/contacts/lists/{list_id}/contacts/add", headers=self.headers, json={"emails": [email]})
                return response.status_code in [200, 201, 204]
        except Exception as e:
            logger.error(f"Error adding contact to list: {str(e)}")
            return False

brevo_service = BrevoService()

@api_router.get("/")
async def root():
    return {"message": "Novarch API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.dict())
    await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    return [StatusCheck(**x) for x in await db.status_checks.find().to_list(1000)]

@api_router.post("/subscribe", response_model=SubscribeResponse)
async def subscribe_email(request: SubscribeRequest):
    email = request.email.lower().strip()
    purpose = request.purpose.strip()[:80] or "product_waitlist"
    source = (request.source or "direct").strip()[:160]
    referral_code = (request.referral_code or "").strip()[:80] or None
    try:
        existing = await db.subscribers.find_one({"email": email, "purpose": purpose})
        if existing:
            return SubscribeResponse(success=True, message="You're already on this list.", email=email, referral_code=existing.get("referral_code"))
        list_id = await brevo_service.get_or_create_list(BREVO_LIST_NAME)
        brevo_result = await brevo_service.create_contact(email, list_id)
        subscriber = {"id": str(uuid.uuid4()), "email": email, "subscribed_at": datetime.utcnow(), "purpose": purpose, "source": source, "referral_code": referral_code, "privacy_acknowledged": bool(request.privacy_acknowledged), "brevo_synced": brevo_result.get("success", False), "brevo_list_id": list_id, "status": "active"}
        await db.subscribers.insert_one(subscriber)
        logger.info(f"New subscriber: {email}, purpose: {purpose}, source: {source}, Brevo synced: {brevo_result.get('success', False)}")
        return SubscribeResponse(success=True, message="You're on the list. We'll reach out when it's ready.", email=email, referral_code=referral_code)
    except Exception as e:
        logger.error(f"Subscription error for {email}: {str(e)}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Unable to process subscription. Please try again.")

@api_router.get("/subscribers/count")
async def get_subscriber_count():
    return {"count": await db.subscribers.count_documents({"status": "active"})}

@api_router.post("/payments/checkout", response_model=PaymentCheckoutResponse)
async def create_payment_checkout(request: PaymentCheckoutRequest):
    if not STRIPE_SECRET_KEY:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="Payments are not configured yet.")
    amount = request.amount_eur.quantize(Decimal('0.01'), rounding=ROUND_HALF_UP)
    if amount < Decimal('1.00') or amount > Decimal('50000.00'):
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Payment amount must be between €1 and €50,000.")
    amount_cents = int(amount * 100)
    payment_id = str(uuid.uuid4())
    reference = request.reference.strip()
    note = (request.note or '').strip()
    try:
        session = stripe.checkout.Session.create(
            mode='payment',
            customer_email=request.email.lower().strip(),
            line_items=[{
                'price_data': {
                    'currency': 'eur',
                    'product_data': {
                        'name': 'NOVARCH payment',
                        'description': reference[:120]
                    },
                    'unit_amount': amount_cents,
                },
                'quantity': 1,
            }],
            metadata={
                'novarch_payment_id': payment_id,
                'reference': reference,
                'note': note[:500],
            },
            payment_intent_data={'metadata': {'novarch_payment_id': payment_id, 'reference': reference}},
            success_url=f"{PUBLIC_SITE_URL}/pay/success?session_id={{CHECKOUT_SESSION_ID}}",
            cancel_url=f"{PUBLIC_SITE_URL}/pay?cancelled=1",
        )
        await db.payments.insert_one({
            'id': payment_id,
            'stripe_session_id': session.id,
            'email': request.email.lower().strip(),
            'amount_eur': str(amount),
            'amount_cents': amount_cents,
            'currency': 'eur',
            'reference': reference,
            'note': note,
            'status': 'checkout_created',
            'created_at': datetime.utcnow(),
            'updated_at': datetime.utcnow(),
        })
        return PaymentCheckoutResponse(checkout_url=session.url, session_id=session.id, payment_id=payment_id)
    except stripe.StripeError as e:
        logger.error(f"Stripe checkout error: {str(e)}")
        raise HTTPException(status_code=status.HTTP_502_BAD_GATEWAY, detail="Unable to start secure checkout.")

@api_router.get("/payments/session/{session_id}")
async def get_payment_session(session_id: str):
    payment = await db.payments.find_one({'stripe_session_id': session_id}, {'_id': 0})
    if not payment:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Payment session not found.")
    return payment

@api_router.post("/stripe/webhook")
async def stripe_webhook(request: Request):
    if not STRIPE_WEBHOOK_SECRET:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="Stripe webhook not configured.")
    payload = await request.body()
    signature = request.headers.get('stripe-signature', '')
    try:
        event = stripe.Webhook.construct_event(payload, signature, STRIPE_WEBHOOK_SECRET)
    except ValueError:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid webhook payload.")
    except stripe.SignatureVerificationError:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Invalid webhook signature.")

    event_type = event.get('type')
    obj = event.get('data', {}).get('object', {})
    if event_type == 'checkout.session.completed':
        session_id = obj.get('id')
        payment_intent = obj.get('payment_intent')
        await db.payments.update_one({'stripe_session_id': session_id}, {'$set': {'status': 'paid', 'stripe_payment_intent_id': payment_intent, 'paid_at': datetime.utcnow(), 'updated_at': datetime.utcnow()}})
    elif event_type == 'checkout.session.expired':
        await db.payments.update_one({'stripe_session_id': obj.get('id')}, {'$set': {'status': 'expired', 'updated_at': datetime.utcnow()}})
    elif event_type == 'payment_intent.payment_failed':
        payment_id = obj.get('metadata', {}).get('novarch_payment_id')
        if payment_id:
            await db.payments.update_one({'id': payment_id}, {'$set': {'status': 'failed', 'updated_at': datetime.utcnow()}})
    return {'received': True}

@api_router.post("/chat", response_model=ChatResponse)
async def chat_with_novarch(request: ChatRequest):
    if not EMERGENT_LLM_KEY:
        raise HTTPException(status_code=status.HTTP_503_SERVICE_UNAVAILABLE, detail="Chat service not configured")
    try:
        chat = LlmChat(api_key=EMERGENT_LLM_KEY, session_id=request.session_id, system_message=NOVARCH_SYSTEM_PROMPT).with_model("openai", "gpt-4o")
        for msg in request.history:
            if msg.role == "user":
                chat.add_user_message(msg.content)
            elif msg.role == "assistant":
                chat.add_assistant_message(msg.content)
        response = await chat.send_message(UserMessage(text=request.message))
        await db.conversations.insert_one({"session_id": request.session_id, "user_message": request.message, "assistant_response": response, "timestamp": datetime.utcnow()})
        return ChatResponse(response=response, session_id=request.session_id)
    except Exception as e:
        logger.error(f"Chat error for session {request.session_id}: {str(e)}")
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Unable to process your message. Please try again.")

@api_router.get("/chat/history/{session_id}")
async def get_chat_history(session_id: str, limit: int = 50):
    try:
        history = await db.conversations.find({"session_id": session_id}).sort("timestamp", 1).limit(limit).to_list(limit)
        messages = []
        for record in history:
            messages.append({"role": "user", "content": record["user_message"]})
            messages.append({"role": "assistant", "content": record["assistant_response"]})
        return {"session_id": session_id, "messages": messages}
    except Exception as e:
        logger.error(f"Error fetching history for {session_id}: {str(e)}")
        return {"session_id": session_id, "messages": []}

app.include_router(api_router)
app.add_middleware(CORSMiddleware, allow_credentials=True, allow_origins=ALLOWED_ORIGINS, allow_methods=["*"], allow_headers=["*"])

@app.on_event("startup")
async def startup_db_client():
    await db.subscribers.create_index([("email", 1), ("purpose", 1)], unique=True)
    await db.subscribers.create_index("referral_code")
    await db.payments.create_index("stripe_session_id", unique=True)
    await db.payments.create_index("id", unique=True)
    logger.info("Database indexes created")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
