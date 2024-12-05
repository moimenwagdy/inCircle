import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { postId } = await req.json();

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const commentsCollection = db.collection("comments");

    const user = await commentsCollection.countDocuments({ postId: postId });

    await client.close();

    return NextResponse.json(user || 0);
  } catch (error) {
    console.error("Error fetching likes:", error);
    return NextResponse.json(
      { error: "Failed to fetch likes" },
      { status: 500 }
    );
  }
}
