import UserImage from "../../UserImage/UserImage";
import LogoutButton from "../LogoutButton";

const UserCard: React.FC<{
  avatar: string;
  username: string;
  email: string;
  followers: number;
}> = ({ avatar, email, followers, username }) => {
  return (
    <div className="flex justify-start items-center gap-x-2 pe-6  h-fit p-2">
      <div className="relative">
        <UserImage src={avatar} alt={username} userName={username} biggerImg />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <p className="font-bold font-descripFont text-redColor capitalize bg-blueColor/30 px-1 rounded">
          {username}
        </p>
        <p className="text-xs bg-blueColor/30 rounded px-1">{email}</p>
        <div className="flex justify-start items-center gap-x-1 text-xs bg-blueColor/30 px-1 rounded">
          <p className="text-sm text-black dark:text-white">Followers</p>
          <p className="text-xs text-redColor">{followers}</p>
        </div>
      </div>
      <LogoutButton />
    </div>
  );
};

export default UserCard;
