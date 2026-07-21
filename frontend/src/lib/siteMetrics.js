const TRACKER_ENDPOINT = 'https://novarch-tracker.mesum-a5c.workers.dev/event';
const CAMPAIGN_KEY = 'novarch_campaign';
const LEAD_KEY = 'novarch_lead';

function safeSessionGet(key) {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function safeSessionSet(key, value) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Tracking must never interfere with