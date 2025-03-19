'use client'
import { useEffect } from "react";
import { setReferrerId } from "@utils/tracking";

export default function Home() {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const referrerId = urlParams.get('ref');
    
    if (referrerId) {
      setReferrerId(referrerId);
    }
  }, []);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <h1 className=" text-3xl">hii</h1>
    </div>
  );
}
