import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { id } = await req.json();
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const notificationsCollection = db.collection("notifications");

    const unreadNotifications = await notificationsCollection
      .find({
        toUserId: { $elemMatch: { $eq: id } },
        type: "message",
      })
      .toArray();
    await client.close();

    return NextResponse.json(
      { success: true, notifications: unreadNotifications },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch notifications" },
      { status: 500 }
    );
  }
}
