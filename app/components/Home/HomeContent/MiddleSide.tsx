import { Suspense } from "react";
import PostForm from "../../Posts/NewPost/NewPost/PostForm";
import PostImagesPreviewer from "../../Posts/NewPost/NewPost/PostImagesPreviewer";
import Posts from "../../Posts/PostContainer/Posts";
import PostLoading from "../../Posts/PostContainer/PostLoading";

const MiddleSide = () => {
  return (
    <section
      id="MiddleContent"
      className="w-full md:w-4/6 lg:w-3/6 mx-auto md:mx-0 ">
      <section className="space-y-2">
        <PostForm />
        <PostImagesPreviewer />
      </section>
      <Suspense fallback={<PostLoading />}>
        <Posts />
      </Suspense>
    </section>
  );
};

export default MiddleSide;
