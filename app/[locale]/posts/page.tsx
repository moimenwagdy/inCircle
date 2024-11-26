import FriendSuggetions from "@/app/components/FriendSuggetions/FriendSuggetions";
import React from "react";

const page = async () => {
  return (
    <section
      id="RightContent"
      className="hidden md:flex md:w-1/5 md:justify-center mt-20">
      <FriendSuggetions />
    </section>
  );
};

export default page;
