const apiURL = process.env.NEXT_PUBLIC_API_URL;

const deleteNotification = async (notifID: string) => {
  const response = await fetch(`${apiURL}/alerts/notifications/deleteNotifs`, {
    method: "post",
    body: JSON.stringify({ notifID: notifID }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  if (!response.ok) {
    return result;
  }
  return result.notifications;
};

export default deleteNotification;
