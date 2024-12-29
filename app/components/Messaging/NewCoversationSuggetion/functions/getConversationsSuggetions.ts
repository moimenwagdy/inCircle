const apiURL = process.env.NEXT_PUBLIC_API_URL;
const getConversationsSuggetions = async (userID: string) => {
  const response = await fetch(`${apiURL}/messages/suggetions`, {
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

export default getConversationsSuggetions;
