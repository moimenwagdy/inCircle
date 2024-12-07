import { MongoClient } from "mongodb";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const commentsCollection = db.collection("comments");

    const user = await commentsCollection.insertOne(body);

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