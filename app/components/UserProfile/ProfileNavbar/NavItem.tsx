"use client";
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import React, { ReactNode } from "react";

const NavItem: React.FC<{
  children: ReactNode;
  href: string;
  className?: string;
  active: boolean;
}> = ({ children, href, className, active }) => {
  return (
    <Link
      href={href}
      id="activePill"
      className={` relative ${className ? className : ""} 
      min-w-16  flex justify-center items-center rounded ${
        active ? " text-white" : " dark:bg-black/50 hover:text-black/70"
      }   text-black dark:text-white  `}>
      <p className="z-10"> {children}</p>
      {active && (
        <motion.div
          layoutId="activePill"
          className="absolute inset-0 bg-blueColor rounded "
        />
      )}
    </Link>
  );
};
export default NavItem;
