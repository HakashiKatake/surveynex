import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import * as XLSX from 'xlsx';

export async function GET(request: NextRequest) {
  await dbConnect();
  const users = await User.find({}).lean();

  // Format data for Excel
  const excelData = users.map((user: any) => ({
    FullName: user.fullName,
    Age: user.age,
    Email: user.email,
    Country: user.country,
    State: user.state,
    Industry: user.industry,
    RegisteredAt: user.createdAt ? new Date(user.createdAt).toLocaleString() : '',
  }));

  // Create workbook and worksheet
  const worksheet = XLSX.utils.json_to_sheet(excelData);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Registrations');

  // Set column widths for readability
  worksheet['!cols'] = [
    { wch: 25 }, // Full Name
    { wch: 8 },  // Age
    { wch: 30 }, // Email
    { wch: 20 }, // Country
    { wch: 20 }, // State
    { wch: 20 }, // Industry
    { wch: 24 }, // RegisteredAt
  ];

  // Write workbook to buffer
  const buffer = XLSX.write(workbook, { type: 'buffer', bookType: 'xlsx' });

  return new NextResponse(buffer, {
    status: 200,
    headers: {
      'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'Content-Disposition': 'attachment; filename="registrations.xlsx"',
    },
  });
}
