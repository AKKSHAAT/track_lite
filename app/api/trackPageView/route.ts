import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const {
      session_id,
      user_id,
      page_type,
      resource_id,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      utm_referrer,
      user_agent,
      ip_hash,
      referrer_id, // New field
    } = data;

    if (!session_id || !page_type || !resource_id) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Store the page view
    const pageView = await prisma.pageView.create({
      data: {
        session_id,
        user_id,
        page_type,
        resource_id,
        utm_source,
        utm_medium,
        utm_campaign,
        utm_content,
        utm_term,
        utm_referrer,
        user_agent,
        ip_hash,
        referrer_id, // Store referrer info
      },
    });

    return NextResponse.json({ success: true, pageView }, { status: 201 });
  } catch (error) {
    console.error('Error saving page view:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
