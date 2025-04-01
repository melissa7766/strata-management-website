import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Here you would typically:
    // 1. Validate the data
    // 2. Store in a database
    // 3. Send an email notification
    // 4. etc.
    
    // For now, we'll just log the data
    console.log('Feedback received:', data);
    
    return NextResponse.json(
      { message: 'Feedback submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing feedback:', error);
    return NextResponse.json(
      { message: 'Error processing feedback' },
      { status: 500 }
    );
  }
}

export async function GET() {
  // This endpoint can be used to retrieve feedback data
  // For now, we'll just return a success message
  return NextResponse.json(
    { message: 'Feedback endpoint is working' },
    { status: 200 }
  );
} 