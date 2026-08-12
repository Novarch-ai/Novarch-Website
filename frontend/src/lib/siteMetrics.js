const TRACKER_ENDPOINT = 'https://novarch-tracker.mesum-a5c.workers.dev/event';

function attribution() {
  const params = new URLSearchParams(window.location.search);
  return {
    campaign: params.get('utm_campaign') || 'direct',
    lead: params.get('utm_content') || 'organic',
  };
}

export function sendMetric(event) {
  if (typeof window === 'undefined') return;

  const source = attribution();
  const body = new URLSearchParams({
    event: String(event || 'unknown'),
    campaign: source.campaign,
    lead: source.lead,
    path: window.location.pathname,
    referrer: document.referrer || '',
  });

  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon(TRACKER_ENDPOINT, body);
      return;
    }
    fetch(TRACKER_ENDPOINT, {
      method: 'POST',
      body,
      keepalive: true,
      mode: 'no-cors',
    }).catch(() => {});
  } catch (_) {
    // Metrics must never block the customer journey.
  }
}

if (typeof window !== 'undefined') {
  window.addEventListener('load', () => sendMetric('page_view'), { once: true });
}
