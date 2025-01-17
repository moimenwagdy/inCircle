"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const LeftSideHeader = () => {
  const tConversation = useTranslations("conversations");

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center text-redColor font-bold font-descripFont text-sm">
      {tConversation("conversationHeader")}
    </motion.h1>
  );
};

export default LeftSideHeader;
