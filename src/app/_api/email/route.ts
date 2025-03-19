import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Konfigurera Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Epost object
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "kickicollen@gmail.com",
    subject: `Nytt meddelande på kristinacollen.se från ${name}`,
    text: `Avsändare: ${name} (${email})\n\nMeddelande: ${message}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "E-post skickad!" }, { status: 200 });
  } catch (error) {
    console.error("Fel vid skickande av e-post:", error);
    return NextResponse.json(
      { message: "E-post kunde inte skickas." },
      { status: 500 }
    );
  }
}
