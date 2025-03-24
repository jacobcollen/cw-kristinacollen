import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { newsletterSubscribers } from "@/server/db/schema";

export async function GET() {
  try {
    const subscribers = await db.select().from(newsletterSubscribers);
    return NextResponse.json(subscribers);
  } catch (error) {
    return NextResponse.json({ error: "Serverfel" }, { status: 500 });
  }
}
