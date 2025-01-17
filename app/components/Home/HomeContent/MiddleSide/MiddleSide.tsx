import PostForm from "@/app/components/NewPost/NewPostForm/PostForm";
import PostImagesPreviewer from "@/app/components/NewPost/NewPostForm/PostImagesPreviewer";
import MoreNewsFeed from "@/app/components/Newsfeed/MoreNewsFeed/MoreNewsFeed";
import PostLoading from "@/app/components/Newsfeed/Posts/PostLoading";
import Posts from "@/app/components/Newsfeed/Posts/Posts";
import { Suspense } from "react";

const MiddleSide = () => {
  return (
    <section
      id="MiddleContent"
      className="w-full md:w-4/6 lg:w-[45%] mx-auto md:mx-0 ">
      <section className="space-y-2">
        <PostForm />
        <PostImagesPreviewer />
      </section>
      <Suspense fallback={<PostLoading />}>
        <Posts />
      </Suspense>
      <MoreNewsFeed />
    </section>
  );
};

export default MiddleSide;
