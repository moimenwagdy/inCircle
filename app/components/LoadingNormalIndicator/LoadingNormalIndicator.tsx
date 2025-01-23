"use client";

import useLan from "@/lib/useLan";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const LoadingNormalIndicator: React.FC<{ className?: string }> = ({
  className,
}) => {
  const tProfile = useTranslations("profile");
  const isAr = useLan();
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${className ? className : ""} dark:text-white text-center  ${
        isAr ? "text-xs" : "tracking-widest"
      } `}>
      {tProfile("loading")}
    </motion.p>
  );
};

export default LoadingNormalIndicator;
