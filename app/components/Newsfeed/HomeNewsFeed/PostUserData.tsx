"use client";
import Link from "next/link";
import TimePrint from "../../TimePrint/TimePrint";
import UserImage from "../../UserImage/UserImage";
import { useSession } from "next-auth/react";
import PostDeleteOption from "./PostDeleteOption";

const PostUserData: React.FC<{
  avatar: string;
  userName: string;
  feeling: string;
  createdAt: Date;
  userID: string;
  postId: string;
}> = ({ avatar, userName, feeling, createdAt, userID, postId }) => {
  const isFeeling = feeling !== "";
  const session = useSession();
  const isPostCreator = session?.data?.user._id === userID;
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
      <div className="w-full flex justify-between ">
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
        <div className="relative">
          <div className="flex justify-center items-center -me-2">
            <TimePrint createdAt={createdAt.toString()} />
            {isPostCreator && <PostDeleteOption postId={postId} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PostUserData;
