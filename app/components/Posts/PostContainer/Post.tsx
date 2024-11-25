import { post } from "@/globalTypes/globalTypes";
import React from "react";
import PostUserData from "./PostUserData";
import PostContent from "./PostContent";
import PostButtonsLikeAndComment from "./PostButtonsLikeAndComment";

const Post: React.FC<{ post: post }> = ({ post }) => {
  return (
    <section className="w-full flex flex-col gap-y-1 py-3 px-6 ring-[1px] ring-black/10 dark:ring-white/10">
      <PostUserData
        avatar={post.author.profile.avatar}
        createdAt={post.createdAt}
        feeling={post.feeling}
        userName={post.author.username}
      />
      <PostContent content={post.content} postMedia={post.media} />
      <PostButtonsLikeAndComment />
    </section>
  );
};

export default Post;
