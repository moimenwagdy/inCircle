const apiURL = process.env.NEXT_PUBLIC_API_URL;
const getConversations = async (userID: string) => {
  const response = await fetch(`${apiURL}/messages/conversations`, {
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
  return result;
};
export default getConversations;