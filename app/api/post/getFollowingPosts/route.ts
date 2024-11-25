import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { userId } = await req.json();
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const usersCollection = db.collection("users");
    const postsCollection = db.collection("posts");
    const user = await usersCollection.findOne({ _id: userId });
    if (!user || user.following.length === 0) {
      return NextResponse.json(
        { message: "User not found or no following" },
        { status: 404 }
      );
    }
    const postsWithUserData = await postsCollection
      .aggregate([
        {
          $match: {
            authorId: { $in: user.following.map((id: string) => id) },
          },
        },
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
            authorId: 1,
            feeling: 1,
            likes: 1,
            comments: 1,
            media: 1,
            "author._id": 1,
            "author.username": 1,
            "author.profile.avatar": 1,
          },
        },
      ])
      .toArray();
    const shuffledPosts = postsWithUserData.sort(() => Math.random() - 0.5);
    await client.close();
    return NextResponse.json(shuffledPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
