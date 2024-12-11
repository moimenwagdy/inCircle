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

    // Fetch current user
    const currentUser = await usersCollection.findOne({ _id: currentId });
    if (!currentUser) {
      client.close();
      return NextResponse.json({
        success: false,
        message: "Current user not found",
      });
    }

    // Determine follow/unfollow logic
    const isFollowing = currentUser.following?.includes(userToFollowId);

    // Update following list of the current user
    const updateFollowingAction = isFollowing
      ? { $pull: { following: userToFollowId } }
      : { $addToSet: { following: userToFollowId } };

    const followingResult = await usersCollection.updateOne(
      { _id: currentId },
      updateFollowingAction
    );

    if (followingResult.matchedCount === 0) {
      client.close();
      return NextResponse.json({
        success: false,
        message: "Update failed: Current user not found",
      });
    }

    // Update followers list of the user to follow/unfollow
    const updateFollowersAction = isFollowing
      ? { $pull: { followers: currentId } }
      : { $addToSet: { followers: currentId } };

    const followersResult = await usersCollection.updateOne(
      { _id: userToFollowId },
      updateFollowersAction
    );

    if (followersResult.matchedCount === 0) {
      client.close();
      return NextResponse.json({
        success: false,
        message: "Update failed: User to follow not found",
      });
    }

    // Revalidate cache for paths
    revalidatePath("/components/Home/HomeContent");
    revalidatePath(`/user/[${currentId}]/followers`, "page");
    revalidatePath(`/user/[${userToFollowId}]/followers`, "page");

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
