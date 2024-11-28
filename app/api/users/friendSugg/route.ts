import { MongoClient } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

if (!mongoCredentials) {
  throw new Error(
    "MongoDB connection string is not set in environment variables"
  );
}

export async function POST(req: NextRequest) {
  try {
    const { currentUserId, queryPayload } = await req.json();

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
      { projection: { following: 1 } }
    );

    if (!currentUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const following = currentUser.following || [];
    const excludedIds = [...following.map((id: string) => id), currentUserId];

    const query: any = { _id: { $nin: excludedIds } };

    if (queryPayload && queryPayload.trim() !== "") {
      query.username = { $regex: queryPayload, $options: "i" };
    }

    const users = await usersCollection
      .find(query, { projection: { username: 1, profile: 1 } })
      .limit(10)
      .toArray();
    revalidatePath("/");
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
