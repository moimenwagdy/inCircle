"use server";

import { newPostType } from "@/globalTypes/globalTypes";
import { nanoid } from "nanoid";
import { Filter } from "bad-words";
import { revalidatePath } from "next/cache";
const apiURL = process.env.NEXT_PUBLIC_API_URL;
const filter = new Filter();

export const newPost = async (_prvState: any, formData: FormData) => {
  const content = formData.get("postContent") as string;
  const imagesURLs = formData.get("imagesURLs") as string;
  const userID = formData.get("userID") as string;
  const feeling = formData.get("feeling") as string;
  const ArrayFromImagesURLs: string[] = imagesURLs
    .split(",")
    .filter((url) => url.trim() !== "");
  const postID = nanoid(6);
  const date = new Date();

  if (filter.isProfane(content)) {
    return {
      success: false,
      message: "Inappropriate content detected",
    };
  }
  if (
    (content.trim().length === 0 || content === "") &&
    ArrayFromImagesURLs.length === 0 &&
    (feeling === null || feeling === "")
  ) {
    return {
      success: false,
      message: "Empty content",
    };
  }
  const post: newPostType = {
    content,
    media: ArrayFromImagesURLs,
    authorId: userID,
    _id: postID,
    comments: [],
    likes: [],
    createdAt: date,
    feeling: feeling,
  };
  const response = await fetch(`${apiURL}/post/newPost`, {
    method: "post",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    return {
      success: false,
      message: "Network error, check your connection.",
    };
  }
  revalidatePath("/");
  const result = await response.json();

  return { success: true, result };
};
