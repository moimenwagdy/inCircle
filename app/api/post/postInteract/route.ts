import { MongoClient } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { currentUserId, postId } = await req.json();

    if (!currentUserId || !postId) {
      return NextResponse.json(
        { message: "Missing currentUserId or postId" },
        { status: 400 }
      );
    }

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const postsCollection = db.collection("posts");

    const post = await postsCollection.findOne({ _id: postId });

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    const updateOperation = post.likes?.includes(currentUserId)
      ? { $pull: { likes: currentUserId } } // Remove currentUserId if it exists
      : { $addToSet: { likes: currentUserId } }; // Add currentUserId if it doesn't exist

    const result = await postsCollection.updateOne(
      { _id: postId },
      updateOperation
    );

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
        return NextResponse.json({
          message: `Like added successfully`,
          added: true,
          removed: false,
        });
      }
    }

    return NextResponse.json({ message: "No changes made" });
  } catch (error) {
    console.error("Error updating post likes:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
