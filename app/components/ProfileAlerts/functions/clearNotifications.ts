"use server";

import { revalidatePath } from "next/cache";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

const clearNotifications = async (userID: string) => {
  const response = await fetch(
    `${apiURL}/alerts/notifications/deleteAllNotifs`,
    {
      method: "POST",
      body: JSON.stringify({ userID }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  if (!response.ok) {
    return result;
  }
  revalidatePath("/api/alerts/");
  return result.notifications;
};

export default clearNotifications;
