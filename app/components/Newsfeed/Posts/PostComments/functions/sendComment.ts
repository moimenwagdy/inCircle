import { nanoid } from "nanoid";

const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const sendComment = async (
  comment: string,
  postId: string,
  userID: string
) => {
  const commentId = nanoid(6);
  const currentDate = new Date();
  const notifID = nanoid(4);

  const response = await fetch(`${apiURL}/post/comments/sendComment`, {
    method: "post",
    body: JSON.stringify({
      comment,
      postId,
      userID,
      createdAt: currentDate,
      _id: commentId,
      notifID,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  if (!response.ok) {
    return result;
  }
  return result;
};
