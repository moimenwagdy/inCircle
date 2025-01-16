"use client";
import PostCommentsContainer from "./PostComments/PostCommentsContainer";
import PostLike from "./Like/PostLike";

const PostInteractButtons: React.FC<{ postId: string }> = ({ postId }) => {
  return (
    <section className="">
      <PostLike postId={postId} />
      <PostCommentsContainer postId={postId} />
    </section>
  );
};

export default PostInteractButtons;
