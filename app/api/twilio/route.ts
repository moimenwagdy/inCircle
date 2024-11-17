import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
const nodemailer = require("nodemailer");
const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(request: Request) {
  const client = await MongoClient.connect(mongoCredentials!);
  const db = client.db("socialApp");
  const usersCollection = db.collection("users");
  try {
    const { userID, verificationCode } = await request.json();
    const result = await usersCollection.findOne({ _id: userID });
    const userEmail = result?.email;

    if (!userID || !verificationCode) {
      return NextResponse.json(
        { error: "Missing parameters" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: userEmail,
      subject: "inCircle verifications",
      text: `your code : ${verificationCode}`,
    });
    client.close();

    return NextResponse.json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error },
      { status: 500 }
    );
  }
}
