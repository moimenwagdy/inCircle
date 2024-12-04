import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { userID } = await req.json();

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const usersCollectoion = db.collection("users");

    const user = await usersCollectoion.findOne(
      { _id: userID },
      { projection: { profile: 1, username: 1 } }
    );

    await client.close();

    return NextResponse.json(user || []);
  } catch (error) {
    console.error("Error fetching likes:", error);
    return NextResponse.json(
      { error: "Failed to fetch likes" },
      { status: 500 }
    );
  }
}
