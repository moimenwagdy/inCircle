import { post } from "@/globalTypes/globalTypes";
import PostsContainer from "../../PostsContainer/PostsContainer";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { getFollowingPosts } from "./functions/getFollowingPosts";
import PostsList from "./PostsList";

const Posts = async () => {
  const session = await getServerSession(authOptions);
  const result: { success: boolean; posts: post[]; message?: string } =
    await getFollowingPosts(session?.user._id!, 1, 3);
  return (
    <>
      <PostsContainer>
        {!result?.success && (
          <p className="text-sm text-center mx-auto text-black dark:text-white w-4/5 ">
            {result?.message}
          </p>
        )}
        {result?.success && <PostsList posts={result.posts} />}
      </PostsContainer>
    </>
  );
};
export default Posts;
