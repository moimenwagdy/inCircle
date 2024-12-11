import { useEffect, useState } from "react";
import PostComments from "./PostComments";
import { getCommetsLength } from "./functions/getCommetsLength";

const PostCommentsContainer: React.FC<{ postId: string }> = ({ postId }) => {
  const [enableGetComments, setEnableGetComments] = useState<boolean>(false);
  const [commentsLength, setCommentsLength] = useState<number>(0);

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
        className={`${enableGetComments ? "text-xs my-2" : ""}`}
        onClick={handleGetCommentsState}>
        {enableGetComments ? "Hide" : "Comments"}
      </button>
    </aside>
  );
};

export default PostCommentsContainer;
