"use client";
import React, { useState } from "react";
import { deletePost } from "./functions/DeletePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useLocale, useTranslations } from "next-intl";
const PostDeleteOption: React.FC<{ postId: string }> = ({ postId }) => {
  const [openList, setOpenList] = useState<boolean>(false);
  const [loading, setIsLoading] = useState<boolean>(false);
  const [showConfirmDeleteQuestion, setShowConfirmDeleteQuestion] =
    useState<boolean>(false);

  const handleListState = () => {
    setOpenList((prv) => !prv);
  };
  const handleDeletePost = () => {
    setShowConfirmDeleteQuestion(true);
  };
  const cancelDelete = () => {
    setShowConfirmDeleteQuestion(false);
    setOpenList(false);
  };
  const submitDeletePost = async () => {
    setIsLoading(true);
    const result = await deletePost(postId);
    setIsLoading(false);
    setShowConfirmDeleteQuestion(false);
    setOpenList(false);
  };
  const tPost = useTranslations("singlePost");
  const locale = useLocale();
  const isAr = locale === "ar";
  return (
    <>
      <button
        type="button"
        onClick={handleListState}
        className="text-lg -mt-10 text-blueColor cursor-pointer">
        <FontAwesomeIcon icon={faGear} />
      </button>
      {openList && (
        <ul
          className={`${
            isAr ? "text-xs" : ""
          } absolute right-1/5 w-32 bg-offWhite dark:bg-black dark:text-white`}>
          {!showConfirmDeleteQuestion && (
            <>
              <li className="cursor-pointer" onClick={handleDeletePost}>
                {tPost("deletePost")}
              </li>
            </>
          )}
          {showConfirmDeleteQuestion && !loading && (
            <li className="text-xs flex flex-col justify-start items-start me-2">
              <p> {tPost("deletePostWarn")}</p>
              <span className="flex justify-start items-center gap-x-1">
                <button
                  className="text-redColor"
                  type="button"
                  onClick={submitDeletePost}>
                  {tPost("deleteAgree")}
                </button>
                <button
                  className="text-blueColor"
                  onClick={cancelDelete}
                  type="button">
                  {tPost("deleteDisagree")}
                </button>
              </span>
            </li>
          )}
          {loading && (
            <li>
              <p className="text-xs"> {tPost("deleteingPost")}</p>
            </li>
          )}
        </ul>
      )}
    </>
  );
};

export default PostDeleteOption;
