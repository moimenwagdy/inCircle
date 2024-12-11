import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: NextRequest) {
  try {
    const { currentUserId } = await req.json();

    if (!currentUserId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const usersCollection = db.collection("users");

    const currentUserFollowing = await usersCollection.findOne(
      { _id: currentUserId },
      { projection: { following: 1 } }
    );

    if (!currentUserFollowing) {
      client.close();
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }


    client.close();

    return NextResponse.json(
      { success: true, following: currentUserFollowing },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching followers:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
