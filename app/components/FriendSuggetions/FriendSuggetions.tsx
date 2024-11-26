import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { getUsersSuggetions } from "./functions/getSuggetions";
import FollowFriendButton from "./FollowFriendButton";

const FriendSuggetions = async () => {
  const session = await getServerSession(authOptions);

  const result = await getUsersSuggetions(session?.user._id!);

  return (
    <ul className="w-full dark:text-white flex flex-col gap-y-2 justify-center items-center ">
      {result &&
        result.map(
          (result: {
            _id: string;
            username: string;
            profile: { avatar: string };
          }) => {
            const defaultImage = result.profile.avatar.includes(
              "defaultProfileImage"
            );
            return (
              <li
                className="w-[80%] ring-1 ring-black/20 dark:ring-white/20 py-1 px-2 rounded-md"
                key={result._id}>
                <div className="flex justify-between items-center gap-x-2 w-full">
                  <div className="  flex gap-x-2 justify-start items-center">
                    <div className="w-fit relative block">
                      <Image
                        src={result.profile.avatar}
                        alt={result.username}
                        width={300}
                        height={1}
                        className="w-8 rounded-full relative"
                      />
                      {defaultImage && (
                        <p className="capitalize absolute left-[50%] -translate-x-[50%] font-basicFont text-blueColor text-xs top-[50%] -translate-y-[50%]">
                          {result.username[0]}
                        </p>
                      )}
                    </div>
                    <h2 className="text-sm capitalize">{result.username}</h2>
                  </div>
                  <FollowFriendButton
                    key={result._id}
                    userToFollowId={result._id}
                  />
                </div>
              </li>
            );
          }
        )}
    </ul>
  );
};

export default FriendSuggetions;
