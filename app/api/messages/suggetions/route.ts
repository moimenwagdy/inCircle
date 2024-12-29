import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { userID } = await req.json();

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");

    const userCollection = db.collection("users");

    const user = await userCollection.findOne({ _id: userID });
    if (!user || !user.following) {
      return NextResponse.json(
        { success: false, error: "User not found or no following" },
        { status: 404 }
      );
    }

    const followingUsers = await userCollection
      .find({ _id: { $in: user.following } })
      .project({ username: 1, profile: 1 })
      .toArray();

    await client.close();

    return NextResponse.json(
      { success: true, users: followingUsers },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching following users:", error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch following users" },
      { status: 500 }
    );
  }
}
