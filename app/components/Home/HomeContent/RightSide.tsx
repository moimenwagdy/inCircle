import React, { Suspense } from "react";
import FriendSuggetions from "../../FriendSuggetions/FriendSuggetions";

const RightSide = () => {
  return (
    <section
      id="RightContent"
      className="hidden md:flex flex-col justify-start items-center md:w-2/6 mt-16 py-5 gap-y-4 ring-1 ring-black/10 dark:ring-white/10 ">
      <p className="text-redColor font-descripFont font-bold text-xs">
        People you may know
      </p>
      <Suspense fallback={<p>lolololo</p>}>
        <FriendSuggetions />
      </Suspense>
    </section>
  );
};

export default RightSide;
