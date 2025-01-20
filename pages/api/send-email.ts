import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { name, phone, email, projectInfo } = req.body;

    // Configure Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      host: "anchorinformatics.co.uk", // Replace with your SMTP host (e.g., mail.yourdomain.com)
      port: 587, // SMTP port (use 465 for SSL or 587 for TLS)
      secure: false, // True for 465, false for other ports
      auth: {
        user: "hilda@anchorinformatics.co.uk", // Replace with your SMTP username
        pass: "p?xswG]kYu?f", // Replace with your SMTP password
      },
    });

    try {
      // Send Email
      await transporter.sendMail({
        from: `"Website Contact Form" ${email}`, // Sender address
        to: "info@anchorinformatics.co.uk", // Receiver's email
        subject: "New Contact Form Submission", // Subject line
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${projectInfo}`, // Plain text body
      });

      res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
      console.error("Email sending failed:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
