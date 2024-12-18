"use client";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { followUser } from "./functions/followUser";
import { getFollowing } from "./functions/getFollowing";

const FollowFriendButton: React.FC<{
  userToFollowId: string;
}> = ({ userToFollowId }) => {
  const [state, setState] = useState<{
    success: boolean;
    message: string;
  }>({ success: false, message: "" });
  const [following, setFollowing] = useState<string[]>([]);
  const [areFriends, setAreFriends] = useState<boolean>(false);
  const session = useSession();
  const currentUserId = session.data?.user._id;
  const handleFollowUser = async () => {
    const result = await followUser(userToFollowId, currentUserId!);
    setState(result);
  };
  useEffect(() => {
    if (session.data?.user._id) {
      const getUserFollowingIDS = async () => {
        const response = await getFollowing(session.data?.user._id!);
        if (response.success) {
          setFollowing(response.following.following);
        }
      };
      getUserFollowingIDS();
    }
  }, [session.data?.user._id, state]);

  useEffect(() => {
    if (following.includes(userToFollowId)) {
      setAreFriends(true);
    }
    if (!following.includes(userToFollowId)) {
      setAreFriends(false);
    }
  }, [following,userToFollowId]);
  return (
    <button
      onClick={handleFollowUser}
      className="text-xs text-blueColor hover:text-black dark:hover:text-white disabled:text-gray-500 me-2">
      {areFriends ? "Unfollow" : "Follow"}
    </button>
  );
};

export default FollowFriendButton;
