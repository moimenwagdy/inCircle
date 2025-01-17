"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

const RightSideHeader = () => {
  const tSuggetions = useTranslations("friendSuggetion");

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-redColor font-descripFont font-bold text-xs">
      {tSuggetions("suggetionsHeader")}
    </motion.h1>
  );
};

export default RightSideHeader;
