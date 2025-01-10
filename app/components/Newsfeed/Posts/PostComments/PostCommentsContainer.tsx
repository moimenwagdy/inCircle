import { useEffect, useState } from "react";
import PostComments from "./PostComments";
import { getCommetsLength } from "./functions/getCommetsLength";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

const PostCommentsContainer: React.FC<{ postId: string }> = ({ postId }) => {
  const [enableGetComments, setEnableGetComments] = useState<boolean>(false);
  const [commentsLength, setCommentsLength] = useState<number>(0);
  const path = usePathname();
  const handleGetCommentsState = () => {
    setEnableGetComments((prv) => !prv);
  };
  useEffect(() => {
    const getLength = async () => {
      const response = await getCommetsLength(postId);
      setCommentsLength(response);
    };
    getLength();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enableGetComments]);

  useEffect(() => {
    if (path?.includes("activity")) {
      setEnableGetComments(true);
    }
  }, [path]);
  const tPost = useTranslations("singlePost");
  const locale = useLocale();
  const isAr = locale === "ar";
  return (
    <aside
      className={`flex m-0 ${
        enableGetComments
          ? "flex-col"
          : "flex-row-reverse justify-start items-center gap-x-1"
      } `}>
      <div className=" flex flex-col w-full gap-y-2">
        {!enableGetComments && (
          <span className="flex gap-x-[2px] -mt-1 text-xs">
            <p className="text-blueColor">{commentsLength}</p>
          </span>
        )}
        {enableGetComments && <PostComments postId={postId} key={postId} />}
      </div>
      <button
        dir={`${isAr ? "rtl" : "ltr"}`}
        className={`${enableGetComments ? "text-xs my-2" : ""} ${
          isAr ? "text-xs" : ""
        } `}
        onClick={handleGetCommentsState}>
        {enableGetComments ? `${tPost("hide")}` : `${tPost("comments")}`}
      </button>
    </aside>
  );
};

export default PostCommentsContainer;
