import React, { useEffect, useState } from "react";
import { getUserCommentData } from "../../Newsfeed/Posts/PostComments/functions/getUserCommentData";
import UserImage from "../../UserImage/UserImage";

const NotificationUserImage: React.FC<{ userId: string }> = ({ userId }) => {
  const [userData, setUserData] = useState<{
    username: string;
    profile: { avatar: string };
  }>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getUserImage = async () => {
      setLoading(true);
      const imgResult = await getUserCommentData(userId!);
      setUserData(imgResult);
      setLoading(false);
    };
    getUserImage();
  }, []);

  return (
    <>
      {userData && (
        <div className="relative">
          <UserImage
            src={userData?.profile.avatar!}
            alt="notiImage"
            userName={userData?.username!}
            biggerImg
          />
        </div>
      )}
      {loading && (
        <div className=" min-w-10 min-h-10 rounded-full bg-white/20 animate-pulse"></div>
      )}
    </>
  );
};

export default NotificationUserImage;
