"use client";
import { useEffect, useState, useCallback } from "react";
import { post } from "@/globalTypes/globalTypes";
import PostsContainer from "../../PostsContainer/PostsContainer";
import Post from "../Posts/Post";
import { getFollowingPosts } from "../Posts/functions/getFollowingPosts";
import { useSession } from "next-auth/react";

const MoreNewsFeed = () => {
  const [posts, setPosts] = useState<post[]>([]);
  const [allowGetMorePosts, setAllowGetMorePosts] = useState<boolean>(false);
  const [MoreExist, setMoreExist] = useState<boolean>(true);
  const [page, setPage] = useState(2);
  const [loading, setLoading] = useState(false);
  const session = useSession();

  const getPosts = async () => {
    setLoading(true);
    const result: { success: boolean; posts: post[]; message?: string } =
      await getFollowingPosts(session.data?.user._id!, page, 3);
    setLoading(false);
    if (result.success) {
      setPosts((prev) => [...prev, ...result.posts]);
      setAllowGetMorePosts(false);
      setPage((prev) => prev + 1);
    }
    if (result.success && result.posts.length === 0) {
      setAllowGetMorePosts(false);
      setMoreExist(false);
    }
  };

  useEffect(() => {
    if (allowGetMorePosts && MoreExist) {
      getPosts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allowGetMorePosts, MoreExist]);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (
          window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.offsetHeight - 100
        ) {
          if (!allowGetMorePosts) {
            setAllowGetMorePosts(true);
          }
        }
      }, 200);
    };
    if (MoreExist) {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <PostsContainer>
        <ul className="w-full space-y-6 mt-6">
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </ul>
        <span className="w-fit mx-auto h-2">
          {loading && <p className="text-center tracking-widest">Loading...</p>}
        </span>
      </PostsContainer>
    </>
  );
};
export default MoreNewsFeed;
