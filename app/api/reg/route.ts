import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Create Transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:"chvamshi03@gmail.com",// Your Gmail
      pass: "plsb wnhn qeon znsb", // App Password
    },
  });

  try {
    // Send Email
    const info = await transporter.sendMail({
      from: 'chvamshi03@gmail.com', // Sender Email
      to: "vasu@vkdt.in, dev@vkdt.in", // Receiver Email (can be changed)
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
