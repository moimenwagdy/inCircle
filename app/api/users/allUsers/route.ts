import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function GET(req: Request) {
  try {
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const users = db.collection("users");

    const userIds = await users.find({}, { projection: { _id: 1 } }).toArray();
    const idsArray = userIds.map((user) => user._id.toString());
  
    await client.close();
    return NextResponse.json(idsArray);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
