"use client";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { MessagingSliceActions } from "@/store/slices/MessagingSlice/MessagingSlice";
import React, { useEffect, useRef } from "react";
import ConversationUsersData from "../Conversations/ConversationUsersData";
import ChatContentMessages from "../Messages/Chat/ChatContentMessages";
import NewMessageForm from "../Messages/NewMesageForm/NewMessageForm";
import { AnimatePresence, motion } from "framer-motion";
import { nanoid } from "nanoid";

const MessagingModal: React.FC<{}> = () => {
  const dispatch = useAppDispatch();
  const modalRef = useRef<HTMLDialogElement>(null);
  const chatState = useAppSelector((state) => state.MessagingSlice.chatState);
  const participantsIDs = useAppSelector(
    (state) => state.MessagingSlice.recipientIDs
  );
  const participantsData = useAppSelector(
    (state) => state.MessagingSlice.participantsData
  );
  const conversationID = useAppSelector(
    (state) => state.MessagingSlice.conversationID
  );

  useEffect(() => {
    chatState && modalRef.current?.showModal();
    !chatState && modalRef.current?.close();
  }, [chatState]);

  const handleCloseModal = () => {
    dispatch(MessagingSliceActions.setRecipientIDs([]));
    dispatch(MessagingSliceActions.setConversationId(""));
    dispatch(MessagingSliceActions.setParticipantsData([]));
    dispatch(MessagingSliceActions.closeProfileChat());
    dispatch(MessagingSliceActions.closeChat());
  };
  return (
    <motion.dialog
      key={nanoid(3)}
      initial={{ scale: 0.5, opacity: 0, translateY: 150 }}
      animate={{ scale: 1, opacity: 1, translateY: 0 }}
      onCancel={handleCloseModal}
      ref={modalRef}
      className="backdrop:bg-black/20 backdrop:backdrop-blur-sm w-full md:w-3/4 lg:w-1/2 bg-white dark:bg-black ring-2 ring-blueColor/50 ring-offset-transparent px-3 py-2 rounded-md shadow-lg">
      <section>
        <ConversationUsersData participants={participantsData} />
      </section>
      <section>
        <ChatContentMessages
          key={conversationID}
          conversationID={conversationID}
          allowFetch={chatState}
        />
      </section>
      <NewMessageForm
        conversationID={conversationID}
        participantsIDS={participantsIDs}
      />
      <div className="w-full px-2 flex justify-start mt-1">
        <button
          className="bg-redColor px-3 mt-1 rounded-md text-white"
          onClick={handleCloseModal}
          type="button">
          Close
        </button>
      </div>
    </motion.dialog>
  );
};
export default MessagingModal;
