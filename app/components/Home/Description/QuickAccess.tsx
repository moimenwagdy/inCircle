"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const QuickAccess = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div className="mt-2 flex flex-col w-fit mx-auto justify-center items-center gap-y-2 ">
      <p className="dark:text-white">Or</p>
      <motion.button
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className="bg-black dark:font-bold dark:bg-offWhite text-white dark:text-black py-2 px-10 ">
        Quick Login
      </motion.button>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        className="text-sm dark:text-white w-4/5">
        Quick access, skipping authentication step, with prepared account,
        allowing you to use all features despite it is preferred to create an
        account or login with Google!.
      </motion.p>
    </div>
  );
};

export default QuickAccess;
