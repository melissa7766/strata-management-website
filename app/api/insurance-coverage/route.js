export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const lotNumber = searchParams.get('lotNumber');

    if (!lotNumber) {
      return new Response(JSON.stringify({ error: 'Lot number is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
    }

    // Mock data for demonstration
    const mockData = {
      lotNumber,
      provider: 'Strata Insurance Co',
      policyNumber: 'POL123456',
      coverageAmount: 500000,
      policyPeriod: {
        start: '2024-01-01',
        end: '2024-12-31'
      },
      premium: 2500,
      claims: [
        {
          id: 'CLM001',
          date: '2024-02-15',
          type: 'Water Damage',
          status: 'Settled',
          amount: 5000
        }
      ]
    };

    return new Response(JSON.stringify(mockData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
} 