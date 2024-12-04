import { post } from "@/globalTypes/globalTypes";
import PostsContainer from "./PostContainer";
import Post from "./Post";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { getFollowingPosts } from "./functions/getFollowingPosts";

const Posts = async () => {
  const session = await getServerSession(authOptions);
  const posts: post[] = await getFollowingPosts(session?.user._id!);
  return (
    <>
      <PostsContainer>
        <ul className="w-full space-y-6 mt-2">
          {posts &&
            posts?.map((post) => {
              return <Post key={post._id} post={post} />;
            })}
        </ul>
      </PostsContainer>
    </>
  );
};
export default Posts;
