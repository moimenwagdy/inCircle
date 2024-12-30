const apiURL = process.env.NEXT_PUBLIC_API_URL;

const deleteMessageNotification = async (
  notifID: string,
  currentUserID: string
) => {
  const response = await fetch(
    `${apiURL}/alerts/messages/deleteMessageNotification`,
    {
      method: "post",
      body: JSON.stringify({ notifID, currentUserID }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  if (!response.ok) {
    return result;
  }
  return result.notifications;
};

export default deleteMessageNotification;
