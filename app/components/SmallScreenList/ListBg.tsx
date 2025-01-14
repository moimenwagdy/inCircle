"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const ListBg = () => {
  const [source, setSource] = useState<string>(
    "https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2F60.png?alt=media&token=53dab48f-dcc0-4a5a-bc3e-1a8ccbb22243"
  );
  const { theme } = useTheme();
  useEffect(() => {
    if (theme === "light") {
      setSource(
        "https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2F60.png?alt=media&token=53dab48f-dcc0-4a5a-bc3e-1a8ccbb22243"
      );
    } else
      setSource(
        "https://firebasestorage.googleapis.com/v0/b/incircle-f2a58.appspot.com/o/backgrounds%2F60606060.png?alt=media&token=5c55e033-70f4-4ddd-b882-8a9da721f569"
      );
  }, [theme]);
  return (
    <Image
      priority
      src={source!}
      width={5000}
      height={5000}
      alt="listBG"
      className="fixed w-full min-h-full  -inset-y-2 inset-x-0 opacity-50 -z-10"
    />
  );
};

export default ListBg;
