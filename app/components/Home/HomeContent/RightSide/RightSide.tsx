import FriendSuggetions from "../../../FriendSuggetions/FriendSuggetions";
import RightSideHeader from "./RightSideHeader";
const RightSide = () => {
  return (
    <section
      id="RightContent"
      className="hidden md:flex flex-col justify-start items-center md:w-[30%] py-5 gap-y-4 ring-1 ring-black/5 dark:ring-white/5 ">
      <RightSideHeader />
      <FriendSuggetions />
    </section>
  );
};
export default RightSide;
