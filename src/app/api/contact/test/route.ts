// app/api/contact/test/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const testResponse = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test',
        email: 'test@test.com',
        message: 'Detta är ett testmeddelande',
      }),
    });

    return NextResponse.json({
      status: testResponse.status,
      statusText: testResponse.statusText,
      body: await testResponse.text(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Test failed', details: String(error) },
      { status: 500 }
    );
  }
}
