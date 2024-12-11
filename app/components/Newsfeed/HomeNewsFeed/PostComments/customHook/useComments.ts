import { useSession } from "next-auth/react";
import { useState, useRef, ChangeEvent, FormEvent, useEffect } from "react";
import { deleteComment } from "../functions/deleteComment";
import { getComments } from "../functions/getComments";
import { sendComment } from "../functions/sendComment";
import { comment } from "@/globalTypes/globalTypes";

export const useComments = (postId: string) => {
  const [comments, setComments] = useState<comment[]>([]);
  const [comment, setComment] = useState<string>();
  const [loading, setLoading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);
  const session = useSession();
  const userID = session.data?.user._id;

  const getPostComments = async () => {
    setLoading(true);
    const response = await getComments(postId);
    setLoading(false);
    setComments(response);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const submitComment = async (e: FormEvent) => {
    e.preventDefault();
    if (comment === "") {
      return;
    } else {
      const response = await sendComment(comment!, postId, userID!);
      await getPostComments();
      formRef.current?.reset();
    }
  };
  ////////////////////////////////
  useEffect(() => {
    const setTowait = async () => await getPostComments();
    setTowait();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isEmpty = comments?.length === 0;

  const handleDeleteComment = async (commentId: string) => {
    setLoading(true);
    const response = await deleteComment(commentId);
    await getPostComments();
  };

  return {
    handleDeleteComment,
    submitComment,
    handleCommentChange,
    isEmpty,
    comments,
    formRef,
    loading,
  };
};
