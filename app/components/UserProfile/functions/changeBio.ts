"use server";

import { revalidatePath } from "next/cache";

const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const changeBio = async (_prvState: any, formData: FormData) => {
  const bio = formData.get("bio");
  const userID = formData.get("userID");

  try {
    const response = await fetch(`${apiURL}/users/userProfile/userProfileBio`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bio,
        userID,
      }),
    });

    const data = await response.json();
    revalidatePath("/user/");
    return data as { success: boolean; message: string };
  } catch (error) {
    console.error(error);
  }
};

export default changeBio;
