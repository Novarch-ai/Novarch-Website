const TRACKER_ENDPOINT = 'https://novarch-tracker.mesum-a5c.workers.dev/event';
const CAMPAIGN_KEY = 'novarch_campaign';
const LEAD_KEY = 'novarch_lead';

function readSession(key) {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeSession(key, value) {
  try {
    window.sessionStorage.setItem(key, value);
  } catch {
    // Analytics must never affect the website experience.
  }
}

function attribution() {
  const params = new URLSearchParams(window.location.search);
  const campaign = params.get('utm_campaign');
  const lead = params.get('utm_content');

  if (campaign) writeSession(CAMPAIGN_KEY, campaign);
  if (lead) writeSession(LEAD_KEY, lead);

  return {
    campaign: campaign || readSession(CAMPAIGN_KEY) || 'direct',
    lead: lead || readSession(LEAD_KEY) || 'organic',
  };
}

export function sendMetric(event) {
  if (typeof window === 'undefined') return;

  const source = attribution();
  const body = new URLSearchParams({
    event,
    campaign: source.campaign,
    lead: source.lead,
    path: window.location.pathname || '/',
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(TRACKER_ENDPOINT, body);
    return;
  }

  fetch(TRACKER_ENDPOINT, {
    method: 'POST',
    body,
    keepalive: true,
  }).catch(() => {});
}

function classifyClick(anchor) {
  const href = anchor.getAttribute('href') || '';
  if (href.startsWith('mailto:')) return 'email_cta';
  if (href.includes('instagram.com') || href.includes('ig.me')) return 'instagram_click';
  return null;
}

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => sendMetric('pageview'), { once: true });

  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a');
    if (!anchor) return;

    const metric = classifyClick(anchor);
    if (metric) sendMetric(metric);
  });
}
