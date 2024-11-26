import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";
import { revalidatePath } from "next/cache";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export const POST = async (req: NextRequest) => {
  try {
    const { userToFollowId, currentId } = await req.json();
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const usersCollection = db.collection("users");

    const result = await usersCollection.updateOne(
      { _id: currentId },
      { $addToSet: { following: userToFollowId } }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      }); 
    }
    revalidatePath("/api/post/getFollowingPosts");
    revalidatePath("/");
    revalidatePath("/api/users/friendSugg");
    return NextResponse.json({
      success: true,
      message: "User followed successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
