import { cache } from "react";

const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const getSinglePost = async (postID: string) => {
  const response = await fetch(`${apiURL}/post/SinglePost`, {
    method: "post",
    body: JSON.stringify({ postID }),
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  const result = await response.json();
  if (!response.ok) {
    return result;
  }
  return result;
};
