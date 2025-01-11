"use client";
import NavItem from "./NavItem";
import { usePathname } from "next/navigation";
import FollowFriendButton from "../../FriendSuggetions/FollowFriendButton";
import { useSession } from "next-auth/react";
import StartNewConversation from "../../Messaging/StartNewConversation/StartNewConversation";
import { useAppSelector } from "@/store/reduxHooks";
import ProfileNavbarMessagingButton from "./ProfileNavbarMessagingButton";
import { useTranslations } from "next-intl";

const ProfileNavbar: React.FC<{ userID: string }> = ({ userID }) => {
  const pathName = usePathname();
  const session = useSession();
  const isCurrentUser = session.data?.user._id === userID;
  const openChat = useAppSelector(
    (state) => state.MessagingSlice.profileChatState
  );
  const tProfile = useTranslations("profile");
  return (
    <nav className="w-fit px-2 relative rounded mx-auto h-8 bg-black/10 dark:bg-white/10 mt-4 flex justify-center items-center gap-x-2">
      <NavItem
        key="about"
        active={pathName.includes("about")}
        href={`/user/${userID}/about`}>
        {tProfile("about")}
      </NavItem>
      <NavItem
        key="posts"
        active={pathName.includes("posts")}
        href={`/user/${userID}/posts`}>
        {tProfile("posts")}
      </NavItem>
      <NavItem
        key="followers"
        active={pathName.includes("followers")}
        href={`/user/${userID}/followers`}>
        {tProfile("followers")}
      </NavItem>
      <NavItem
        key="following"
        active={pathName.includes("following")}
        href={`/user/${userID}/following`}>
        {tProfile("following")}
      </NavItem>
      {!isCurrentUser && <ProfileNavbarMessagingButton userID={userID} />}
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
