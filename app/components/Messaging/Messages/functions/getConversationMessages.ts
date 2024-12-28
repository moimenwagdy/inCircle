const apiURL = process.env.NEXT_PUBLIC_API_URL;
const getConversationMessages = async (conversationID: string) => {
    console.log("desdf s",conversationID)
  const response = await fetch(`${apiURL}/messages/getMessages`, {
    method: "post",
    body: JSON.stringify({ conversationID }),
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

export default getConversationMessages;
