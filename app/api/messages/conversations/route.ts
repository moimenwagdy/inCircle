import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { userID } = await req.json();

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");

    const conversationsCollection = db.collection("conversations");
    const usersCollection = db.collection("users");
    const messagesCollection = db.collection("messages");
    const conversations = await conversationsCollection
      .find({ participants: userID })
      .toArray();

    const enrichedConversations = await Promise.all(
      conversations.map(async (conversation) => {
        const participantIds = conversation.participants.filter(
          (id: string) => id !== userID
        );
        const participants = await usersCollection
          .find({ _id: { $in: participantIds } })
          .project({ username: 1, profile: 1 })
          .toArray();

        const lastMessage = await messagesCollection.findOne({
          _id: conversation.lastMessageId,
        });
        return {
          ...conversation,
          participants,
          lastMessage,
          participantsIDS: conversation.participants,
        };
      })
    );

    await client.close();

    return NextResponse.json(
      { success: true, conversations: enrichedConversations },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching conversations:", error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch conversations" },
      { status: 500 }
    );
  }
}
