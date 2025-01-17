"use client";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import lightListBg from "@/public/backgrounds/initialBG.webp";
import darkListBg from "@/public/backgrounds/darkListBg.webp";

const ListBg = () => {
  const [source, setSource] = useState<StaticImageData>(lightListBg);
  const { theme } = useTheme();
  useEffect(() => {
    if (theme === "light") {
      setSource(lightListBg);
    } else setSource(darkListBg);
  }, [theme]);
  return (
    <Image
      priority
      src={source!}
      width={1000}
      height={1000}
      alt="listBG"
      className="fixed w-full min-h-full dark:opacity-20 -inset-y-2 inset-x-0 opacity-40 -z-10"
    />
  );
};

export default ListBg;
