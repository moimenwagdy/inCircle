import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const ListItem: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <motion.li
      whileHover={{ scale: 1.03 }}
      className="bg-blueColor dark:bg-black px-4 py-1 rounded text-white shadow-lg dark:shadow-white/5 dark:shadow-md ring-1 dark:ring-1 ring-white font-descripFont font-bold">
      {children}
    </motion.li>
  );
};

export default ListItem;
