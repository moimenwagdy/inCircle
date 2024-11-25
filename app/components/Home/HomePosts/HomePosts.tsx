import React, { Suspense } from "react";
import PostForm from "../../Posts/NewPost/NewPost/PostForm";
import PostImagesPreviewer from "../../Posts/NewPost/NewPost/PostImagesPreviewer";
import Posts from "../../Posts/PostContainer/Posts";
import FriendSuggetions from "../../FriendSuggetions/FriendSuggetions";

const HomePosts = () => {
  return (
    <main className="container mx-auto space-y-2">
      <section className="w-full flex justify-between">
        {/*  */}
        <section
          id="LeftContent"
          className="hidden md:flex md:w-1/5 md:justify-center">
          <p> Left Side </p>
        </section>
        {/*  */}
        <section
          id="MiddleContent"
          className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[43%] mx-auto md:mx-0 ">
          <section className="space-y-2">
            <PostForm />
            <PostImagesPreviewer />
          </section>
          <Suspense
            fallback={
              <p className="z-50 text-7xl text-redColor">Loading . . .</p>
            }>
            <Posts />
          </Suspense>
        </section>
        {/*  */}
        <section
          id="RightContent"
          className="hidden md:flex md:w-1/5 md:justify-center mt-20">
          <FriendSuggetions />
        </section>
        {/*  */}
      </section>
    </main>
  );
};
export default HomePosts;
