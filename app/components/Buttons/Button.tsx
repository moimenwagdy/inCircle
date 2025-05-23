"use client";
import { afacad } from "@/lib/fonts/basicFont";
import { motion } from "framer-motion";
import { useLocale } from "next-intl";
import React, { ReactNode } from "react";

const Button: React.FC<{
  children: ReactNode;
  onclick?: () => void;
  color: string;
  dir?: number;
  margin?: boolean;
  submittButton?: boolean;
}> = ({ children, onclick, color, dir, margin, submittButton }) => {
  const locale = useLocale();
  const ar = locale === "ar";
  return (
    <motion.button
      type={submittButton ? "submit" : "button"}
      onClick={onclick}
      whileHover={{
        paddingLeft: ar || dir === 1 ? "40px" : undefined,
        paddingRight: ar || dir === -1 ? "40px" : undefined,
      }}
      transition={{ type: "spring", stiffness: 90 }}
      className={`
        ${dir === -1 && "pe-3 ps-10"} 
        ${dir === 1 && "ps-3 pe-10"} 
        ${color === "red" && "bg-redColor py-2"} 
      ${color === "blue" && "bg-blueColor py-2"} 
      ${
        color === "black" &&
        "bg-black dark:bg-offWhite dark:text-black text-sm px-6 py-1 me-3"
      }
      text-lg ${afacad.className} text-white self-center 
       ${margin ? "mt-2 md:mt-0" : ""}
      `}>
      {children}
    </motion.button>
  );
};

export default Button;
