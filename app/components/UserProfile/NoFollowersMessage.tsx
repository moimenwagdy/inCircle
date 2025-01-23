"use client";
import { motion } from "framer-motion";

const NoFollowMessage: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <motion.p
      initial={{ opacity: 0, translateY: -40 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{ opacity: 0, translateY: -40 }}
      className="text-center dark:text-white">
      {message}
    </motion.p>
  );
};

export default NoFollowMessage;
