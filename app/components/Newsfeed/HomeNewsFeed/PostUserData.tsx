import Image from "next/image";

const PostUserData: React.FC<{
  avatar: string;
  userName: string;
  feeling: string;
  createdAt: Date;
}> = ({ avatar, userName, feeling, createdAt }) => {
  const isFeeling = feeling !== "";
  return (
    <header className=" w-full flex justify-start items-end gap-x-2">
      <Image
        src={avatar}
        alt={userName}
        width={60}
        height={60}
        className="w-10 rounded-full"
        priority
      />
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
          <time
            dateTime={new Date(createdAt).toISOString()} // Ensures semantic accuracy for accessibility
            className="text-xs dark:text-white/50 text-black/80">
            {new Date(createdAt).toLocaleString("en-US", {
              year: "2-digit",
              month: "narrow",
              day: "2-digit",
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            })}
          </time>
        </div>
      </div>
    </header>
  );
};

export default PostUserData;
