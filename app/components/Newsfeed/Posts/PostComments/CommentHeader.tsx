"use client";
import React, { useEffect, useState } from "react";
import { getUserCommentData } from "./functions/getUserCommentData";
import UserImage from "@/app/components/UserImage/UserImage";
import Link from "next/link";

const CommentHeader: React.FC<{ userID: string }> = ({ userID }) => {
  const [userData, setUserData] = useState<{
    profile: { avatar: string };
    username: string;
  } | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getUserData = async () => {
      setLoading(true);
      const response = await getUserCommentData(userID);
      setUserData(response);
      setLoading(false);
    };
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      {!loading ? (
        <Link
          href={`/user/${userID}/posts`}
          className=" flex justify-start items-center gap-x-2 ">
          {userData && (
            <div className="relative">
              <UserImage
                src={userData.profile.avatar}
                alt={userData.username}
                biggerImg={false}
                userName={userData.username}
              />
            </div>
          )}
          <h2 className=" capitalize font-bold text-redColor">
            {" "}
            {userData?.username}
          </h2>
        </Link>
      ) : (
        <div className="flex animate-pulse h-10 justify-start items-center gap-x-4">
          <span className="w-10 h-10 rounded-full bg-black/5"></span>
          <span className="text-black/5 ">=====</span>
        </div>
      )}
    </>
  );
};

export default CommentHeader;
