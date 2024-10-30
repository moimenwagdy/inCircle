import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function GET() {
  const client = await MongoClient.connect(mongoCredentials!);
  const db = client.db("socialApp");
  const feedbackCollection = db.collection("users");
  const result = await feedbackCollection.findOne({ age: 40 });
  client.close();
  return NextResponse.json(result, {
    status: 201,
  });
}
//////////////////////////////////////////////////
export async function POST(request: NextRequest) {
  const client = await MongoClient.connect(mongoCredentials!);
  const body = await request.json();
  const db = client.db("socialApp");
  const usersCollection = db.collection("users");

  const exist = await usersCollection.findOne({
    $or: [{ username: body.username }, { email: body.email }],
  });

  if (exist) {
    client.close();
    return NextResponse.json("User name or Email already exist", {
      status: 400,
    });
  }
  const result = await usersCollection.insertOne(body);
  client.close();
  return NextResponse.json(result, { status: 201 });
}
