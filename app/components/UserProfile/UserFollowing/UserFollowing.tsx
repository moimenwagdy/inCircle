import { usersuggestion } from "@/globalTypes/globalTypes";
import FriendSuggetion from "../../FriendSuggetions/FriendSuggetion";
import { getUserFollowing } from "./functions/getUserFollowing";
import NoFollowMessage from "../NoFollowersMessage";
import { AnimatePresence } from "framer-motion";

const UserFollowing: React.FC<{ userID: string }> = async ({ userID }) => {
  const result = await getUserFollowing(userID);

  return (
    <>
      <ul className="w-3/4 md:w-1/2 mx-auto flex flex-col justify-center items-center mt-16 gap-y-2 dark:text-white">
        {result.success &&
          result.followers.map((follower: usersuggestion) => {
            return (
              <li
                key={follower._id}
                className="w-[95%] lg:w-[75%] ring-1 ring-black/10 dark:ring-white/10 py-1 px-2 rounded-md">
                <FriendSuggetion userSuggetion={follower} />{" "}
              </li>
            );
          })}
      </ul>
      {!result.success && (
        <AnimatePresence>
          <NoFollowMessage message={result.message} />
        </AnimatePresence>
      )}
    </>
  );
};

export default UserFollowing;
