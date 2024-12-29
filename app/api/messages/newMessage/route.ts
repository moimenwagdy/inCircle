import { MongoClient } from "mongodb";
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
      notifID,
    } = await req.json();
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const conversationsCollection = db.collection("conversations");
    const messagesCollection = db.collection("messages");
    const usersCollection = db.collection("users");
    const notificationsCollection = db.collection("notifications");
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

    const toUserId = participantsIDS.filter((id: string) => {
      return id !== senderID;
    });

    const fromUserName = await usersCollection.findOne(
      { _id: senderID },
      { projection: { username: 1 } }
    );

    const notification = {
      type: "message",
      _id: notifID,
      toUserId: toUserId[0],
      fromUserId: senderID,
      content: `${fromUserName?.username} sent you message`,
      link: participantsIDS,
      isRead: false,
      createdAt: new Date(),
    };

    await messagesCollection.insertOne(newMessage);

    await notificationsCollection.insertOne(notification);

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
