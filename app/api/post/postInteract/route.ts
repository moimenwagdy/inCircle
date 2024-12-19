import { MongoClient } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;
export async function POST(req: Request) {
  try {
    const { currentUserId, postId, notifID } = await req.json();
    if (!currentUserId || !postId) {
      return NextResponse.json(
        { message: "Missing currentUserId or postId" },
        { status: 400 }
      );
    }
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const postsCollection = db.collection("posts");
    const notifCollection = db.collection("notifications");
    const usersCollection = db.collection("users");
    const post = await postsCollection.findOne({ _id: postId });
    if (!post) {
      await client.close();
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
    const updateOperation = post.likes?.includes(currentUserId)
      ? { $pull: { likes: currentUserId } }
      : { $addToSet: { likes: currentUserId } };
    const result = await postsCollection.updateOne(
      { _id: postId },
      updateOperation
    );
    const postAuthorId = await postsCollection.findOne(
      { _id: postId },
      { projection: { authorId: 1 } }
    );
    const fromUserName = await usersCollection.findOne(
      { _id: currentUserId },
      { projection: { username: 1 } }
    );
    const notification = {
      type: "like",
      _id: notifID,
      toUserId: postAuthorId?.authorId!,
      fromUserId: currentUserId,
      content: `${fromUserName?.username} liked your post`,
      link: `/posts/${postId}`,
      isRead: false,
      createdAt: new Date(),
    };

    if (result.modifiedCount > 0) {
      revalidatePath("/app/api/post");

      if (updateOperation.$pull) {
        return NextResponse.json({
          message: `Like removed successfully`,
          added: false,
          removed: true,
        });
      }
      if (updateOperation.$addToSet) {
        const sendNotif = await notifCollection.insertOne(notification);
        return NextResponse.json({
          message: `Like added successfully`,
          added: true,
          removed: false,
        });
      }
    }
    await client.close();
    return NextResponse.json({ message: "No changes made" });
  } catch (error) {
    console.error("Error updating post likes:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
