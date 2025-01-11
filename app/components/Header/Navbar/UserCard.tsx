import { Link } from "@/navigation";
import UserImage from "../../UserImage/UserImage";
import LogoutButton from "../LogoutButton";
import { useTranslations } from "next-intl";
import useLan from "@/lib/useLan";

const UserCard: React.FC<{
  avatar: string;
  username: string;
  email: string;
  followers: number;
  userID: string;
}> = ({ avatar, followers, username, userID }) => {
  const tProfile = useTranslations("profile");
  const isAr = useLan();
  return (
    <section className=" flex justify-start items-center h-full gap-x-1">
      <header className=" flex flex-col justify-center items-center ">
        <Link
          href={`/user/${userID}/posts`}
          className="relative w-fit rounded-full shadow-md shadow-black">
          <UserImage
            src={avatar}
            alt={username}
            userName={username}
            biggerImg
          />
        </Link>
        <Link
          href={`/user/${userID}/posts`}
          className="text-white bg-redColor shadow-md shadow-black/50 px-3 pt-2 pb-[2px] -mt-[10px] rounded-lg">
          <p className="text-sm font-descripFont font-bold capitalize  txt-center">
            {username}
          </p>
        </Link>
      </header>
      <div className="h-full  flex-col justify-end items-center gap-x-[-2px] hidden sm:flex">
        <Link
          href={`/user/${userID}/followers`}
          className="flex justify-start items-center gap-x-1 text-xs h-fit">
          <p
            className={`${
              isAr ? "text-sx" : "text-sm"
            }  text-black dark:text-white`}>
            {tProfile("followers")}
          </p>
          <p className="text-sm text-redColor bg-offWhite px-1 font-bold rounded-full">
            {followers}
          </p>
        </Link>
        <LogoutButton />
      </div>
    </section>
  );
};
export default UserCard;
