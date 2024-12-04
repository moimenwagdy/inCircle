"use client";
import { useUserName } from "@/app/glopalCustomHooks/useUserName";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { newPostActions } from "@/store/slices/newPostSlice/slice";

const PostTextContentInput = () => {
  const userName = useUserName();
  const feeling = useAppSelector((state) => state.newPost.feeling);
  const dispatch = useAppDispatch();
  const handlePostState = () => {
    dispatch(newPostActions.closeFeeling());
    dispatch(newPostActions.closeEmoji());
    dispatch(newPostActions.disableErrorMsg());
  };
  return (
    <div className="w-full flex flex-col justify-start items-center ">
      <div className="self-start h-6 text-black dark:text-offWhite ms-2 flex justify-start items-center space-x-1">
        {feeling?.feeling && (
          <>
            <p> I&#39;m feeling</p>
            <p
              className="text-sm text-redColor font-bold"
              dangerouslySetInnerHTML={{
                __html: ` ${feeling.feeling} ${feeling.shape}`,
              }}></p>
          </>
        )}
      </div>
      <div className="w-full">
        <textarea
          onFocus={handlePostState}
          id="postContent"
          name="postContent"
          rows={3}
          placeholder={`What's on your mind ${userName && userName} ?`}
          className="placeholder:text-sm w-full resize-none p-3 border rounded-lg focus:outline-none dark:text-white focus:ring-1 focus:ring-blueColor focus:border-blueColor"
        />
      </div>
    </div>
  );
};
export default PostTextContentInput;
