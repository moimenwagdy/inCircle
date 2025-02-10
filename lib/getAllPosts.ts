const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllPosts = async () => {
  const response = await fetch(`${apiURL}/post/allposts`, {
    method: "GET",
  });
  const result = await response.json();
  if (!response.ok) {
    return result;
  }
  return result;
};
