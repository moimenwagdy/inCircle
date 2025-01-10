"use server";

import { getTranslations } from "next-intl/server";
import Conversations from "../../Messaging/Conversations/Conversations";
import NewCoversationSuggetions from "../../Messaging/NewCoversationSuggetion/NewCoversationSuggetions";

const LeftSide = async () => {
  const tConversation = await getTranslations("conversations");
  return (
    <section
      id="LeftContent"
      className="hidden md:flex flex-col justify-start items-center md:w-[30%]  py-5 gap-y-4 ring-1 ring-black/5 dark:ring-white/5 px-8">
      <h1 className="text-center text-redColor font-bold font-descripFont text-sm">
        {tConversation("conversationHeader")}
      </h1>
      <Conversations />
      <NewCoversationSuggetions />
    </section>
  );
};
export default LeftSide;
