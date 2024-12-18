import { MongoClient } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  const { postId } = await req.json();
  const client = await MongoClient.connect(mongoCredentials!);
  const db = client.db("socialApp");
  const PostsCollection = db.collection("posts");

  const deletePost = await PostsCollection.deleteOne({ _id: postId });
  revalidatePath("/");
  revalidatePath("/user/[userID]/posts");
  return NextResponse.json(deletePost);
}
