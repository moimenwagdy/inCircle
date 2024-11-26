const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const followUser = async (userToFollowId: string, currentId: string) => {
  const response = await fetch(`${apiURL}/users/followUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userToFollowId, currentId }),
  });

  if (!response.ok) {
    return;
  }
  const result = await response.json();
  return result;
};
