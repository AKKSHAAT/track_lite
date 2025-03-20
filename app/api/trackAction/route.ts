import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate required fields
    const {user_id, page_view_id, action_type, resource_id, action_details } = data;
    const session_id = req.cookies.get('session_id')?.value;
    
    if (!session_id || !page_view_id || !action_type || !resource_id) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Save action in the database
    const action = await prisma.action.create({
      data: {
        session_id,
        user_id: user_id || 'anonymous', // Default to anonymous if no user ID is provided
        page_view_id,
        action_type,
        resource_id,
        action_details: action_details || {}, // Store any extra details (e.g., button label, location)
      },
    });

    return NextResponse.json({ success: true, action }, { status: 201 });
  } catch (error) {
    console.error('Error saving user action:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
