import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;
export async function POST(req: Request) {
  try {
    const { notifID } = await req.json();
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const notificationsCollection = db.collection("notifications");
    await notificationsCollection.deleteOne({
      _id: notifID,
    });
    await client.close();
    return NextResponse.json({ success: "notification deleted successfully" });
  } catch (error) {
    console.error("Error deleting notification:", error);
    return NextResponse.json(
      { error: "Failed to delete notification" },
      { status: 500 }
    );
  }
}
