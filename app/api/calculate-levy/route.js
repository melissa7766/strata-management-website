export const runtime = 'edge';

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