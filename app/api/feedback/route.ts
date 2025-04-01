import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name || !body.email || !body.feedback) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Store the feedback in a database
    // 2. Send an email notification
    // For now, we'll just return a success response

    return NextResponse.json(
      { message: 'Feedback received successfully' },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { message: 'Error processing feedback' },
      { status: 500 }
    );
  }
} 