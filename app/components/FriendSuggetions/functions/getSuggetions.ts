import { userSuggetion } from "@/globalTypes/globalTypes";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getUsersSuggetions = async (id: string) => {
  const response = await fetch(`${apiURL}/users/friendSugg`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentUserId: id }),
  });

  if (!response.ok) {
    return;
  }
  const result = await response.json();
  return result as userSuggetion[];
};
