// app/api/contact/route.ts
import { sendContactEmail } from "@/server/actions/contact";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const result = await sendContactEmail(body);

  if (result.error) {
    return NextResponse.json(result, { status: 400 });
  }

  return NextResponse.json(result);
}
