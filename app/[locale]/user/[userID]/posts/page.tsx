import PostsContainer from "@/app/components/Newsfeed/HomeNewsFeed/PostContainer";
import Posts from "@/app/components/Newsfeed/HomeNewsFeed/Posts";
import React from "react";

const page = () => {
  return (
    <main className="w-full md:w-4/6 lg:w-[45%] mx-auto mt-20">
      <PostsContainer>
        <Posts />;
      </PostsContainer>
    </main>
  );
};

export default page;
