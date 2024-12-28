import Link from "next/link";
import UserImage from "../../UserImage/UserImage";
import LogoutButton from "../LogoutButton";

const UserCard: React.FC<{
  avatar: string;
  username: string;
  email: string;
  followers: number;
  userID: string;
}> = ({ avatar, email, followers, username, userID }) => {
  return (
    <div className="flex justify-start items-center gap-x-2 px-3 rounded-lg me-5">
      <Link
        href={`/user/${userID}/posts`}
        className="relative w-fit h-fit rounded-full ring-8 ring-offWhite dark:ring-black z">
        <UserImage src={avatar} alt={username} userName={username} biggerImg />
      </Link>
      <div className="flex flex-col justify-center items-end -ms-2 z-50">
        <Link
          href={`/user/${userID}/posts`}
          className="font-bold min-w-28 text-center font-descripFont text-redColor capitalize bg-offWhite dark:bg-black rounded-tr-md mt-2 px-1">
          {username}
        </Link>
        <Link
          href={`/user/${userID}/followers`}
          className="flex justify-start items-center gap-x-1 text-xs bg-offWhite dark:bg-black rounded-bl-md rounded-br-md px-2">
          <p className="text-sm text-black dark:text-white">Followers</p>
          <p className="text-xs text-redColor">{followers}</p>
        </Link>
      </div>
      <div className="mt-2">
        <LogoutButton />
      </div>
    </div>
  );
};
export default UserCard;
