import Conversations from "@/app/components/Messaging/Conversations/Conversations";
import NewMessageForm from "@/app/components/Messaging/Messages/NewMesageForm/NewMessageForm";
import MessagingModal from "@/app/components/Messaging/MessagingModal/MessagingModal";
import React from "react";

const page = () => {
  return (
    <div className="mt-60 w-72 mx-auto">
      <Conversations />
      <MessagingModal />
    </div>
  );
};
export default page;
