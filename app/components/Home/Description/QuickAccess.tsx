"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { handleSignIn } from "../../UserAuthentication/functions/login";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";
import { useTranslations } from "next-intl";

const QuickAccess = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [loading, setIsLoading] = useState<boolean>(false);
  const session = useSession();
  const handleQuickAccess = async () => {
    setIsLoading(true);
    const response = await handleSignIn(
      "inCircleUser@incircle.com",
      "22446688"
    );
    setIsLoading(false);
  };

  if (session.data) {
    redirect("/news");
  }
  const tLanding = useTranslations("homePage");
  return (
    <div className="mt-2 flex flex-col w-fit mx-auto justify-center items-center gap-y-2 ">
      <p className="dark:text-white">Or</p>
      <motion.button
        onClick={handleQuickAccess}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className="bg-black dark:font-bold dark:bg-offWhite text-white dark:text-black py-2 px-10 ">
        {!loading
          ? tLanding("quickAccessButton")
          : tLanding("quickAccessButtonLoading")}
      </motion.button>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: hover ? 1 : 0 }}
        className="text-sm dark:text-white w-4/5">
        {tLanding("quickAccess")}
      </motion.p>
    </div>
  );
};

export default QuickAccess;
