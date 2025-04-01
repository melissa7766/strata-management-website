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

    // Mock maintenance data
    const maintenanceData = {
      lotNumber,
      status: {
        lastInspection: new Date().toISOString(),
        nextInspection: new Date(new Date().setMonth(new Date().getMonth() + 3)).toISOString(),
        issues: [
          {
            id: 1,
            type: 'Plumbing',
            status: 'Pending',
            priority: 'Medium',
            reportedDate: new Date().toISOString(),
            description: 'Leaking faucet in bathroom'
          },
          {
            id: 2,
            type: 'Electrical',
            status: 'In Progress',
            priority: 'High',
            reportedDate: new Date(new Date().setDate(new Date().getDate() - 2)).toISOString(),
            description: 'Flickering lights in living room'
          }
        ],
        maintenanceHistory: [
          {
            id: 1,
            type: 'General',
            date: new Date(new Date().setMonth(new Date().getMonth() - 1)).toISOString(),
            description: 'Regular cleaning and inspection',
            status: 'Completed'
          }
        ]
      }
    };

    return new Response(JSON.stringify({
      success: true,
      data: maintenanceData
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
      error: 'Failed to fetch maintenance status' 
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
} 