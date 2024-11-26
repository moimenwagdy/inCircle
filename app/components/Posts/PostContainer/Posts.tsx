"use server";
import { post } from "@/globalTypes/globalTypes";
import { getFollowingPosts } from "./functions/getFollowingPosts";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import PostsContainer from "./PostContainer";
import Post from "./Post";

const Posts = async () => {
  const session = await getServerSession(authOptions);
  const posts: post[] = await getFollowingPosts(session?.user._id!);
  return (
    <>
      <PostsContainer>
        {session && (
          <ul className="w-full space-y-6">
            {posts &&
              posts?.map((post) => {
                return <Post key={post._id} post={post} />;
              })}
          </ul>
        )}
      </PostsContainer>
    </>
  );
};

export default Posts;
