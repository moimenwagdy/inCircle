import { likeRsopnse } from "@/globalTypes/globalTypes";
import { useSession } from "next-auth/react";
import { useState, useEffect, useMemo } from "react";
import { getLikes } from "../functions/getLikes";
import { getLikesUserName } from "../functions/getLikesUsernames";
import { handleLikePost } from "../functions/likeOrDislikePost";

export const useLikeFeature = (postId: string) => {
  const [likes, setLikes] = useState<string[]>([]);
  const [likeAdded, setLikeAdded] = useState<boolean>();
  const [userNames, setUserNames] = useState<string[]>([]);
  const session = useSession();
  const currentUserId = session.data?.user._id;

  const fetchLikes = async (id: string) => {
    const likesArray = await getLikes(id);
    setLikes(likesArray);
    return likesArray;
  };

  const handleInteraction = async () => {
    const result: likeRsopnse = await handleLikePost(currentUserId!, postId);
    if (result.added) {
      setLikeAdded(true);
    }
    if (result.removed) {
      setLikeAdded(false);
    }
    const result2 = await fetchLikes(postId);
  };

  useEffect(() => {
    fetchLikes(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentUserLike = useMemo(
    () => likes?.includes(currentUserId!),
    [likes, currentUserId]
  );

  useEffect(() => {
    const fetchUsernames = async () => {
      const usernames = await getLikesUserName(likes);
      setUserNames(usernames);
    };

    if (likes.length > 0) {
      fetchUsernames();
    } else {
      setUserNames([]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likes.length]);

  const LikesIsNOtEmpty = userNames.length > 0;

  return { LikesIsNOtEmpty, likeAdded, likes, userNames,handleInteraction,currentUserLike };
};
