"use client";
import { Link } from "@/navigation";
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
      className={` ${className ? className : ""} 
    ${active ? "active" : ""}
      min-w-16  flex justify-center items-center rounded ${
        active ? "bg-blueColor text-white" : " bg-white/50 dark:bg-black/50"
      }   text-black dark:text-white hover:bg-blueColor dark:hover:bg-blueColor hover:duration-200 text-sm hover:text-white`}>
      {children}
    </Link>
  );
};
export default NavItem;
