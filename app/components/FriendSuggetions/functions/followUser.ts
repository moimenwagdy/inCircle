"use server";

import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";

const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const followUser = async (userToFollowId: string, currentId: string) => {
  const notifID = nanoid(4);
  const response = await fetch(`${apiURL}/users/followUser`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userToFollowId, currentId, notifID }),
  });
  if (!response.ok) {
    return;
  }
  revalidatePath("/news");
  revalidatePath("/api/auth");
  revalidatePath("/lib/authOptions");
  const result = await response.json();
  return result;
};
