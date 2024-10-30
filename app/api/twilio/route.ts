import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: Request) {
  try {
    const { to, subject, text } = await request.json();

    if (!to || !subject || !text) {
      return NextResponse.json(
        { error: "Missing parameters" },
        { status: 400 }
      );
    }

    // Set up Nodemailer transport with your email provider
    const transporter = nodemailer.createTransport({
      service: "Gmail", // or any other email service provider
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to,
      subject,
      text,
    });

    return NextResponse.json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error },
      { status: 500 }
    );
  }
}
