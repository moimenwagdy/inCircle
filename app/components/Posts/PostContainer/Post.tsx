"use client";
import { post } from "@/globalTypes/globalTypes";
import { useSession } from "next-auth/react";
import Image from "next/image";
import PostImageSlider from "./PostImageSlider";
import { useEffect, useRef, useState } from "react";
import { getFollowingPosts } from "./functions/getFollowingPosts";
import { useFormState } from "react-dom";

const Post = () => {
  const [posts, setPosts] = useState<post[]>();
  const { data } = useSession();

  useEffect(() => {
    const getPosts = async () => {
      if (data) {
        const result = await getFollowingPosts(data?.user._id!);
        result && setPosts(result);
      }
    };
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.user._id]);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <>
      <main className="w-4/5 sm:w-3/4 md:w-1/2 lg:w-2/5 mx-auto dark:text-white divide-y-[1px] divide-blueColor div">
        {data && (
          <>
            {posts &&
              posts?.map((post) => {
                const postContainsImages = post.media.length > 0;
                return (
                  <section
                    key={post._id}
                    className="w-full flex flex-col gap-y-1 py-2">
                    <header className=" w-full flex justify-start items-end gap-x-2 ">
                      {post.author.profile?.avatar && (
                        <Image
                          src={post.author.profile?.avatar}
                          alt={post.author.username}
                          width={60}
                          height={60}
                          className="w-10 rounded-full"
                        />
                      )}
                      <div className="w-full flex justify-between">
                        <div className="flex gap-x-1">
                          <h1 className="text-lg capitalize">
                            {post.author.username}
                          </h1>
                          <p
                            className="font-bold text-redColor"
                            dangerouslySetInnerHTML={{
                              __html: `is ${post.feeling} `,
                            }}></p>
                        </div>
                        <div className="">
                          <p className="text-xs dark:text-white/50 text-black/80">
                            {post.createdAt.toLocaleString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                              hour12: true,
                            })}
                          </p>
                        </div>
                      </div>
                    </header>
                    <article className="w-full ">
                      <h3
                        dangerouslySetInnerHTML={{ __html: post.content }}></h3>
                      {postContainsImages && (
                        <PostImageSlider imgURLs={post.media} />
                      )}
                    </article>
                    <aside className="flex flex-col justify-start w-full self-start items-start">
                      <button>Like</button>
                      <button>Comment</button>
                    </aside>
                  </section>
                );
              })}
          </>
        )}
      </main>
    </>
  );
};

export default Post;
