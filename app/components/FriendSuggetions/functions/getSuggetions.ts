import { usersuggestion } from "@/globalTypes/globalTypes";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getUsersStandardSuggetions = async (id: string) => {
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
  return result as usersuggestion[];
};


export const getUsersFilteredSuggetions = async (
  id: string,
  queryPayload: string
) => {
  const response = await fetch(`${apiURL}/users/friendSugg`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentUserId: id, queryPayload }),
  });

  if (!response.ok) {
    return;
  }
  const result = await response.json();
  return result as usersuggestion[];
};
