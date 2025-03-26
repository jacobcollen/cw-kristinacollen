import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
    }

    const data = await resend.emails.send({
      from: "nyhetsbrev@kristinacollen.se",
      to: email,
      subject: "Tack för att du prenumererar! 🙂",
      html: "<p>Tack för att du anmälde dig till mitt nyhetsbrev. Jag skickar ut nyhetsbrevet lite då och då. Mvh Kristina</p>",
    });

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
