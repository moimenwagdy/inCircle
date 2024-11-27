import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { getUsersSuggetions } from "./functions/getSuggetions";
import { userSuggetion } from "@/globalTypes/globalTypes";
import FriendSuggetion from "./FriendSuggetion";

const FriendSuggetions = async () => {
  const session = await getServerSession(authOptions);

  const result = await getUsersSuggetions(session?.user._id!);

  return (
    <ul className="w-full dark:text-white flex flex-col gap-y-2 justify-center items-center ">
      {result &&
        result.map((result: userSuggetion) => {
          return (
            <li
              key={result._id}
              className="w-[95%] lg:w-[75%] ring-1 ring-black/20 dark:ring-white/20 py-1 px-2 rounded-md">
              <FriendSuggetion userSuggetion={result} />
            </li>
          );
        })}
    </ul>
  );
};

export default FriendSuggetions;
