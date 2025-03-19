import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export function middleware(req: NextRequest) {
  let sessionId = req.cookies.get('session_id')?.value;

  if (!sessionId) {
    sessionId = uuidv4(); 
    const res = NextResponse.next();
    res.cookies.set('session_id', sessionId, {
      httpOnly: true,  //cookie inaccessible to JavaScript running on the client-side
      secure: process.env.NODE_ENV === 'production', //TODO: learn what dis is
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, 
    });
    return res;
  }

  return NextResponse.next();
}