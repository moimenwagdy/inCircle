"use server";

import Conversations from "../../Messaging/Conversations/Conversations";
import MessagingModal from "../../Messaging/MessagingModal/MessagingModal";

const LeftSide = () => {
  return (
    <section
      id="LeftContent"
      className="hidden md:flex flex-col justify-start items-center md:w-[30%] mt-24 py-5 gap-y-4 ring-1 ring-black/5 dark:ring-white/5 px-10">
      <h1 className="text-center text-redColor font-bold font-descripFont text-sm">
        Conversations
      </h1>
      <Conversations />
      <MessagingModal />
    </section>
  );
};

export default LeftSide;
