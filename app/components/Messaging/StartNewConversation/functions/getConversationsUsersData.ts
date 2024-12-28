const apiURL = process.env.NEXT_PUBLIC_API_URL;

const getConversationsUsersData = async (
  participandsIDs: string[],
  currentUserId: string
) => {
  const response = await fetch(`${apiURL}/messages/usersData`, {
    method: "post",
    body: JSON.stringify({ participandsIDs, currentUserId }),
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

export default getConversationsUsersData;
