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
    event,
    campaign: source.campaign,