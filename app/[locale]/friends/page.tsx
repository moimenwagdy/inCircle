import FriendSuggetions from "@/app/components/FriendSuggetions/FriendSuggetions";
import React from "react";

const page = () => {
  return (
    <main className="mt-20 w-[80%] sm:w-1/2 mx-auto flex flex-col justify-start items-center gap-y-4">
      <FriendSuggetions />
    </main>
  );
};

export default page;
