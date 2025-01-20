"use server";

import Conversations from "../../../Messaging/Conversations/Conversations";
import NewCoversationSuggetions from "../../../Messaging/NewCoversationSuggetion/NewCoversationSuggetions";
import LeftSideHeader from "./LeftSideHeader";

const LeftSide = () => {
  return (
    <section
      id="LeftContent"
      className="hidden md:flex flex-col justify-start items-center md:w-[30%]  py-5 gap-y-4 ring-1 ring-black/5 dark:ring-white/5 px-8">
      <NewCoversationSuggetions />
      <Conversations />
    </section>
  );
};
export default LeftSide;
