import TimePrint from "../../TimePrint/TimePrint";
import UserImage from "../../UserImage/UserImage";

const PostUserData: React.FC<{
  avatar: string;
  userName: string;
  feeling: string;
  createdAt: Date;
}> = ({ avatar, userName, feeling, createdAt }) => {
  const isFeeling = feeling !== "";
  return (
    <header className=" w-full flex justify-start items-end gap-x-2">
      <div className="relative">
        <UserImage
          src={avatar}
          alt={userName}
          userName={userName}
          biggerImg={true}
        />
      </div>
      <div className="w-full flex justify-between">
        <div className="flex gap-x-1">
          <h1 className="text-lg capitalize">{userName}</h1>
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
