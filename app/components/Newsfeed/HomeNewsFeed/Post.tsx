import { post } from "@/globalTypes/globalTypes";
import React from "react";
import PostUserData from "./PostUserData";
import PostContent from "./PostContent";
import PostLikeButton from "./PostLikeButton";
import PostInteractButtons from "./PostInteractButtons";

const Post: React.FC<{ post: post }> = async ({ post }) => {
  return (
    <li className="w-full flex flex-col gap-y-1 ring-[1px] ring-black/5 dark:ring-white/5 px-3">
      <div className=" py-6 px-3 h-full space-y-3 border-b-[1px] border-black/5">
        <PostUserData
          avatar={post.author.profile.avatar}
          createdAt={post.createdAt}
          feeling={post.feeling}
          userName={post.author.username}
        />
        <PostContent content={post.content} postMedia={post.media} />
      </div>
      <PostInteractButtons key={post._id} postId={post._id} />
    </li>
  );
};

export default Post;
