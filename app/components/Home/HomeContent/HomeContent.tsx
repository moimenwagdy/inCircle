import React from "react";
import RightSide from "./RightSide";
import MiddleSide from "./MiddleSide";
import LeftSide from "./LeftSide";

const HomeContent = async () => {
  return (
    <main className="container mx-auto space-y-2">
      <section className="w-full flex justify-between gap-x-1">
        <LeftSide />
        <MiddleSide />
        <RightSide />
      </section>
    </main>
  );
};
export default HomeContent;
