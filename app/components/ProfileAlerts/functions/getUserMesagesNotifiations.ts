const apiURL = process.env.NEXT_PUBLIC_API_URL;
export const getUserMesagesNotifiations = async (id: string) => {
  const response = await fetch(`${apiURL}/alerts/messages`, {
    method: "post",
    body: JSON.stringify({ id: id }),
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
