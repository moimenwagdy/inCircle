const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getLikes = async (postId: string) => {
  const response = await fetch(`${apiURL}/post/likes`, {
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
