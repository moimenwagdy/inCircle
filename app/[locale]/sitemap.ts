import { getAllPosts } from "@/lib/getAllPosts";
import { getAllUsers } from "@/lib/getAllUsers";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const users: string[] = await getAllUsers();

  const usersIDS = users.map((e: string) => {
    return {
      url: `https://in-circle-iota.vercel.app/en/user/${e}`,
      lastModified: new Date(),
    };
  });
  const posts = await getAllPosts();
  const postsIDS = posts.map((e: string) => {
    return {
      url: `https://in-circle-iota.vercel.app/en/activity/${e}`,
      lastModified: new Date(),
    };
  });

  return [
    { url: "https://in-circle-iota.vercel.app/en", lastModified: new Date() },
    {
      url: "https://in-circle-iota.vercel.app/en/auth",
      lastModified: new Date(),
    },
    {
      url: "https://in-circle-iota.vercel.app/en/news",
      lastModified: new Date(),
    },
    {
      url: "https://in-circle-iota.vercel.app/en/friends",
      lastModified: new Date(),
    },
    {
      url: "https://in-circle-iota.vercel.app/en/convHistory",
      lastModified: new Date(),
    },
    {
      url: "https://in-circle-iota.vercel.app/en/newChat",
      lastModified: new Date(),
    },
    ...usersIDS,
    ...postsIDS,
  ];
}
