import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { userId, page, limit } = await req.json(); // Default values

    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 }
      );
    }

    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const usersCollection = db.collection("users");
    const postsCollection = db.collection("posts");

    const user = await usersCollection.findOne(
      { _id: userId },
      { projection: { following: 1 } }
    );
    if (!user) {
      await client.close();
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const authorIds = [...user.following, userId];
    const skip = (page - 1) * limit;

    const postsWithUserData = await postsCollection
      .aggregate([
        { $match: { authorId: { $in: authorIds } } },
        {
          $lookup: {
            from: "users",
            localField: "authorId",
            foreignField: "_id",
            as: "author",
          },
        },
        { $unwind: "$author" },
        {
          $project: {
            _id: 1,
            content: 1,
            createdAt: 1,
            feeling: 1,
            likes: 1,
            comments: 1,
            media: 1,
            "author._id": 1,
            "author.username": 1,
            "author.profile.avatar": 1,
          },
        },
        { $sort: { createdAt: -1 } },
        { $skip: skip },
        { $limit: limit },
      ])
      .toArray();

    await client.close();
    return NextResponse.json(postsWithUserData);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
