import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';


export function middleware(req: NextRequest) {
    if (!req.nextUrl.pathname.startsWith('/api/trackAction') && !req.nextUrl.pathname.startsWith('/api/trackPageView')) {
        return NextResponse.next();
    }
    console.log("✅[TRACKING API CALL] including params");
    let sessionId = req.cookies.get('session_id')?.value;
    // console.log("cookkies::", sessionId);

    if (!sessionId) {
      sessionId = uuidv4();
      const res = NextResponse.next();
      res.cookies.set({
        'session_id' : sessionId, 
      });
      return res; 
    }
    return NextResponse.next();
  }