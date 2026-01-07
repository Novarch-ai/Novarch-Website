#!/usr/bin/env python3
"""
Backend API Testing for Novarch Early Access Subscription
Tests the subscription endpoints as requested in the review.
"""

import requests
import json
import sys
from datetime import datetime

# Get backend URL from frontend .env
BACKEND_URL = "https://daily-companion-23.preview.emergentagent.com/api"

def test_subscribe_valid_email():
    """Test POST /api/subscribe endpoint with valid email"""
    print("\n=== Testing POST /api/subscribe with valid email ===")
    
    url = f"{BACKEND_URL}/subscribe"
    test_email = "john.doe@example.com"
    
    payload = {"email": test_email}
    
    try:
        response = requests.post(url, json=payload, timeout=30)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if (data.get("success") == True and 
                "You're on the list. We'll reach out when it's ready." in data.get("message", "")):
                print("✅ PASS: Valid email subscription works correctly")
                return True, test_email
            else:
                print("❌ FAIL: Response format incorrect")
                print(f"Expected success=True and specific message, got: {data}")
                return False, test_email
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False, test_email
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False, test_email

def test_subscribe_invalid_email():
    """Test POST /api/subscribe with invalid email format"""
    print("\n=== Testing POST /api/subscribe with invalid email ===")
    
    url = f"{BACKEND_URL}/subscribe"
    invalid_email = "not-an-email"
    
    payload = {"email": invalid_email}
    
    try:
        response = requests.post(url, json=payload, timeout=30)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 422:
            print("✅ PASS: Invalid email format correctly rejected with 422")
            return True
        else:
            print(f"❌ FAIL: Expected 422 validation error, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False

def test_subscribe_duplicate_email(email):
    """Test POST /api/subscribe with duplicate email"""
    print("\n=== Testing POST /api/subscribe with duplicate email ===")
    
    url = f"{BACKEND_URL}/subscribe"
    
    payload = {"email": email}
    
    try:
        response = requests.post(url, json=payload, timeout=30)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if (data.get("success") == True and 
                "You're on the list. We'll reach out when it's ready." in data.get("message", "")):
                print("✅ PASS: Duplicate email handled gracefully")
                return True
            else:
                print("❌ FAIL: Response format incorrect for duplicate")
                print(f"Expected success=True and specific message, got: {data}")
                return False
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False

def test_subscribers_count():
    """Test GET /api/subscribers/count"""
    print("\n=== Testing GET /api/subscribers/count ===")
    
    url = f"{BACKEND_URL}/subscribers/count"
    
    try:
        response = requests.get(url, timeout=30)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            data = response.json()
            if "count" in data and isinstance(data["count"], int):
                print(f"✅ PASS: Subscriber count endpoint works, count: {data['count']}")
                return True
            else:
                print("❌ FAIL: Response should contain 'count' field with integer value")
                print(f"Got: {data}")
                return False
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False

def test_api_root():
    """Test GET /api/ root endpoint"""
    print("\n=== Testing GET /api/ root endpoint ===")
    
    url = f"{BACKEND_URL}/"
    
    try:
        response = requests.get(url, timeout=30)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        if response.status_code == 200:
            print("✅ PASS: API root endpoint accessible")
            return True
        else:
            print(f"❌ FAIL: Expected 200, got {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ FAIL: Exception occurred: {str(e)}")
        return False

def main():
    """Run all backend tests"""
    print("=" * 60)
    print("NOVARCH EARLY ACCESS SUBSCRIPTION API TESTS")
    print("=" * 60)
    print(f"Backend URL: {BACKEND_URL}")
    print(f"Test started at: {datetime.now()}")
    
    results = []
    test_email = None
    
    # Test 1: API root endpoint
    results.append(("API Root", test_api_root()))
    
    # Test 2: Valid email subscription
    valid_result, test_email = test_subscribe_valid_email()
    results.append(("Valid Email Subscription", valid_result))
    
    # Test 3: Invalid email format
    results.append(("Invalid Email Format", test_subscribe_invalid_email()))
    
    # Test 4: Duplicate email (only if we have a test email from test 1)
    if test_email:
        results.append(("Duplicate Email Handling", test_subscribe_duplicate_email(test_email)))
    
    # Test 5: Subscriber count
    results.append(("Subscriber Count", test_subscribers_count()))
    
    # Summary
    print("\n" + "=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    
    passed = 0
    total = len(results)
    
    for test_name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name}: {status}")
        if result:
            passed += 1
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All tests passed!")
        return 0
    else:
        print("⚠️  Some tests failed")
        return 1

if __name__ == "__main__":
    exit_code = main()
    sys.exit(exit_code)