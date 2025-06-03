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
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
);

//common middleware
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));

app.use(cookieParser());

const resend = new Resend(process.env.RESEND_KEY)

app.post('/api/v1/sendEmail', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body
        if([name, email, subject, message].some((value) => value?.trim() === "")){
            throw new Error("Please fill all the fields")
        }

        const res1 = await resend.emails.send({
            from: `Portfolio <${process.env.DOMAIN}>`,
            to: process.env.EMAIL,
            subject: subject,
            html: `<p>I am ${name}, I have work for you : ${message}. You can contact me at ${email} </p>`
        })
        const res2 = await resend.emails.send({
          from: `Portfolio <${process.env.EMAIL}>`,
          to: email,
          subject: "Email response | HARSHITH MV",
          html: `<p>Thank you for reaching out! I'll review your message and respond as soon as possible. If you have urgent queries, feel free to email me at <a href="mailto:harshithmv2002@gmail.com">harshithmv2002@gmail.com</a>.</p>`,
        });

        console.log("Me : ", res1)
        console.log("You : ", res2)

        res.status(200).json({Me: res1, You: res2})
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error.message})
    }
})

const port = process.env.PORT || 5000

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
})
