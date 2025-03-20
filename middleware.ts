import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export function middleware(req: NextRequest) {
    if (!req.nextUrl.pathname.startsWith('/api/trackAction') && !req.nextUrl.pathname.startsWith('/api/trackPageView')) {
        console.log("❌[NON-TRACKING API CALL] not including params");
        return NextResponse.next();
    }
    console.log("✅[TRACKING API CALL] including params");
    let sessionId = req.cookies.get('session_id')?.value;
  
    if (!sessionId) {
      sessionId = uuidv4();
      const res = NextResponse.next();
      res.cookies.set('session_id', sessionId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' ? true : false,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7,
      });
      return res; 
    }
    return NextResponse.next();


    // const url = new URL(req.url);
    // const utmParams = {
    //   utm_source: url.searchParams.get('utm_source') || '',
    //   utm_medium: url.searchParams.get('utm_medium') || '',
    //   utm_campaign: url.searchParams.get('utm_campaign') || '',
    //   utm_content: url.searchParams.get('utm_content') || '',
    //   utm_term: url.searchParams.get('utm_term') || '',
    //   utm_referrer: req.headers.get('referer') || '',
    // };
  

    // const res = NextResponse.next();
    // Object.entries(utmParams).forEach(([key, value]) => {
    //   if (value) res.headers.set(key, value);
    // });
  
    // return res;
  }