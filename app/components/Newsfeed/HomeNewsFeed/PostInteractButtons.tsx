"use client";
import { useState } from "react";
import PostComments from "./PostComments/PostComments";
import PostLikeButton from "./PostLikeButton";

const PostInteractButtons: React.FC<{ postId: string }> = ({ postId }) => {
 

  const [enableGetComments, setEnableGetComments] = useState<boolean>(false);
  const handleGetCommentsState = () => {
    setEnableGetComments((prv) => !prv);
   
  };
  return (
    <section className="py-1">
      <PostLikeButton postId={postId} />
      {enableGetComments && <PostComments postId={postId} key={postId} />}
      <button
        className={`${enableGetComments ? "text-xs" : ""}`}
        onClick={handleGetCommentsState}>
        {enableGetComments ? "Hide" : "Comments"}
      </button>
    </section>
  );
};

export default PostInteractButtons;
