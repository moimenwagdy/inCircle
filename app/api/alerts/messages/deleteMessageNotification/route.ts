import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { notifID, currentUserID } = await req.json();

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const notificationsCollection = db.collection("notifications");

    const notification = await notificationsCollection.findOne({
      _id: notifID,
    });
    if (!notification) {
      await client.close();
      return NextResponse.json(
        { error: "Notification not found" },
        { status: 404 }
      );
    }

    const updatedReadBy = [...notification.readBy, currentUserID];

    await notificationsCollection.updateOne(
      { _id: notifID },
      { $set: { readBy: updatedReadBy } }
    );

    const toUserId = Array.isArray(notification.toUserId)
      ? notification.toUserId
      : [];

    const isReadByComplete =
      updatedReadBy.sort().join() === toUserId.sort().join();

    if (isReadByComplete) {
      await notificationsCollection.deleteOne({ _id: notifID });
      await client.close();
      return NextResponse.json({
        success: "Notification deleted successfully",
      });
    }

    await client.close();
    return NextResponse.json({ success: "Notification updated successfully" });
  } catch (error) {
    console.error("Error processing notification:", error);
    return NextResponse.json(
      { error: "Failed to process notification" },
      { status: 500 }
    );
  }
}
