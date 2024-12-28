"use server";
import { nanoid } from "nanoid";
const apiURL = process.env.NEXT_PUBLIC_API_URL;

const newMessage = async (
  senderID: string,
  participantsIDS: string[],
  content: string,
  conversationID: string
) => {
  const currentDate = new Date();
  const messageID = nanoid(6);
  const newMessageObject = {
    content,
    senderID,
    messageID,
    currentDate,
    participantsIDS,
    conversationID: conversationID,
  };
  const response = await fetch(`${apiURL}/messages/newMessage`, {
    method: "post",
    body: JSON.stringify({ ...newMessageObject }),
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
export default newMessage;
