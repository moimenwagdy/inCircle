"use client";
import PostCommentsContainer from "./PostComments/PostCommentsContainer";
import PostLikeButton from "./PostLikeButton";

const PostInteractButtons: React.FC<{ postId: string }> = ({ postId }) => {
  return (
    <section className="">
      <PostLikeButton postId={postId} />
      <PostCommentsContainer postId={postId} />
    </section>
  );
};

export default PostInteractButtons;
