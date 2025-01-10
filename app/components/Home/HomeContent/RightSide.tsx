import { useTranslations } from "next-intl";
import FriendSuggetions from "../../FriendSuggetions/FriendSuggetions";
const RightSide = () => {
  const tSuggetions = useTranslations("friendSuggetion");

  return (
    <section
      id="RightContent"
      className="hidden md:flex flex-col justify-start items-center md:w-[30%] py-5 gap-y-4 ring-1 ring-black/5 dark:ring-white/5 ">
      <p className="text-redColor font-descripFont font-bold text-xs">
        {tSuggetions("suggetionsHeader")}
      </p>
      <FriendSuggetions />
    </section>
  );
};
export default RightSide;
