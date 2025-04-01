export const runtime = 'edge';

export async function GET() {
  return new Response(JSON.stringify({
    message: 'Maintenance status endpoint'
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
} 