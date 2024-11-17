import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(request: NextRequest) {
  const client = await MongoClient.connect(mongoCredentials!);
  const body = await request.json();
  const db = client.db("socialApp");
  const userAcvtivationCollection = db.collection("userActivation");
  const usersCollection = db.collection("users");
  const result = await userAcvtivationCollection.findOne({ _id: body._id });

  if (body.code === result?.verificationCode) {
    const removeCode = await userAcvtivationCollection.deleteOne({
      verificationCode: result?.verificationCode,
    });
    const updateUserIsVerified = await usersCollection.updateOne(
      {
        _id: body._id,
      },
      { $set: { verified: true } }
    );

    return NextResponse.json({
      success: true,
      message: "code match, thank you!",
    });
  }
  client.close();
  return NextResponse.json({
    success: false,
    message: "code dosn't match",
  });
}
