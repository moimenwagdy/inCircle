"use server";

import { revalidatePath } from "next/cache";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const deletePost = async (postId: string) => {
  const response = await fetch(`${apiURL}/post/deletePost`, {
    method: "post",
    body: JSON.stringify({ postId }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  revalidatePath("/");
  if (!response.ok) {
    return result;
  }
  return result;
};
