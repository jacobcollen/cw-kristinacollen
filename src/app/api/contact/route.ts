// app/api/contact/route.ts
import { sendContactEmail } from "@/server/actions/contact";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type måste vara application/json' },
        { status: 415 }
      );
    }

    const body = await request.json();
    const result = await sendContactEmail(body);

    if (result.error) {
      return NextResponse.json(
        { error: result.error, details: result.details },
        { status: 400 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Ett serverfel uppstod' },
      { status: 500 }
    );
  }
}
