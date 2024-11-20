"use server";

import { post } from "@/globalTypes/globalTypes";
import { nanoid } from "nanoid";

export const newPost = async (_prvState: any, formData: FormData) => {
  const content = formData.get("newPost") as string;
  const imagesURLs = formData.get("imagesURLs") as string;
  const userID = formData.get("userID") as string;
  const feeling = formData.get("feeling") as string;

  const ArrayFromImagesURLs: string[] = imagesURLs.split(",");
  const postID = nanoid(6);
  const date = new Date();
  const data: post = {
    content,
    media: ArrayFromImagesURLs,
    authorId: userID,
    _id: postID,
    comments: [],
    likes: [],
    createdAt: date,
    feeling: feeling,
  };

  return { data };
};
