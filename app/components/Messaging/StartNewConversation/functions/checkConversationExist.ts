const apiURL = process.env.NEXT_PUBLIC_API_URL;

const checkConversationExist = async (participantsIDs: string[]) => {
  const response = await fetch(`${apiURL}/messages/checkHistory`, {
    method: "post",
    body: JSON.stringify({ participantsIDs }),
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

export default checkConversationExist;
