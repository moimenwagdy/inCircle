"use client";

import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { followUser } from "./functions/followUser";

const FollowFriendButton: React.FC<{ userToFollowId: string }> = ({
  userToFollowId,
}) => {
  const [state, setState] = useState<{
    success: boolean;
    message: string;
  }>({ success: false, message: "" });
  const session = useSession();
  const currentUserId = session.data?.user._id;

  const handleFollowUser = async () => {
    const result = await followUser(userToFollowId, currentUserId!);
    setState(result);
  };
  return (
    <button
      disabled={state?.success}
      onClick={handleFollowUser}
      className="text-xs text-blueColor hover:text-black dark:hover:text-white disabled:text-gray-500">
      {state?.success ? "Following" : "Follow"}
    </button>
  );
};

export default FollowFriendButton;
