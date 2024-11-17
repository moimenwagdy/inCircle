import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(request: NextRequest) {
  const client = await MongoClient.connect(mongoCredentials!);
  const body = await request.json();
  const db = client.db("socialApp");
  const usersCollection = db.collection("userActivation");
  const isExsist = await usersCollection.findOne({
    _id: body._id,
  });
  if (isExsist) {
    const updateCode = await usersCollection.updateOne(
      { _id: body._id },
      { $set: { verificationCode: body.verificationCode } }
    );
    return NextResponse.json(updateCode, { status: 201 });
  }
  const result = await usersCollection.insertOne(body);
  client.close();
  return NextResponse.json(result, { status: 201 });
}
