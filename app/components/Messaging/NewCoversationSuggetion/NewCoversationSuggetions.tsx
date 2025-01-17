"use client";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import getConversationsSuggetions from "./functions/getConversationsSuggetions";
import { usersuggestion } from "@/globalTypes/globalTypes";
import NewCoversationSuggetion from "./NewCoversationSuggetion";
import { FormEvent, useRef, useState } from "react";
import StartNewConversation from "../StartNewConversation/StartNewConversation";
import SuggestionsLoading from "../../FriendSuggetions/SuggestionsLoading";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const NewCoversationSuggetions = () => {
  const [users, setUsers] = useState<string[]>();
  const session = useSession();
  const formRef = useRef<HTMLFormElement>(null);
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["suggetions"],
    queryFn: () => getConversationsSuggetions(session.data?.user._id!),
    enabled: session.data?.user !== undefined,
  });
  const handleNewChat = (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const selectedUsers = formData.getAll("usersData") as string[];
      if (selectedUsers.length !== 0 && session.data) {
        setUsers([...selectedUsers, session.data?.user._id!]);
        const time = setTimeout(() => {
          formRef.current?.reset();
          clearTimeout(time);
        }, 500);
      }
    }
  };
  const tConversation = useTranslations("conversations");
  return (
    <aside className=" w-full">
      {data?.success && (
        <header>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-redColor text-center font-bold text-sm">
            {tConversation("startNewChat")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-black/50 dark:text-white/50 text-xs text-center">
            {tConversation("selectOneOreMore")}
          </motion.p>
        </header>
      )}
      <motion.form
        variants={{ basic: { translateY: 1 }, move: { translateX: 0 } }}
        initial="basic"
        animate="move"
        ref={formRef}
        onSubmit={handleNewChat}
        className="w-full flex flex-col items-center">
        {isLoading && <SuggestionsLoading arr={[1, 2, 3, 4, 5]} />}
        {isSuccess && (
          <motion.ul
            variants={{ move: { transition: { staggerChildren: 0.1 } } }}
            className="space-y-2 w-full max-h-60 overflow-y-auto py-1 px-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-redColor">
            {data.success &&
              data.users.map((user: usersuggestion) => {
                return (
                  <motion.li
                    variants={{ move: { opacity: 1 } }}
                    initial={{ opacity: 0 }}
                    key={user._id}>
                    <NewCoversationSuggetion user={user} />
                  </motion.li>
                );
              })}
          </motion.ul>
        )}
        {!data?.success && <p className="dark:text-white">{data?.error}</p>}
        {data?.success && (
          <button
            className="w-fit mx-auto mt-3 bg-black text-white dark:text-black dark:bg-offWhite px-3 py-1 font-descripFont text-sm"
            type="submit">
            {tConversation("startChat")}
          </button>
        )}
      </motion.form>
      <>
        <StartNewConversation participantsIDs={users!} />
      </>
    </aside>
  );
};
export default NewCoversationSuggetions;
