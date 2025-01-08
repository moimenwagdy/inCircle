"use client";
import { useEffect, useState } from "react";
import { post } from "@/globalTypes/globalTypes";
import Post from "../../Newsfeed/Posts/Post";
import PostsContainer from "../../PostsContainer/PostsContainer";
import { getCurrentUserPosts } from "./functions/getCurrentUserPosts";
import LoadingNormalIndicator from "../../LoadingNormalIndicator/LoadingNormalIndicator";

const UserProfilePosts: React.FC<{ userID: string }> = ({ userID }) => {
  const [posts, setPosts] = useState<post[]>([]);
  const [allowGetMorePosts, setAllowGetMorePosts] = useState<boolean>(false);
  const [MoreExist, setMoreExist] = useState<boolean>(true);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    const responsePosts: post[] = await getCurrentUserPosts(userID, page, 3);
    setLoading(false);
    if (responsePosts) {
      setPosts((prev) => [...prev, ...responsePosts]);
      setAllowGetMorePosts(false);
      setPage((prev) => prev + 1);
    }
    if (responsePosts.length === 0) {
      setAllowGetMorePosts(false);
      setMoreExist(false);
    }
  };

  useEffect(() => {
    setAllowGetMorePosts(true);
  }, []);

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
          {loading && <LoadingNormalIndicator />}
          {!MoreExist && !loading && (
            <p className="text-center">No posts anymore</p>
          )}
        </span>
      </PostsContainer>
    </>
  );
};

export default UserProfilePosts;
