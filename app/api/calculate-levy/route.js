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
      currentBalance: 2500.00,
      paymentSchedule: [
        {
          dueDate: '2024-04-01',
          amount: 500.00,
          status: 'Pending'
        },
        {
          dueDate: '2024-05-01',
          amount: 500.00,
          status: 'Pending'
        }
      ],
      paymentHistory: [
        {
          transactionId: 'TXN123',
          amount: 500.00,
          date: '2024-03-01',
          status: 'Completed',
          method: 'Direct Debit'
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

export async function POST(request) {
  try {
    const { lotNumber, baseAmount, specialLevies } = await request.json();

    // Calculate base levy
    const baseLevy = baseAmount || 500; // Default base levy if not provided

    // Calculate special levies
    const specialLevyTotal = specialLevies?.reduce((sum, levy) => sum + levy.amount, 0) || 0;

    // Calculate total
    const totalLevy = baseLevy + specialLevyTotal;

    // Calculate payment schedule (monthly)
    const monthlyPayment = totalLevy / 12;

    const responseData = {
      success: true,
      data: {
        lotNumber,
        baseLevy,
        specialLevyTotal,
        totalLevy,
        monthlyPayment,
        paymentSchedule: Array.from({ length: 12 }, (_, i) => ({
          month: new Date(new Date().setMonth(new Date().getMonth() + i)).toLocaleString('default', { month: 'long' }),
          amount: monthlyPayment,
          dueDate: new Date(new Date().setDate(1)).toISOString().split('T')[0]
        }))
      }
    };

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Failed to calculate levy' 
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
} 