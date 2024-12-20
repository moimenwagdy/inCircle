import { NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const mongoCredentials = process.env.NEXT_PUBLIC_MONGO_STR;

export const POST = async (req: NextRequest) => {
  try {
    const { userToFollowId, currentId, notifID } = await req.json();
    const client = await MongoClient.connect(mongoCredentials!);
    const db = client.db("socialApp");
    const usersCollection = db.collection("users");
    const notificationCollection = db.collection("notifications");
    const currentUser = await usersCollection.findOne({ _id: currentId });
    if (!currentUser) {
      client.close();
      return NextResponse.json({
        success: false,
        message: "Current user not found",
      });
    }

    const isFollowing = currentUser.following?.includes(userToFollowId);

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

    const updateFollowersAction = isFollowing
      ? { $pull: { followers: currentId } }
      : { $addToSet: { followers: currentId } };

    const followersResult = await usersCollection.updateOne(
      { _id: userToFollowId },
      updateFollowersAction
    );

    if (!isFollowing) {
      const fromUserName = await usersCollection.findOne(
        { _id: currentId },
        { projection: { username: 1 } }
      );

      const notification = {
        type: "like",
        _id: notifID,
        toUserId: userToFollowId,
        fromUserId: currentId,
        content: `${fromUserName?.username} started following you`,
        link: `/users/${currentId}`,
        isRead: false,
        createdAt: new Date(),
      };

      await notificationCollection.insertOne(notification);
    }

    if (followersResult.matchedCount === 0) {
      client.close();
      return NextResponse.json({
        success: false,
        message: "Update failed: User to follow not found",
      });
    }

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
