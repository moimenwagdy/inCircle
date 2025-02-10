import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function GET() {
  try {
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const posts = db.collection("posts");

    const userIds = await posts.find({}, { projection: { _id: 1 } }).toArray();
    const idsArray = userIds.map((post) => post._id.toString());

    await client.close();
    return NextResponse.json(idsArray);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
