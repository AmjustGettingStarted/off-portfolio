import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { Resend } from 'resend';
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests with no origin (mobile apps, curl, etc.)
            if (!origin) return callback(null, true);
            const allowed = (process.env.CORS_ORIGIN || "")
                .split(",")
                .map((o) => o.trim())
                .filter(Boolean);
            // If no CORS_ORIGIN configured, allow all in dev, otherwise check list
            if (allowed.length === 0 || allowed.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error(`CORS blocked for origin: ${origin}`));
        },
        credentials: true
    })
);

//common middleware
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));

app.use(cookieParser());

const resend = new Resend(process.env.RESEND_KEY)

if (!process.env.RESEND_KEY) {
    console.warn("WARNING: RESEND_KEY is missing. Emails will fail.");
}

// Health check
app.get('/', (req, res) => {
    res.status(200).json({ status: "OK", message: "Portfolio backend running" });
});

app.post('/api/v1/sendEmail', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body
        if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
            return res.status(400).json({ error: "Please fill all the fields" });
        }

        // Basic email format check
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return res.status(400).json({ error: "Invalid email address" });
        }

        const toEmail =
            process.env.CONTACT_RECEIVER_EMAIL ||
            process.env.EMAIL ||
            "harshithmv2002@gmail.com";
        // `from` must use your verified domain in Resend.
        // Verified: contact@thehmv.tech (thehmv.tech)
        const fromEmail = process.env.DOMAIN || "contact@thehmv.tech";

        // 1. Notify portfolio owner (you receive this at harshithmv2002@gmail.com)
        // replyTo = visitor's email so hitting Reply goes straight to the sender.
        const res1 = await resend.emails.send({
            from: `Contact <${fromEmail}>`,
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
                </div>`
        });

        if (res1.error) {
            console.error("Resend owner-mail error:", res1.error);
            return res.status(502).json({ error: res1.error.message || "Failed to send email" });
        }

        // 2. Auto-reply to the visitor (also sent FROM your verified domain, never from gmail)
        const res2 = await resend.emails.send({
          from: `Harshith MV <${fromEmail}>`,
          to: email,
          replyTo: toEmail,
          subject: "Thanks for reaching out! | HARSHITH MV",
          html: `<p>Hi ${name},</p><p>Thank you for reaching out! I'll review your message ("${subject}") and respond as soon as possible. If you have urgent queries, feel free to email me at <a href="mailto:${toEmail}">${toEmail}</a>.</p><p>Best,<br/>Harshith MV</p>`,
        });

        if (res2.error) {
            // Owner mail already sent, so still return success but flag auto-reply failure
            console.error("Resend auto-reply error:", res2.error);
        }

        console.log("Me : ", res1)
        console.log("You : ", res2)

        res.status(200).json({ success: true, Me: res1, You: res2 })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
})

const port = process.env.PORT || 5000

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
})
