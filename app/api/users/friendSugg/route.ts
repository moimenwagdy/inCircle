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

    // Find the current user's following array
    const currentUser = await usersCollection.findOne(
      { _id: currentUserId },
      { projection: { following: 1 } } // Only retrieve the 'following' field
    );

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const following = currentUser.following || [];

    // Query for users not in the following array
    const users = await usersCollection
      .find(
        { _id: { $nin: following.map((id: string) => id) } }, // Exclude followed users
        { projection: { username: 1, profile: 1 } } // Return only required fields
      )
      .limit(10) // Limit to 10 results
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
