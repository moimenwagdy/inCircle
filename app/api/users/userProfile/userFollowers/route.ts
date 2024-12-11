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

    const currentUser = await usersCollection.findOne(
      { _id: currentUserId },
      { projection: { followers: 1 } }
    );

    if (!currentUser) {
      client.close();
      return NextResponse.json(
        { success: false, message: "User not found" },
        { status: 404 }
      );
    }

    const followers = currentUser.followers || [];

    if (followers.length === 0) {
      client.close();
      return NextResponse.json(
        { success: false, message: "No followers found" },
        { status: 200 }
      );
    }

    const followerDetails = await usersCollection
      .find(
        { _id: { $in: followers } },
        { projection: { _id: 1, username: 1, profile: 1 } }
      )
      .toArray();

    client.close();

    return NextResponse.json(
      { success: true, followers: followerDetails },
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
