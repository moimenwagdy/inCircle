import { userSuggetion } from "@/globalTypes/globalTypes";
import FollowFriendButton from "./FollowFriendButton";
import Image from "next/image";

const FriendSuggetion: React.FC<{ userSuggetion: userSuggetion }> = ({
  userSuggetion,
}) => {
  const defaultImage = userSuggetion.profile.avatar.includes(
    "defaultProfileImage"
  );

  return (
    <>
      <div className="flex justify-between items-center gap-x-2 w-full">
        <div className="w-3/4 flex gap-x-2 justify-start items-center">
          <div className="min-w-8 max-w-8 relative">
            <Image
              src={userSuggetion.profile.avatar}
              alt={userSuggetion.username}
              width={300}
              height={1}
              className="w-full rounded-full relative"
            />
            {defaultImage && (
              <p className="capitalize absolute left-[50%] -translate-x-[50%] font-basicFont text-black text-xs top-[50%] -translate-y-[50%]">
                {userSuggetion.username[0]}
              </p>
            )}
          </div>
          <h2 className="text-sm shrink capitalize">
            {userSuggetion.username}
          </h2>
        </div>
        <FollowFriendButton
          key={userSuggetion._id}
          userToFollowId={userSuggetion._id}
        />
      </div>
    </>
  );
};

export default FriendSuggetion;
