"use client";
import { post } from "@/globalTypes/globalTypes";
import { motion } from "framer-motion";
import React from "react";
import Post from "./Post";

const PostsList: React.FC<{ posts: post[] }> = ({ posts }) => {
  return (
    <ul className="w-full space-y-6 mt-2">
      {posts &&
        posts?.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
    </ul>
  );
};

export default PostsList;
