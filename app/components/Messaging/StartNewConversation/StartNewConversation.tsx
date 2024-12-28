"use client";

import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { MessagingSliceActions } from "@/store/slices/MessagingSlice/MessagingSlice";
import { useSession } from "next-auth/react";
import getConversationsUsersData from "./functions/getConversationsUsersData";
import { useEffect, useState } from "react";
import checkConversationExist from "./functions/checkConversationExist";
import { nanoid } from "nanoid";

const StartNewConversation: React.FC<{ participantsIDs: string[] }> = ({
  participantsIDs,
}) => {
  const [conversationID, setConversationID] = useState<string>();
  useEffect(() => {
    const conversationExist = async () => {
      const result = await checkConversationExist(participantsIDs);
      console.log(result);
      if (result.success) {
        setConversationID(result.conversationID._id);
      }
      if (!result.success) {
        const newConversationID = nanoid(5);
        setConversationID(newConversationID);
      }
    };
    conversationExist();
  }, []);

  useEffect(() => {
    console.log(participantsIDs);
  }, [participantsIDs]);

  const dispatch = useAppDispatch();
  const session = useSession();
  const handleStartNewConversation = async () => {
    const usersData = await getConversationsUsersData(
      participantsIDs,
      session.data?.user._id!
    );
    dispatch(MessagingSliceActions.setConversationId(conversationID));
    dispatch(MessagingSliceActions.setRecipientIDs(participantsIDs));
    dispatch(MessagingSliceActions.setParticipantsData(usersData));
    dispatch(MessagingSliceActions.openChat());
  };
  return (
    <div>
      <button
        type="button"
        className="text-sm bg-redColor px-2 rounded text-white"
        onClick={handleStartNewConversation}>
        Send message
      </button>
    </div>
  );
};
export default StartNewConversation;
