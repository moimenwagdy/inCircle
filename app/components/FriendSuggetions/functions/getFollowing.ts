const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getFollowing = async (id: string) => {
  const response = await fetch(`${apiURL}/users/followUser/normalFollowingArray`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentUserId: id }),
    cache: "no-cache",
  });

  if (!response.ok) {
    const error = await response.json();
    return error;
  }
  const result = await response.json();
  return result;
};
