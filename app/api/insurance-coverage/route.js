export const runtime = 'edge';

export async function GET() {
  return new Response(JSON.stringify({
    message: 'Insurance coverage endpoint'
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
} 