import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import React from "react";
import getConversations from "./functions/getConversations";
import { conversationItemResponse } from "@/globalTypes/globalTypes";
import ConversationItem from "./ConversationItem";
import ConversationsHeader from "./ConversationsHeader";

const Conversations: React.FC<{ UnlimitedHight?: boolean }> = async ({
  UnlimitedHight,
}) => {
  const session = await getServerSession(authOptions);
  const result: {
    success: boolean;
    conversations: conversationItemResponse[];
  } = await getConversations(session?.user._id!);
  console.log("from Server ", result.conversations);
  return (
    <>
      {result.success && result.conversations.length === 0 ? (
        <p className="dark:text-white rounded px-2 py-2 ring-1 dark:ring-white ring-black text-xs lg:text-sm">
          No Conversations Yet
        </p>
      ) : (
        <ConversationsHeader />
      )}
      <ul
        className={`w-full space-y-3 px-2 py-2  ${
          !UnlimitedHight ? "max-h-72" : "max-h-screen"
        } overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-redColor
        `}>
        {result.success &&
          result?.conversations?.map((conversation) => {
            return (
              <ConversationItem
                key={conversation._id}
                participants={conversation.participants}
                lastMessage={conversation.lastMessage}
                lastUpdated={conversation.updatedAt || conversation.createdAt}
                participantsIDs={conversation.participantsIDS}
                conversationID={conversation._id}
              />
            );
          })}
      </ul>
    </>
  );
};
export default Conversations;
