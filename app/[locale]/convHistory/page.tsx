import Conversations from "@/app/components/Messaging/Conversations/Conversations";
import MessagingModal from "@/app/components/Messaging/MessagingModal/MessagingModal";
import React from "react";

const page = () => {
  return (
    <main className="mt-20 w-full sm:w-1/2 sm:mx-auto">
      <Conversations UnlimitedHight={true} />
      <MessagingModal />
    </main>
  );
};
export default page;
