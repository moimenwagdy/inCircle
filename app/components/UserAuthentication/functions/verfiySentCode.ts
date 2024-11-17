"use server";

import { redirect } from "next/navigation";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const verfiySentCode = async (_prvState: any, formData: FormData) => {
  const code = formData.get("code") as string;
  const userID = formData.get("userID") as string;

  try {
    const response = await fetch(`${apiURL}/codeVerify/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        _id: userID,
      }),
    });
    if (!response.ok) {
      return {
        success: false,
        message: "sending failed!, please try again",
      };
    }
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error(error);
  }
};
