import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const lotNumber = searchParams.get('lotNumber');

    // Mock insurance data (in a real app, this would come from a database)
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

    return NextResponse.json({
      success: true,
      data: insuranceData
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch insurance coverage' },
      { status: 400 }
    );
  }
} 