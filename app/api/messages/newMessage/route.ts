import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export function diff_minutes(dt2: Date, dt1: Date): number {
  const diff = (dt2.getTime() - dt1.getTime()) / 1000 / 60; // Convert milliseconds to minutes
  return Math.abs(Math.round(diff));
}

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

    const now = new Date(currentDate); // Ensure consistent timezone
    let sendNotification = false;

    if (!conversation) {
      // New conversation
      conversation = {
        _id: conversationID,
        participants: participantsIDS,
        lastMessageId: messageID,
        createdAt: currentDate,
        updatedAt: currentDate, // Initialize updatedAt for a new conversation
      };
      await conversationsCollection.insertOne(conversation);
      sendNotification = true;
    } else {
      // Existing conversation
      const lastUpdated = conversation.updatedAt
        ? new Date(conversation.updatedAt)
        : new Date(conversation.createdAt);

      const timeDifference = diff_minutes(now, lastUpdated);

      // Check if more than 15 minutes have passed (15 * 60,000 ms)
      if (timeDifference > 15) {
        sendNotification = true;
      }

      // Update conversation with the new message ID and updatedAt
      await conversationsCollection.updateOne(
        { _id: conversation._id },
        {
          $set: {
            lastMessageId: messageID,
            updatedAt: currentDate, // Update to the current timestamp
          },
        }
      );
    }

    // Insert the new message into the messages collection
    const newMessage = {
      _id: messageID,
      conversationID,
      senderID,
      content,
      createdAt: currentDate,
      readBy: [],
    };

    await messagesCollection.insertOne(newMessage);

    if (sendNotification) {
      // Generate notification
      const toUserId = participantsIDS.filter((id: string) => id !== senderID);
      const fromUserName = await usersCollection.findOne(
        { _id: senderID },
        { projection: { username: 1 } }
      );

      const notification = {
        type: "message",
        _id: notifID,
        toUserId,
        fromUserId: senderID,
        content: `${fromUserName?.username} sent you a message`,
        link: participantsIDS,
        readBy: [],
        createdAt: now,
      };

      await notificationsCollection.insertOne(notification);
    }

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
