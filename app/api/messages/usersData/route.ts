import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { participandsIDs, currentUserId } = await req.json();

    if (!mongoCredentials) {
      throw new Error("MongoDB credentials are not set.");
    }

    const client = await MongoClient.connect(mongoCredentials);
    const db = client.db("socialApp");
    const usersCollection = db.collection("users");

    const filteredIDs = participandsIDs
      .filter((id: string) => id !== currentUserId)

    const users = await usersCollection
      .find(
        { _id: { $in: filteredIDs } },
        { projection: { profile: 1, username: 1 } }
      )
      .toArray();

    await client.close();

    return NextResponse.json(users || []);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
