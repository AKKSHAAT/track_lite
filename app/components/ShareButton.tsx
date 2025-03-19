"use client";

import React from "react";

interface ShareButtonProps {
  userId: string;
  pageUrl: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ userId, pageUrl }) => {
  const shareUrl = `${pageUrl}?ref=${userId}`;

  return (
    <button onClick={() => navigator.clipboard.writeText(shareUrl)}>
      Share this Page
    </button>
  );
};

export default ShareButton;
