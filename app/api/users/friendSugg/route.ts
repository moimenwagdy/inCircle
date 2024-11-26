import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: NextRequest) {
  const { currentUserId } = await req.json();

  if (!currentUserId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  const client = await MongoClient.connect(mongoCredentials!);
  try {
    const db = client.db("socialApp");
    const usersCollection = db.collection("users");

    const currentUser = await usersCollection.findOne(
      { _id: currentUserId },
      { projection: { following: 1 } }
    );

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const following = currentUser.following || [];
    const excludedIds = [...following.map((id: string) => id), currentUserId];
    const users = await usersCollection
      .find(
        { _id: { $nin: excludedIds } },
        { projection: { username: 1, profile: 1 } }
      )
      .limit(10)
      .toArray();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  } finally {
    client.close();
  }
}
