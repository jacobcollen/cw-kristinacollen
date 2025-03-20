import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "din.mammas@email.com",
      subject: "Nytt meddelande från hemsidan",
      html: `<p><strong>Namn:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Meddelande:</strong> ${message}</p>`,
    });

    return Response.json({ success: true, data: response });
  } catch (error) {
    return Response.json({ success: false, error }, { status: 500 });
  }
}
