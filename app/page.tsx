'use client'
import { useEffect } from "react";
import { logPageView } from "@utils/logPageView";
import { v4 as uuidv4 } from 'uuid';
import { redirect, usePathname, useSearchParams } from "next/navigation";
import campaigns from './Campaigns.json'
import ShareButton from "./components/ShareButton";
import getClientSession from "@utils/getClientSession";
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
  const sessionId = getClientSession();

  logPageView(pageView, "HOME PAGE", "123", sessionId);
}, [pathname, searchParams]); // Re-run if URL changes

  const redirectToCampaignPage = (id: string) => {
    redirect(`/campaign/${id}`);
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1 className=" text-3xl">ALl our Cmapigns</h1>
     <div className="grid grid-cols-3 gap-4">
       {campaigns.map((campaign) => (
         <div key={campaign.id} className=" p-4 rounded-lg" onClick={()=> redirectToCampaignPage(campaign.id)}>
           <img className=" rounded-2xl" src={campaign.image} alt={campaign.title} />
           <h2>{campaign.title}</h2>
           <p>{campaign.description}</p>
         </div>
       ))}
       <ShareButton />
      </div>
    </div>
  );
}
