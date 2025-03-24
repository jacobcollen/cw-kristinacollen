// server/actions/contact.ts
"use server";

import { Resend } from "resend";
import { z } from "zod";
import { contactFormSchema } from "@/server/db/contactFormSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: unknown) {
  const result = contactFormSchema.safeParse(formData);
  
  if (!result.success) {
    return { 
      error: "Ogiltig formulärdata",
      details: result.error.flatten() 
    };
  }

  const { name, email, message } = result.data;

  try {
    const data = await resend.emails.send({
      from: "Kontaktformulär <kontakt@kristinacollen.se>",
      to: "jcbcollen@icloud.com",
      subject: `Nytt meddelande från ${name}`,
      replyTo: email,
      text: `Namn: ${name}\nE-post: ${email}\n\nMeddelande:\n${message}`,
      html: `
        <h1>Nytt meddelande från kontaktformulär</h1>
        <p><strong>Namn:</strong> ${name}</p>
        <p><strong>E-post:</strong> ${email}</p>
        <p><strong>Meddelande:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    return { success: true };
  } catch (error) {
    console.error("Resend error:", error);
    return { 
      error: "Kunde inte skicka meddelandet",
      details: error instanceof Error ? error.message : String(error)
    };
  }
}
