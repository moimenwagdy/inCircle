import { post } from "@/globalTypes/globalTypes";
import React from "react";
import PostUserData from "./PostUserData";
import PostContent from "./PostContent";
import PostButtonsLikeAndComment from "./PostButtonsLikeAndComment";

const Post: React.FC<{ post: post }> = async ({ post }) => {
  return (
    <li className="w-full flex flex-col gap-y-1">
      <div className="ring-[1px] ring-black/5 dark:ring-white/5 py-6 px-6 h-full space-y-3">
        <PostUserData
          avatar={post.author.profile.avatar}
          createdAt={post.createdAt}
          feeling={post.feeling}
          userName={post.author.username}
        />
        <PostContent content={post.content} postMedia={post.media} />
      </div>
      <PostButtonsLikeAndComment
        key={post._id}
        postId={post._id}
      />
    </li>
  );
};

export default Post;
