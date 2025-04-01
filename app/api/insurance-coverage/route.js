export const runtime = 'edge';

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

    // Mock insurance data
    const insuranceData = {
      lotNumber,
      coverage: {
        policyNumber: 'POL-2024-001',
        provider: 'Secure Insurance Co.',
        startDate: new Date().toISOString(),
        endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
        coverage: {
          building: 500000,
          contents: 100000,
          publicLiability: 2000000
        },
        claims: [
          {
            id: 1,
            type: 'Storm Damage',
            date: new Date(new Date().setMonth(new Date().getMonth() - 2)).toISOString(),
            status: 'Settled',
            amount: 5000
          }
        ],
        premium: {
          amount: 1200,
          frequency: 'Annual',
          nextPayment: new Date(new Date().setMonth(new Date().getMonth() + 11)).toISOString()
        }
      }
    };

    return new Response(JSON.stringify({
      success: true,
      data: insuranceData
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to fetch insurance coverage' 
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
} 