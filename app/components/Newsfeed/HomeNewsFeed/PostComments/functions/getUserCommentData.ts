export const getUserCommentData = async (userID: string) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const response = await fetch(`${apiURL}/post/comments/commentUserImage`, {
    method: "post",
    body: JSON.stringify({ userID }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  if (!response.ok) {
    return result;
  }
  console.log(result);
  return result;
};
