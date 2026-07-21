const endpoint = 'https://novarch-tracker.mesum-a5c.workers.dev/event';

export function sendMetric(event) {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const body = new URLSearchParams({
    event,
    campaign: params.get('utm_campaign') || 'direct',
    lead: params.get('utm_content') || 'organic',
    path: window.location.pathname || '/',
  });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, body);
    return;
  }

  fetch(endpoint, {
    method: 'POST',
    body,
    keepalive: true,
  }).catch(() => {});
}
