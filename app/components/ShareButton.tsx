"use client";

import React from "react";
import { usePathname } from "next/navigation";

interface ShareButtonProps {
  userId: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ userId }) => {
  const pathname = usePathname();
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";

  const utmParams = new URLSearchParams({
    ref: "user_1", // Referrer ID
    utm_source: "Share", // The source of the traffic (e.g., "Share" for manually shared links)
    utm_medium: "social", // The marketing medium (e.g., "social" since it's user-shared)
    utm_campaign: "campaign_121", // The specific campaign name
    utm_content: "button_click", // The type of content (e.g., button, banner, etc.)
    utm_term: "referral", // Usually used for paid search, but here it can be "referral"
  });
  
  const shareUrl = `${baseUrl}${pathname}?${utmParams.toString()}`;
  console.log("share URL", shareUrl);
  return (
    <button onClick={() => navigator.clipboard.writeText(shareUrl)}>
      Share this Page
    </button>
  );
};

export default ShareButton;
