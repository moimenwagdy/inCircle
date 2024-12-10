import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: NextRequest) {
  try {
    const { userID, bio } = await req.json();

    if (!userID) {
      return NextResponse.json(
        { success: false, message: "User ID is required" },
        { status: 400 }
      );
    }

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const usersCollection = db.collection("users");

    const result = await usersCollection.updateOne(
      { _id: userID },
      { $set: { "profile.bio": bio } }
    );

    if (result.matchedCount === 0) {
      await client.close();
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }
    await client.close();
    return NextResponse.json(
      { success: true, message: "Bio updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating bio:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
