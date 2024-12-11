export const deleteComment = async (commentID: string) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${apiURL}/post/comments/deleteComment`, {
    method: "post",
    body: JSON.stringify({ commentID }),
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
