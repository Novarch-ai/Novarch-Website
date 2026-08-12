# NOVARCH Web System v1

Status: Working architecture for the 2026 website revamp.

## Core premise

novarch.eu is not a brochure site. It is the public operating surface of NOVARCH: brand, commercial entry point, proof layer, launch surface, product discovery layer, community gateway, talent funnel, partner/advisor entry point, and later a customer/product surface.

## Company story

NOVARCH is an applied-AI workflow company building intelligent systems around the way people and organizations actually work.

The current company sits on three evidence streams:

1. Commercial systems and digital businesses: Orbit Syndicate, GlobeDigits, The Retail Cube.
2. Institutional work: Germany-based university and institutional conversations/programs, including TU Ilmenau / EXIST and related systems, privacy and data-protection workstreams.
3. Founder-built products and technical history: Mesum Abbas's technical and entrepreneurial trail, including AI work beginning with his bachelor's FYP in 2018-2019 and RaabtaDesk.

Long-term principle: technology should create ownership, not dependency. NOVARCH intends to build systems customers can understand, control, move and continue operating.

## Primary benchmark

Beam.ai is the primary website-architecture and commercial-clarity benchmark for this iteration.

Borrow:
- strong navigation hierarchy;
- solution/workflow discovery;
- proof close to claims;
- platform/system explanation;
- repeated commercial CTAs;
- resource and community surfaces;
- partner, career and trust layers;
- reusable page templates for campaigns and verticals.

Do not copy:
- Beam branding, visual identity, copy, code or proprietary assets;
- Beam-specific product claims;
- enterprise claims that belong to Beam rather than NOVARCH.

NOVARCH distinction:
- journey/workflow-first rather than agent-first;
- human-governed systems;
- explicit customer/system ownership and portability;
- commercial + institutional + founder-built lineage;
- implementation-led today, productizing reusable systems over time.

## Web architecture

### 1. Home
Purpose: explain NOVARCH in seconds, establish proof, show pathways, and convert visitors.

Core pathways:
- Businesses
- Institutions
- Products
- Work
- Build with us

Primary CTA: Book a Workflow Review.
Secondary CTA: Explore our work.

### 2. Systems
- /systems
- /systems/revenue
- /systems/operations
- /systems/guided-journeys
- future /systems/private-ai when a real product is ready

### 3. Workflows
Reusable discovery layer for specific operational problems.

Examples:
- /workflows/enquiry-to-quote
- /workflows/customer-onboarding
- /workflows/order-processing
- /workflows/support-resolution
- /workflows/document-processing
- /workflows/institutional-journeys

Each workflow page should support campaign traffic without changing NOVARCH's company identity.

### 4. Products
- /products
- product pages as individual products become real
- waitlists and launches can exist before general availability when clearly labelled

### 5. Work / Proof
- /work
- /work/orbit-syndicate
- /work/globedigits
- /work/the-retail-cube
- /work/institutions
- /work/design-partners

Purpose: show that NOVARCH's systems thesis grew from operating real businesses, digital systems and institutional work rather than from abstract AI positioning.

### 6. Ideas / Ownership
- /manifesto
- /ownership
- /research
- /resources

Core belief: Human potential is universal. Opportunity is not. Technology should increase human agency and create ownership rather than dependency.

### 7. Network
- /community
- /partners
- /advisors
- /referrals
- /events

### 8. Company
- /company
- /company/founder
- /company/team
- /company/trail
- /company/culture
- /careers

Founder trail should include Mesum's AI work beginning in 2018-2019 through his bachelor's FYP, commercial business building, commerce systems, institutional journey, and formation of NOVARCH.

### 9. Launch / Campaign system
Reusable landing-page framework:
- /launch/:slug
- /for/:segment
- /campaign/:slug

These pages inherit the NOVARCH design system but can have narrow offers and campaign-specific CTAs.

### 10. Conversion infrastructure
Three modes:

Talk
- Workflow Review
- enterprise/institutional contact

Join
- product waitlist
- newsletter/community
- careers/advisor/partner forms

Buy
- standardized paid offers/products when approved
- payment confirmation and onboarding flow

## Commerce and payment principle

The site should be architected for direct transactions, but payment should not be hard-coded to a provider until NOVARCH selects a supported account/provider and the tax, invoicing, refund, privacy and fulfilment flow is approved.

Required payment architecture:
1. product/offer configuration;
2. checkout session creation server-side;
3. hosted or secure checkout;
4. webhook verification;
5. payment/order record;
6. confirmation/onboarding flow;
7. invoice/tax handling appropriate to the selling entity and customer;
8. privacy and legal disclosures.

## Waitlist architecture

A production waitlist requires:
- form fields with purpose limitation;
- consent/privacy copy appropriate to the use;
- server-side submission endpoint;
- deduplication;
- CRM/database destination;
- source/campaign attribution;
- confirmation state;
- export/delete capability;
- optional referral code layer.

Do not treat a newsletter signup, product waitlist and sales lead as the same consent purpose by default.

## Referral architecture

Later layer:
- unique referral code/link;
- source attribution;
- referral event state;
- reward eligibility rule;
- anti-abuse controls;
- privacy terms;
- reward fulfilment.

## Build rule

Big architecture, small number of live promises.

The site may expose the breadth of NOVARCH's world while clearly labelling what is available now, what is a program/waitlist, and what is a future direction.

## Revamp sequence

Phase 1 — Foundation
- new navigation and design system;
- refreshed homepage;
- Work/Proof layer;
- Systems and Company pages;
- legal pages preserved and re-reviewed for new integrations.

Phase 2 — Conversion
- Workflow Review funnel;
- waitlist framework;
- CRM/lead storage;
- analytics and campaign attribution.

Phase 3 — Commerce
- payment provider integration;
- standardized offer/product checkout;
- webhook/order handling;
- onboarding and invoice flow.

Phase 4 — Network
- community;
- referrals;
- advisors/partners;
- hiring pipeline.

## Implementation guardrails

- Work occurs on a revamp branch before production merge.
- Existing legal pages remain available during the revamp.
- No unverified customer, institutional, funding, security or product claims are added.
- Public claims from approved historical NOVARCH projects may be used with clear attribution.
- Production secrets/payment credentials must never be committed to GitHub.
- Any new analytics, form, CRM, scheduling, chat, payment, upload or AI visitor-data integration triggers privacy/consent review before launch.
