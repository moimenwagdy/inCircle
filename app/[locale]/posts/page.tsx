import PostForm from "@/app/components/Posts/NewPost/NewPost/PostForm";
import PostImagesPreviewer from "@/app/components/Posts/NewPost/NewPost/PostImagesPreviewer";
import Post from "@/app/components/Posts/PostContainer/Posts";
import React from "react";

const page = async () => {
  return (
    <main className="container mx-auto space-y-2">
      <section className="space-y-2">
        <PostForm />
        <PostImagesPreviewer />
      </section>
      <Post />
    </main>
  );
};

export default page;
