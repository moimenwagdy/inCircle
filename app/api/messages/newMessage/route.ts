import { MongoClient} from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const {
      content,
      senderID,
      messageID,
      currentDate,
      conversationID,
      participantsIDS,
    } = await req.json();
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");

    const conversationsCollection = db.collection("conversations");
    const messagesCollection = db.collection("messages");

    let conversation = await conversationsCollection.findOne({
      _id: conversationID,
    });
    if (!conversation) {
      conversation = {
        _id: conversationID,
        participants: participantsIDS,
        lastMessageId: messageID,
        createdAt: currentDate,
      };
      await conversationsCollection.insertOne(conversation);
    } else {
      await conversationsCollection.updateOne(
        { _id: conversation._id },
        {
          $set: {
            lastMessageId: messageID,
            updatedAt: currentDate,
          },
        }
      );
    }
    const newMessage = {
      _id: messageID,
      conversationID,
      senderID,
      content,
      createdAt: currentDate,
      readBy: [],
    };
    await messagesCollection.insertOne(newMessage);

    await client.close();

    return NextResponse.json(
      {
        success: true,
        message: "Message created successfully",
        conversation,
        newMessage,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating message:", error);

    return NextResponse.json(
      { success: false, error: "Failed to create message" },
      { status: 500 }
    );
  }
}
