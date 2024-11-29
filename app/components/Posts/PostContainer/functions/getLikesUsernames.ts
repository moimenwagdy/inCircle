const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getLikesUserName = async (usersLikesIds: string[]) => {
  const response = await fetch(`${apiURL}/post/usersLiked`, {
    method: "post",
    body: JSON.stringify({ usersLikesIds }),
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
