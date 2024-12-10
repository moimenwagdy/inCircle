import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { usersLikesIds } = await req.json();

    if (!Array.isArray(usersLikesIds) || usersLikesIds.length === 0) {
      return NextResponse.json(
        { message: "Invalid or empty usersLikesIds array" },
        { status: 400 }
      );
    }

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const usersCollection = db.collection("users");

    const users = await usersCollection
      .find({ _id: { $in: usersLikesIds.map((id) => id) } })
      .project({ username: 1, _id: 0 })
      .toArray();

    await client.close();

    const usernames = users.map((user) => user.username);
    return NextResponse.json(usernames);
  } catch (error) {
    console.error("Error fetching likes:", error);
    return NextResponse.json(
      { error: "Failed to fetch likes" },
      { status: 500 }
    );
  }
}
