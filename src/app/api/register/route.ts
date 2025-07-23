import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { ExcelManager } from '@/lib/excel';
import { registrationSchema } from '@/lib/validation';

export async function POST(request: NextRequest) {
  try {
    
    const body = await request.json();

    // Validate input data
    const validationResult = registrationSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validationResult.error.issues 
        },
        { status: 400 }
      );
    }

    const userData = validationResult.data;

    // Connect to MongoDB
    await dbConnect();

    // Check if user already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Save to MongoDB
    const newUser = new User(userData);
    await newUser.save();

    // Save to Excel file (non-blocking, log error but don't fail registration)
    try {
      const excelManager = new ExcelManager();
      await excelManager.addUser(userData);
    } catch (excelError) {
      console.error('Excel export error:', excelError);
      // Optionally, you can notify the user that Excel export failed
    }

    return NextResponse.json(
      { 
        message: 'Registration successful',
        user: {
          id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          createdAt: newUser.createdAt,
        }
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('Registration error:', error);
    if (error instanceof Error && error.message.includes('E11000')) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

