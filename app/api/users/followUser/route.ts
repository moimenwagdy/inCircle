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
    const currentUser = await usersCollection.findOne({ _id: currentId });
    if (!currentUser) {
      client.close();
      return NextResponse.json({
        success: false,
        message: "Current user not found",
      });
    }
    const isFollowing = currentUser.following?.includes(userToFollowId);

    const updateAction = isFollowing
      ? { $pull: { following: userToFollowId } }
      : { $addToSet: { following: userToFollowId } };

    const result = await usersCollection.updateOne(
      { _id: currentId },
      updateAction
    );

    if (result.matchedCount === 0) {
      client.close();
      return NextResponse.json({
        success: false,
        message: "Update failed: User not found",
      });
    }

    revalidatePath("/components/Home/HomeContent");
    revalidatePath(`/user/[${currentId}]/followers`, "page");

    client.close();
    return NextResponse.json({
      success: true,
      message: isFollowing
        ? "User unfollowed successfully"
        : "User followed successfully",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
