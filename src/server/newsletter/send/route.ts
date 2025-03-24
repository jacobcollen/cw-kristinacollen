import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { newsletterSubscribers } from "@/server/db/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { subject, message } = await req.json();

    const subscribers = await db.select().from(newsletterSubscribers);

    const emails = subscribers.map((sub) => sub.email);

    await resend.emails.send({
      from: "nyhetsbrev@dittdomän.se",
      to: emails,
      subject,
      text: message,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Fel vid e-postutskick" }, { status: 500 });
  }
}
