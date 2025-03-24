"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

// Valideringsschema
const contactFormSchema = z.object({
  name: z.string().min(2, "Namnet måste vara minst 2 tecken."),
  email: z.string().email("Ogiltig e-postadress."),
  message: z.string().min(10, "Meddelandet måste vara minst 10 tecken."),
});

export async function sendContactEmail(formData: unknown) {
  const result = contactFormSchema.safeParse(formData);
  if (!result.success) {
    return { error: result.error.flatten().fieldErrors };
  }

  try {
    await resend.emails.send({
      from: "kontakt@kristinacollen.se",
      to: "jcbcollen@icloud.com",
      subject: `Nytt meddelande från ${result.data.name}`,
      replyTo: result.data.email,
      text: `Meddelande:\n${result.data.message}`,
    });

    return { success: true };
  } catch (error) {
    console.error("Fel vid skickning:", error);
    return { error: "Kunde inte skicka meddelandet, försök igen senare." };
  }
}
