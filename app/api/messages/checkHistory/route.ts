import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { participantsIDs } = await req.json();

    if (participantsIDs.length < 2) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid participantsIDs. Provide at least two IDs.",
        },
        { status: 400 }
      );
    }

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");

    const conversationsCollection = db.collection("conversations");

    const conversation = await conversationsCollection.findOne({
      $and: [
        { participants: { $all: participantsIDs } },
        { participants: { $size: participantsIDs.length } },
      ],
    });

    await client.close();

    if (!conversation) {
      return NextResponse.json({ success: false }, { status: 200 });
    }

    return NextResponse.json(
      { success: true, conversationID: conversation },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error checking conversation:", error);

    return NextResponse.json(
      { success: false, error: "Failed to check conversation" },
      { status: 500 }
    );
  }
}
