import PostForm from "@/app/components/Posts/NewPost/NewPost/PostForm";
import Post from "@/app/components/Posts/PostContainer/Post";
import React from "react";

const page = async () => {
  return (
    <div className="container mx-auto">
      <PostForm />
        <Post />
    </div>
  );
};

export default page;
