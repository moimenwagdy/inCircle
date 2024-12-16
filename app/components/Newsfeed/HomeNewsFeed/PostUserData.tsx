import Link from "next/link";
import TimePrint from "../../TimePrint/TimePrint";
import UserImage from "../../UserImage/UserImage";

const PostUserData: React.FC<{
  avatar: string;
  userName: string;
  feeling: string;
  createdAt: Date;
  userID: string;
}> = ({ avatar, userName, feeling, createdAt, userID }) => {
  const isFeeling = feeling !== "";

  return (
    <header className=" w-full flex justify-start items-end gap-x-2">
      <Link href={`/user/${userID}/posts`} className="relative cursor-pointer">
        <UserImage
          src={avatar}
          alt={userName}
          userName={userName}
          biggerImg={true}
        />
      </Link>
      <div className="w-full flex justify-between">
        <div className="flex gap-x-1">
          <Link
            href={`/user/${userID}/posts`}
            className="text-lg capitalize cursor-pointer">
            {userName}
          </Link>
          {isFeeling && (
            <p
              className="font-bold text-redColor"
              dangerouslySetInnerHTML={{
                __html: `is ${feeling} `,
              }}></p>
          )}
        </div>
        <div className="">
          <TimePrint createdAt={createdAt.toString()} />
        </div>
      </div>
    </header>
  );
};

export default PostUserData;
