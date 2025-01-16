"use client";
import { useLikeFeature } from "../customHook/useLikeFeature";
import LikesNamesList from "./LikesNamesList";
import PostLikeButton from "./PostLikeButton";

const PostLike: React.FC<{ postId: string }> = ({ postId }) => {
  const {
    LikesIsNOtEmpty,
    likeAdded,
    likes,
    userNames,
    handleInteraction,
    currentUserLike,
  } = useLikeFeature(postId);

  return (
    <aside className="flex flex-row-reverse justify-between w-full self-start items-center">
      <LikesNamesList
        LikesIsNOtEmpty={LikesIsNOtEmpty}
        likes={likes}
        userNames={userNames}
      />
      <PostLikeButton
        onClick={handleInteraction}
        likeAdded={likeAdded!}
        currentUserLike={currentUserLike}
      />
    </aside>
  );
};
export default PostLike;