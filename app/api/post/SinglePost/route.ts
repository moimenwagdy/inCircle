import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export async function POST(req: Request) {
  try {
    const { postID } = await req.json();

    if (!postID) {
      return NextResponse.json(
        { success: false, message: "Post ID is required" },
        { status: 400 }
      );
    }
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const postsCollection = db.collection("posts");

    const postWithUserData = await postsCollection
      .aggregate([
        { $match: { _id: postID } },
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
      ])
      .toArray();
    await client.close();

    if (postWithUserData.length === 0) {
      return NextResponse.json(
        { success: false, message: "Post not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { success: true, post: postWithUserData[0] },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching the post:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch the post" },
      { status: 500 }
    );
  }
}
