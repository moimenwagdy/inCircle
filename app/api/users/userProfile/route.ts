import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: NextRequest) {
  try {
    const { userID } = await req.json();

    if (!userID) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const usersCollection = db.collection("users");

    const currentUser = await usersCollection.findOne(
      { _id: userID },
      { projection: { passwordHash: 0, verified: 0 } }
    );

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(currentUser, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
