import { notification } from "@/globalTypes/globalTypes";
import { MongoClient, ObjectId } from "mongodb";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";
import { date } from "zod";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { comment, postId, userID, createdAt, _id, notifID } =
      await req.json();

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const commentsCollection = db.collection("comments");
    const notifCollection = db.collection("notifications");
    const postsCollection = db.collection("posts");
    const usersCollection = db.collection("users");
    const user = await commentsCollection.insertOne({
      comment,
      postId,
      userID,
      createdAt,
      _id,
    });
    //////////////////////////
    const postAuthorId = await postsCollection.findOne(
      { _id: postId },
      { projection: { authorId: 1 } }
    );
    const fromUserName = await usersCollection.findOne(
      { _id: userID },
      { projection: { username: 1 } }
    );
    const notification = {
      type: "comment",
      _id: notifID,
      toUserId: postAuthorId?.authorId!,
      fromUserId: userID,
      content: `${fromUserName?.username} commented on your post`,
      link: `/posts/${postId}`,
      isRead: false,
      createdAt: new Date(),
    };
    const sendNotif = await notifCollection.insertOne(notification);
    //////////////////////////
    await client.close();

    return NextResponse.json(user || []);
  } catch (error) {
    console.error("Error fetching likes:", error);
    return NextResponse.json(
      { error: "Failed to fetch likes" },
      { status: 500 }
    );
  }
}
