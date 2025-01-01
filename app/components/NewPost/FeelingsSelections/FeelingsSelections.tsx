"use client";
import { feelings } from "./FellingsTags";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { newPostActions } from "@/store/slices/newPostSlice/slice";

const FeelingsSelections = () => {
  const feelingIsOpened = useAppSelector(
    (state) => state.newPost.feelingIsOpened
  );
  const dispatch = useAppDispatch();
  const handleFeelSelect = (feelings: string) => {
    dispatch(newPostActions.setFeeling(feelings));
    dispatch(newPostActions.closeFeeling());
    dispatch(newPostActions.disableErrorMsg());
  };
  const handleOpenFeeling = () => {
    feelingIsOpened
      ? dispatch(newPostActions.closeFeeling())
      : dispatch(newPostActions.openFeeling());
  };
  const handleClearFeeling = () => {
    dispatch(newPostActions.closeFeeling());
    dispatch(newPostActions.setFeeling(""));
  };
  return (
    <section className="space-y-2">
      {feelingIsOpened && (
        <>
          <ul className="w-24 max-h-32 overflow-y-scroll bg-offWhite dark:bg-black dark:text-white scrollbar-thin scrollbar-thumb-blueColor scrollbar-track-transparent">
            {feelings.map((feel, i) => {
              return (
                <li key={i}>
                  <p
                    onClick={() => handleFeelSelect(feel)}
                    className="text-sm cursor-pointer"
                    dangerouslySetInnerHTML={{
                      __html: feel,
                    }}></p>
                </li>
              );
            })}
          </ul>
        </>
      )}
      <div className="space-x-1">
        <button
          className="bg-blueColor px-2  text-white -z-20 "
          type="button"
          onClick={handleOpenFeeling}>
          {feelingIsOpened ? "close" : "feeling"}
        </button>

        {feelingIsOpened && (
          <button
            className="bg-black dark:bg-offWhite  px-1 text-white dark:text-black -z-20"
            type="button"
            onClick={handleClearFeeling}>
            clear
          </button>
        )}
      </div>
    </section>
  );
};

export default FeelingsSelections;
