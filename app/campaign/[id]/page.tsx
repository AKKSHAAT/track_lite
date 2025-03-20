import React from "react";
import campaigns from "../../Campaigns.json";
import ShareButton from "@/app/components/ShareButton";
import { logPageView } from "@/app/utils/logPageView";
import { v4 as uuidv4 } from "uuid";
import { getSession } from "@/app/utils/getSession";

interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | undefined };
}

const Page = async ({ params, searchParams }: PageProps) => {
  const { id } = await params;
  const campaign = campaigns.find((campaign) => campaign.id === id);

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  
  const { utm_campaign,utm_medium, utm_source, utm_referrer, utm_content, utm_term, ref } = await searchParams;
  
  // Construct page view parameters
  const pageViewParams = {
    user_id: uuidv4(),
    utm_source: utm_source || "",
    utm_medium: utm_medium || "",
    utm_campaign: utm_campaign || "",
    utm_content: utm_content || "",
    utm_term: utm_term || "not sure what this is",
    utm_referrer: ref || "",
    user_agent: "TODO: Handle on Client",
    ip_hash: "TODO: Handle on Backend",
  };

  // Log the page view
  const sessionId = await getSession();
  logPageView(pageViewParams, "CAMPAIGN", id, sessionId);

  return (
    <div>
      <h1 className="text-6xl font-black mb-10">{campaign.title}</h1>
      <div className="flex gap-12">
        <img src={campaign.image} alt={campaign.title} />
        <div>
          <p>{campaign.description}</p>
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

export default Page;
