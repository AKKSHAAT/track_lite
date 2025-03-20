'use client'
import { useEffect } from "react";
import ShareButton from "@components/ShareButton";
import { logPageView } from "@utils/logPageView";
import { v4 as uuidv4 } from 'uuid';
import { usePathname, useSearchParams } from "next/navigation";

export default function Home() {
  const pathname = usePathname(); 
  const searchParams = useSearchParams();
  
  useEffect(() => {
  const pageView = {
    user_id: uuidv4(),
    utm_source: searchParams.get("utm_source") || "",
    utm_medium: searchParams.get("utm_medium") || "",
    utm_campaign: searchParams.get("utm_campaign") || "",
    utm_content: searchParams.get("utm_content") || "",
    utm_term: searchParams.get("utm_term") || "not sure what this is",
    utm_referrer: searchParams.get("ref")|| "",
    user_agent: navigator.userAgent || "not sure what this is",
    ip_hash: "TODO: Handle on Backend",
  };

  logPageView(pageView, "campaign", "123");
  console.log("loggin✅✅✅", pageView);
}, [pathname, searchParams]); // Re-run if URL changes

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1 className=" text-3xl">hii</h1>
     <ShareButton userId={"USER_1"}/>
    </div>
  );
}
