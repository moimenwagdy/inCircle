import React from "react";
import RightSide from "./RightSide/RightSide";
import LeftSide from "./LeftSide/LeftSide";
import MiddleSide from "./MiddleSide/MiddleSide";

const HomeContent = async () => {
  return (
    <main className=" mx-auto space-y-2 w-[97%] sm:w-[70%] md:w-[97%] mt-10">
      <section className="w-full flex justify-between gap-x-4">
        <LeftSide />
        <MiddleSide />
        <RightSide />
      </section>
    </main>
  );
};
export default HomeContent;
