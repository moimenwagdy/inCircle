"use client";
import { useQuery } from "@tanstack/react-query";
import getConversationMessages from "../functions/getConversationMessages";
import { message } from "@/globalTypes/globalTypes";
import { useSession } from "next-auth/react";
import ChatContentMessage from "./ChatContentMessage";
import { useEffect, useRef } from "react";

const ChatContentMessages: React.FC<{
  conversationID: string;
  allowFetch: boolean;
}> = ({ conversationID, allowFetch }) => {
  const chatsRef = useRef<HTMLUListElement>(null);
  const sesssion = useSession();
  const { data } = useQuery({
    queryKey: [conversationID],
    queryFn: () => getConversationMessages(conversationID),
    enabled: allowFetch,
    refetchInterval: 15000,
  });
  useEffect(() => {
    chatsRef.current?.scrollTo({
      top: chatsRef.current.scrollHeight,
      behavior: "smooth",
    });
  });
  return (
    <main className="w-full h-60 ">
      <ul
        ref={chatsRef}
        className="w-full max-h-full flex flex-col gap-y-1 px-3 mt-1 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blueColor">
        {data?.success &&
          data.messages.map((message: message) => {
            return (
              <ChatContentMessage
                key={message._id}
                message={message}
                isMe={sesssion.data?.user._id === message.senderID}
              />
            );
          })}
      </ul>
    </main>
  );
};

export default ChatContentMessages;
