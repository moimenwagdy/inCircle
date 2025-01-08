"use client";
import LanguageSwitcher from "../../LangSwitcher/LangSwitcher";
import DarkLightMood from "../../mood/DarkLightMood";
import { useSession } from "next-auth/react";
import UserCard from "./UserCard";
import Logo from "./Logo";
import NavBackgroundImage from "./NavBackGroundImage";
import { useAppDispatch } from "@/store/reduxHooks";
import { useRouter } from "@/navigation";
import { authActions } from "@/store/slices/authSlice/Slice";
import Button from "../../Buttons/Button";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import ListButton from "./ListButton";

const Navbar = () => {
  const session = useSession();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const path = usePathname();

  const toSignin = () => {
    dispatch(authActions.setAuthMoodToSignIn());
    router.push("/auth");
  };
  const tAuth = useTranslations("auth");
  const notLandingPage = path.includes("auth") || path !== "/en";
  const notAuthPage = !path.includes("auth");
  return (
    <nav className="h-16 w-full flex justify-between items-center relative bg-blueColor mt-1 overflow-hidden">
      <NavBackgroundImage />
        <Logo />
      <ListButton />
      <div className="dark:text-white gap-x-2 hidden sm:flex w-fit h-full z-50 ">
        <div className="absolute min-h-full flex justify-center items-center left-40  z-50 gap-x-14 ">
          <DarkLightMood fixedWidth={true} />
          <LanguageSwitcher />
        </div>
        {session.data && (
          <div className="pe-6 h-full  ">
            <UserCard
              key={session.data.user._id}
              userID={session.data.user._id}
              avatar={
                session.data?.user.profile?.avatar! || session.data?.user.image!
              }
              email={session.data?.user.email}
              followers={session.data?.user.followers.length}
              username={session.data.user.username}
            />
          </div>
        )}
        {!session?.data?.user && notLandingPage && notAuthPage && (
          <div onClick={toSignin} className="w-48 flex justify-start font-bold">
            <Button margin key="blue" dir={-1} color="red">
              {tAuth("formHeaderSignIn")}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
