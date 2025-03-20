import { PageView } from '@types/pageview';
import { getSession } from './getSession';

// Function to log a page view
export async function logPageView(pageViewParams: any, pageType: string, resourceId?: string, session_id: string) {
  // Create the payload object with additional page type and resource ID
  const payload: PageView = {
    ...pageViewParams,
    page_type: pageType,
    resource_id: resourceId || "",
  };

  // Send the payload to the server
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Use env variable or fallback to localhost
  const apiUrl = `${baseUrl}/api/trackPageView`;


  try {
    console.log("sending to: ", apiUrl);
    const res = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({...payload, session_id}),
      credentials: 'include',
    });
  } catch (error) {
    console.error('Error logging page view:', error); 
  }

}
