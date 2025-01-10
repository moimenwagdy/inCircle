import { usersuggestion } from "@/globalTypes/globalTypes";
import FollowFriendButton from "./FollowFriendButton";
import UserImage from "../UserImage/UserImage";
import Link from "next/link";

const FriendSuggetion: React.FC<{
  userSuggetion: usersuggestion;
}> = ({ userSuggetion }) => {
  return (
    <>
      <div className="flex justify-between items-center gap-x-2 w-full">
        <div className="max-w-[75%] flex gap-x-2 justify-start items-center">
          <Link
            href={`/user/${userSuggetion._id}/posts`}
            className="relative cursor-pointer">
            <UserImage
              src={userSuggetion.profile.avatar}
              alt={userSuggetion.username}
              userName={userSuggetion.username}
              biggerImg={false}
            />
          </Link>
          <Link
            href={`/user/${userSuggetion._id}/posts`}
            className="text-xs lg:text-sm shrink capitalize font-bold">
            {userSuggetion.username}
          </Link>
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
