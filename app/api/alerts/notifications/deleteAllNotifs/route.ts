import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;
export async function POST(req: Request) {
  try {
    const { userID } = await req.json();
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const notificationsCollection = db.collection("notifications");
    await notificationsCollection.deleteMany({ toUserId: userID });
    await client.close();
    return NextResponse.json({ success: "notifications cleared successfully" });
  } catch (error) {
    console.error("Error clearing notifications:", error);
    return NextResponse.json(
      { error: "Failed to clear notifications" },
      { status: 500 }
    );
  }
}
