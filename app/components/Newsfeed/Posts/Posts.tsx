import { post } from "@/globalTypes/globalTypes";
import PostsContainer from "../../PostsContainer/PostsContainer";
import Post from "./Post";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { getFollowingPosts } from "./functions/getFollowingPosts";
import { motion } from "framer-motion";
import PostsList from "./PostsList";

const Posts = async () => {
  const session = await getServerSession(authOptions);
  const posts: post[] = await getFollowingPosts(session?.user._id!, 1, 3);

  return (
    <>
      <PostsContainer>
        <PostsList posts={posts} />
      </PostsContainer>
    </>
  );
};
export default Posts;
