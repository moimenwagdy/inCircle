"use client";
import { post } from "@/globalTypes/globalTypes";
import React from "react";
import PostUserData from "./PostUserData";
import PostContent from "./PostContent";
import PostInteractButtons from "./PostInteractButtons";
import { motion } from "framer-motion";

const Post: React.FC<{ post: post }> = ({ post }) => {
  return (
    <motion.li
      initial={{ opacity: 0, translateY: -60 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="w-full flex flex-col gap-y-1 ring-[1px] ring-black/10 dark:ring-white/10 px-3 shadow-sm dark:shadow-sm dark:shadow-white/10">
      <div className=" py-6 px-3 h-full space-y-3 border-b-[1px] border-black/5">
        <PostUserData
          avatar={post.author?.profile.avatar}
          createdAt={post.createdAt}
          feeling={post.feeling}
          userName={post.author?.username}
          userID={post.author?._id}
          postId={post._id}
        />
        <PostContent content={post.content} postMedia={post.media} />
      </div>
      <PostInteractButtons key={post._id} postId={post._id} />
    </motion.li>
  );
};

export default Post;
