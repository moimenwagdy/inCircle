import { getSinglePost } from "@/app/components/SinglePost/functions/getSinglePost";
import SinglePost from "@/app/components/SinglePost/SinglePost";
import { post } from "@/globalTypes/globalTypes";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import React, { Suspense } from "react";

export const generateMetadata = async ({
  params,
}: {
  params: { postID: string };
}) => {
  const result: { success: boolean; post: post } = await getSinglePost(
    params.postID
  );
  if (!result.success) {
    return;
  }
  return {
    title: `post of ${result.post.author.username}`,
    description: result.post.content,
    keywords: `inCircle, post, social media, user profile, connect, chat, likes, comments, posts, liked, like ${result.post.content}`,
    alternates: {
      canonical: `https://in-circle-iota.vercel.app/en/activity/${params.postID}`,
    },
    openGraph: {
      title: `post of ${result.post.author.username}`,
      description: result.post.content,
      type: "article",
      url: `https://in-circle-iota.vercel.app/en/activity/${params.postID}`,
      site_name: "inCircle",
      images: [
        {
          url: `${result.post.author.profile.avatar}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
};
const Page = ({ params }: { params: Params }) => {
  return (
    <main className="mt-20 w-[98%] mx-auto sm:w-3/4 md:w-1/2 lg:w-1/2 dark:text-white">
      <Suspense fallback={<p>Loading</p>}>
        <SinglePost postID={params.postID} />
      </Suspense>
    </main>
  );
};
``;

export default Page;
