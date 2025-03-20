import { PageView } from '@types/pageview';

// Function to log a page view
export async function logPageView(pageView: any, pageType: string, resourceId?: string) {
  // Create the payload object with additional page type and resource ID
  const payload: PageView = {
    ...pageView,
    page_type: pageType,
    resource_id: resourceId || "",
  };

  // Send the payload to the server
  const res = await fetch('/api/trackPageView', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  // Log the server response
  console.log(res);
}
