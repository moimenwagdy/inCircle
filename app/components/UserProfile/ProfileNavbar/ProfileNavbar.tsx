"use client";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import FollowFriendButton from "../../FriendSuggetions/FollowFriendButton";
import { useSession } from "next-auth/react";
import StartNewConversation from "../../Messaging/StartNewConversation/StartNewConversation";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { MessagingSliceActions } from "@/store/slices/MessagingSlice/MessagingSlice";

const ProfileNavbar: React.FC<{ userID: string }> = ({ userID }) => {

  const pathName = usePathname();
  const session = useSession();
  const dispatch = useAppDispatch();
  const isCurrentUser = session.data?.user._id === userID;
  const openChat = useAppSelector(
    (state) => state.MessagingSlice.profileChatState
  );
  const handleOpenChat = () => {
    dispatch(MessagingSliceActions.openProfileChat());
  };

 

  return (
    <nav className="w-fit px-2 relative rounded mx-auto h-8 bg-black/10 dark:bg-white/10 mt-4 flex justify-center items-center gap-x-2">
      <NavItem
        key="about"
        active={pathName.includes("about")}
        href={`/user/${userID}/about`}>
        About
      </NavItem>
      <NavItem
        key="posts"
        active={pathName.includes("posts")}
        href={`/user/${userID}/posts`}>
        Posts
      </NavItem>
      <NavItem
        key="followers"
        active={pathName.includes("followers")}
        href={`/user/${userID}/followers`}>
        Followers
      </NavItem>
      <NavItem
        key="following"
        active={pathName.includes("following")}
        href={`/user/${userID}/following`}>
        Following
      </NavItem>
        <button
          className="absolute right-0 top-full sm:static px-2 text-white bg-redColor rounded-md mt-2 sm:mt-0 text-sm"
          onClick={handleOpenChat}>
          Send message
        </button>
      {!isCurrentUser && session.data && openChat && (
        <StartNewConversation
          participantsIDs={[session.data.user._id, userID]}
        />
      )}
      {!isCurrentUser && session.data && (
        <FollowFriendButton userToFollowId={userID} />
      )}
    </nav>
  );
};
export default ProfileNavbar;
