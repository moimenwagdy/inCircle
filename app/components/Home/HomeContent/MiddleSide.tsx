import { Suspense } from "react";
import PostForm from "../../NewPost/NewPostForm/PostForm";
import PostImagesPreviewer from "../../NewPost/NewPostForm/PostImagesPreviewer";
import Posts from "../../Newsfeed/Posts/Posts";
import PostLoading from "../../Newsfeed/Posts/PostLoading";
import MoreNewsFeed from "../../Newsfeed/MoreNewsFeed/MoreNewsFeed";

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
