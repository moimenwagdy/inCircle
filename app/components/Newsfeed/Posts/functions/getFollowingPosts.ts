"use server";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getFollowingPosts = async (
  currentUserId: string,
  page: number,
  limit: number
) => {
  const response = await fetch(`${apiURL}/post/getFollowingPosts`, {
    method: "post",
    body: JSON.stringify({ userId: currentUserId, page, limit }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  return;
};
