import React from "react";
import HomePageBackGround from "../BackGround/HomePageBackGround";
import Description from "../Description/Description";
import MainHeaderAdress from "../MainHeaderAdress/MainHeaderAdress";

const MainHomeLanding = () => {
  return (
    <main className="relative h-[85vh] md:h-screen overflow-hidden z-0 ">
      <HomePageBackGround />
      <section className=" text-center">
        <MainHeaderAdress />
        <Description />
      </section>
    </main>
  );
};

export default MainHomeLanding;
