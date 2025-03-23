import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/db/schema/contactFormSchema";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedData = contactFormSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json(
        { error: "Ogiltiga formulärdata" },
        { status: 400 },
      );
    }

    const { name, email, message } = parsedData.data;

    await resend.emails.send({
      from: "noreply@kristinacollen.se",
      to: "kristinacollen@gmail.com",
      subject: `Nytt meddelande från ${name}`,
      text: `Avsändare: ${name} (${email})\n\nMeddelande:\n${message}`,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Fel vid e-postutskick:", error);
    return NextResponse.json(
      { error: "Kunde inte skicka e-post" },
      { status: 500 },
    );
  }
}
