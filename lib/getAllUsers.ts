const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllUsers = async () => {
  const response = await fetch(`${apiURL}/users/allUsers`, {
    method: "GET",
  });
  const result = await response.json();
  if (!response.ok) {
    return result;
  }
  return result;
};
