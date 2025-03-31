import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const lotNumber = searchParams.get('lotNumber');

    // Mock maintenance data (in a real app, this would come from a database)
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

    return NextResponse.json({
      success: true,
      data: maintenanceData
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch maintenance status' },
      { status: 400 }
    );
  }
} 