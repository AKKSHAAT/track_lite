import { getReferrerId } from './tracking';
import { PageView } from '@types/pageview';

export async function logPageView({
  session_id,
  user_id,
  page_type,
  resource_id,
  utm_source,
  utm_medium,
  utm_campaign,
  utm_content,
  utm_term,
  utm_referrer,
  user_agent,
  ip_hash,
} :  PageView) {
  const referrer_id = getReferrerId(); 

  await fetch('/api/pageview', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      session_id,
      user_id,
      page_type,
      resource_id,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      utm_referrer,
      user_agent,
      ip_hash,
      referrer_id, 
    }),
  });
}
