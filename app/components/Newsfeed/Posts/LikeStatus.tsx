"use client";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import React, { ReactNode, useEffect, useState } from "react";

const LikeStatus: React.FC<{
  likeState: string;
}> = ({ likeState }) => {
  const locale = useLocale();
  const isAr = locale === "ar";

  return (
    <motion.p
      initial={{ opacity: 0, translateY: -10 }}
      animate={{ opacity: 1, translateY: 0 }}
      className={`${isAr ? "text-xs" : ""}`}>
      {likeState}
    </motion.p>
  );
};

export default LikeStatus;
