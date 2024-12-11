export const getComments = async (postId: string) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${apiURL}/post/comments`, {
    method: "post",
    body: JSON.stringify({ postId }),
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
