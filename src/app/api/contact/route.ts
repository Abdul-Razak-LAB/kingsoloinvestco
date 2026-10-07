import { Resend } from "resend";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const responseHeaders = { "Cache-Control": "no-store" };

function json(message: string, status: number) {
  return Response.json({ message }, { status, headers: responseHeaders });
}

export async function POST(request: Request) {
  let data: unknown;
  try {
    data = await request.json();
  } catch {
    return json("Please submit a valid inquiry.", 400);
  }

  if (!data || typeof data !== "object") return json("Please submit a valid inquiry.", 400);
  const fields = data as Record<string, unknown>;
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim() : "";
  const phone = typeof fields.phone === "string" ? fields.phone.trim() : "";
  const service = typeof fields.service === "string" ? fields.service.trim() : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";
  const website = typeof fields.website === "string" ? fields.website.trim() : "";

  if (website) return json("Thank you. Your inquiry has been sent.", 200);
  if (!name || name.length > 100 || !emailPattern.test(email) || email.length > 254) {
    return json("Please provide a valid name and email address.", 400);
  }
  if (phone.length > 30 || !service || service.length > 100 || !message || message.length > 3000) {
    return json("Please check the service, phone number, and message fields.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipient = process.env.CONTACT_TO_EMAIL ?? "kabuteysolomon34@gmail.com";
  if (!apiKey || !from) return json("The inquiry service is not configured yet. Please call or email our team.", 503);

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: recipient,
      replyTo: email,
      subject: `Website inquiry: ${service}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        `Service: ${service}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (result.error) {
      console.error("Resend rejected an inquiry email", { name: result.error.name, statusCode: result.error.statusCode });
      return json("We could not send your message right now. Please call or email our team.", 502);
    }
    return json("Your inquiry has been sent.", 200);
  } catch (error) {
    console.error("Inquiry email delivery failed", error instanceof Error ? error.name : "UnknownError");
    return json("We could not send your message right now. Please call or email our team.", 502);
  }
}
