import { usersuggestion } from "@/globalTypes/globalTypes";
import FollowFriendButton from "./FollowFriendButton";
import Image from "next/image";
import UserImage from "../UserImage/UserImage";

const FriendSuggetion: React.FC<{ userSuggetion: usersuggestion }> = ({
  userSuggetion,
}) => {
  const defaultImage = userSuggetion.profile.avatar.includes(
    "defaultProfileImage"
  );
  return (
    <>
      <div className="flex justify-between items-center gap-x-2 w-full">
        <div className="w-3/4 flex gap-x-2 justify-start items-center">
          <div className=" relative">
            <UserImage
              src={userSuggetion.profile.avatar}
              alt={userSuggetion.username}
              userName={userSuggetion.username}
              biggerImg={false}
            />
          </div>
          <h2 className="text-xs lg:text-sm shrink capitalize font-bold">
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
