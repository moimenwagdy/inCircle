"use client";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { MessagingSliceActions } from "@/store/slices/MessagingSlice/MessagingSlice";
import { useSession } from "next-auth/react";
import React, { useEffect, useRef } from "react";
import ConversationUsersData from "../Conversations/ConversationUsersData";
import ChatContentMessages from "../Messages/Chat/ChatContentMessages";
import NewMessageForm from "../Messages/NewMesageForm/NewMessageForm";

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
  }, [chatState]);

  const handleCloseModal = () => {
    modalRef.current?.close();
    dispatch(MessagingSliceActions.closeChat());
    dispatch(MessagingSliceActions.setRecipientIDs([]));
    dispatch(MessagingSliceActions.setConversationId(""));
    dispatch(MessagingSliceActions.setParticipantsData([]));
  };

  return (
    <dialog
      onCancel={handleCloseModal}
      ref={modalRef}
      className="backdrop:bg-black/20 w-full md:w-3/4 lg:w-1/2 bg-white dark:bg-black ring-2 ring-blueColor/50 ring-offset-transparent px-3 py-2 rounded-md shadow-lg">
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
    </dialog>
  );
};
export default MessagingModal;
