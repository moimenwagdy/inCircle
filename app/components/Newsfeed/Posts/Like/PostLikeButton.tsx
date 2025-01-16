import { useTranslations } from "next-intl";
import React from "react";
import LikeStatus from "../LikeStatus";
import { useSession } from "next-auth/react";

const PostLikeButton: React.FC<{
  onClick: () => void;
  likeAdded: boolean;
  currentUserLike: boolean;
}> = ({ onClick, currentUserLike, likeAdded }) => {
  const session = useSession();
  const isLoggedIn = session.status === "authenticated";
  const tPost = useTranslations("singlePost");

  return (
    <button
      disabled={!isLoggedIn}
      onClick={onClick}
      className={`group  disabled:hover:text-black/50 hover:text-blueColor ${
        likeAdded || currentUserLike
          ? "text-blueColor font-bold"
          : "text-black dark:text-white "
      }`}>
      <LikeStatus
        key={
          likeAdded || currentUserLike
            ? `${tPost("liked")}`
            : `${tPost("like")}`
        }
        likeState={
          likeAdded || currentUserLike
            ? `${tPost("liked")}`
            : `${tPost("like")}`
        }
      />
    </button>
  );
};

export default PostLikeButton;
