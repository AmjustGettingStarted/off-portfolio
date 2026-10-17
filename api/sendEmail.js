import { Resend } from "resend";

// ---------------------------------------------------------------------------
// Vercel Serverless Function: POST /api/sendEmail
// Replaces the old Express route (server/index.js → POST /api/v1/sendEmail).
// ---------------------------------------------------------------------------

const SENDER = "Contact <contact@thehmv.tech>";

const getReceiverEmail = () =>
  process.env.RECEIVER_EMAIL ||
  process.env.CONTACT_RECEIVER_EMAIL ||
  process.env.EMAIL ||
  "harshithmv2002@gmail.com";

const getResendKey = () =>
  process.env.RESEND_API_KEY || process.env.RESEND_KEY;

const isValidEmail = (value) =>
  typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export default async function handler(req, res) {
  // CORS (same-origin in production; permissive headers keep axios/fetch happy)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST, OPTIONS");
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    // Vercel parses JSON bodies automatically when Content-Type is
    // application/json; handle a raw string body just in case.
    let body = req.body;
    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        return res.status(400).json({ error: "Invalid JSON body" });
      }
    }

    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const subject = body?.subject?.trim();
    const message = body?.message?.trim();
    const website_url = typeof body?.website_url === "string" ? body.website_url.trim() : body?.website_url;
    const formLoadedAt = body?.formLoadedAt;

    // Anti-bot Defense: Invisible Honeypot + Minimum Time-to-Submit Check
    // 1. Honeypot Check: If website_url is present and not empty, it is an automated bot.
    const isHoneypotFilled = Boolean(website_url);

    // 2. Submission Speed Check: If !formLoadedAt or elapsedSeconds < 2.5, it submitted faster than humanly possible.
    const elapsedSeconds = formLoadedAt ? (Date.now() - Number(formLoadedAt)) / 1000 : 0;
    const isTooFast = !formLoadedAt || Number.isNaN(elapsedSeconds) || elapsedSeconds < 2.5;

    if (isHoneypotFilled || isTooFast) {
      console.warn(
        `[Anti-Bot Intercepted] honeypot=${isHoneypotFilled}, elapsed=${Number(elapsedSeconds).toFixed(2)}s. Silently dropping submission.`
      );
      // Return fake HTTP 200 so automated crawlers do not retry or detect the block
      return res.status(200).json({
        success: true,
        message: "Message sent successfully",
      });
    }

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "Please fill all the fields" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const apiKey = getResendKey();
    if (!apiKey) {
      console.error("Resend key missing (set RESEND_API_KEY in Vercel)");
      return res.status(500).json({ error: "Email service not configured" });
    }

    const resend = new Resend(apiKey);
    const toEmail = getReceiverEmail();

    // 1. Notification to me — replyTo is the visitor so Reply goes to them.
    const ownerMail = await resend.emails.send({
      from: SENDER,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio: ${subject} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>`,
    });

    if (ownerMail.error) {
      console.error("Resend owner-mail error:", ownerMail.error);
      return res
        .status(502)
        .json({ error: ownerMail.error.message || "Failed to send email" });
    }

    // 2. Auto-reply to the visitor — also sent FROM the verified domain.
    const autoReply = await resend.emails.send({
      from: SENDER,
      to: email,
      replyTo: toEmail,
      subject: "Thanks for reaching out! | HARSHITH MV",
      html: `<p>Hi ${name},</p><p>Thank you for reaching out! I'll review your message ("${subject}") and respond as soon as possible. If you have urgent queries, feel free to email me at <a href="mailto:${toEmail}">${toEmail}</a>.</p><p>Best,<br/>Harshith MV</p>`,
    });

    if (autoReply.error) {
      // Owner mail already delivered — don't fail the request over this.
      console.error("Resend auto-reply error:", autoReply.error);
    }

    return res.status(200).json({ success: true, Me: ownerMail, You: autoReply });
  } catch (error) {
    console.error("sendEmail error:", error);
    return res.status(500).json({ error: error?.message || "Internal server error" });
  }
}
