import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { conversationID } = await req.json();

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");

    const messagesCollection = db.collection("messages");

    const messages = await messagesCollection
      .find({ conversationID: conversationID })
      .sort({ createdAt: 1 }) 
      .toArray();

    await client.close();

    return NextResponse.json(
      { success: true, messages },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching messages:", error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch messages" },
      { status: 500 }
    );
  }
}
