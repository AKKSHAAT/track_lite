export interface PageView {
    id?: string;
    session_id?: string;
    timestamp?: Date;
    user_id?: string;  // Nullable field
    page_type: string;
    resource_id: string;
    utm_source: string;
    utm_medium: string;
    utm_campaign: string;
    utm_content: string;
    utm_term: string;
    utm_referrer: string;
    user_agent: string;
    ip_hash: string;
  }