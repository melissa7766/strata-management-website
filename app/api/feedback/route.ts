import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, feedback } = body;

    // Here you would typically:
    // 1. Validate the input
    // 2. Store the feedback in a database
    // 3. Send an email notification
    // For now, we'll just return a success response

    return NextResponse.json(
      { message: 'Feedback received successfully' },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error processing feedback' },
      { status: 500 }
    );
  }
} 