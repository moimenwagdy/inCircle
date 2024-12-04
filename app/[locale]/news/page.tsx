import HomeContent from "@/app/components/Home/HomeContent/HomeContent";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import React from "react";


const page = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user._id) {
    redirect("/");
  }
  return <HomeContent />;
};
export default page;