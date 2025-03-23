import { NextResponse } from "next/server";
import { db } from "@/server/db";
import { newsletterSubscribers } from "@/server/db/schema";
import * as z from "zod";

const subscribeSchema = z.object({
  email: z.string().email(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsedData = subscribeSchema.safeParse(body);

    if (!parsedData.success) {
      return NextResponse.json({ error: "Ogiltig e-postadress" }, { status: 400 });
    }

    const { email } = parsedData.data;

    // Kolla om e-posten redan är registrerad
const existingSubscriber = await db.query.newsletterSubscribers.findFirst({
  where: (subs, { eq }) => eq(subs.email, email),
});


    if (existingSubscriber) {
      return NextResponse.json({ error: "E-postadressen är redan registrerad." }, { status: 409 });
    }

    // Lägg till prenumeranten i databasen
    await db.insert(newsletterSubscribers).values({ email });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Fel vid prenumeration:", error);
    return NextResponse.json({ error: "Serverfel" }, { status: 500 });
  }
}
