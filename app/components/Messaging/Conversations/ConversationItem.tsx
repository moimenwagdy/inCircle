"use client";
import { participant } from "@/globalTypes/globalTypes";
import TimePrint from "../../TimePrint/TimePrint";
import { useAppDispatch } from "@/store/reduxHooks";
import { MessagingSliceActions } from "@/store/slices/MessagingSlice/MessagingSlice";
import ConversationUsersData from "./ConversationUsersData";
import { motion } from "framer-motion";
const ConversationItem: React.FC<{
  participants: participant[];
  lastMessage: { content: string };
  lastUpdated: Date;
  participantsIDs: string[];
  conversationID: string;
}> = ({
  lastMessage,
  lastUpdated,
  participants,
  participantsIDs,
  conversationID,
}) => {
  const dispatch = useAppDispatch();
  const handleStartChat = () => {
    const ele = document.getElementById("chatDialog") as HTMLDialogElement;
    dispatch(MessagingSliceActions.setRecipientIDs(participantsIDs));
    dispatch(MessagingSliceActions.setConversationId(conversationID));
    dispatch(MessagingSliceActions.setParticipantsData(participants));
    dispatch(MessagingSliceActions.openChat());
  };
  const moreThanTwo = participants.length >= 3;
  return (
    <motion.li
      whileHover={{ scale: 0.98 }}
      className="ring-1 ring-blueColor/20 ring-offset-2 ring-offset-transparent rounded-md cursor-pointer w-full bg-offWhite dark:bg-black px-1"
      onClick={handleStartChat}>
      <ConversationUsersData participants={participants} />
      <div className="flex flex-col justify-start w-full -mt-1">
        <p
          className={`${
            moreThanTwo && "pt-1"
          } text-black/50 text-sm text-start dark:text-white/50 w-fit -mb-1 ps-5 line-clamp-1`}>
          {lastMessage?.content}
        </p>
        <div className="text-xs dark:text-white self-end pe-2">
          <TimePrint createdAt={lastUpdated.toString()} />
        </div>
      </div>
    </motion.li>
  );
};
export default ConversationItem;
