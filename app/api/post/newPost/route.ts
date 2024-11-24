import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  const post = await req.json();
  const client = await MongoClient.connect(mongoCredentials!);
  const db = client.db("socialApp");
  const usersCollection = db.collection("posts");

  const newPost = await usersCollection.insertOne(post);

  return NextResponse.json(newPost);
}
