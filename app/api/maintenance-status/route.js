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
      status: 'Up to date',
      lastInspection: '2024-03-15',
      nextMaintenance: '2024-04-15',
      maintenanceHistory: [
        {
          date: '2024-03-15',
          type: 'Regular Inspection',
          status: 'Completed',
          notes: 'All systems functioning normally'
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