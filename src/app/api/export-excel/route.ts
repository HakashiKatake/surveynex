import { NextRequest, NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET(request: NextRequest) {
  // Optional: Add authentication/authorization here for owner access
  const filePath = path.join(process.cwd(), 'exports', 'registrations.xlsx');

  try {
    const fileBuffer = await fs.readFile(filePath);
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'Content-Disposition': 'attachment; filename="registrations.xlsx"',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Excel file not found.' }, { status: 404 });
  }
}
