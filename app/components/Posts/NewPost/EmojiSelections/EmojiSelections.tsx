"use client";
import React, { useEffect, useState } from "react";
import { Emojis } from "./EmojiCodes";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { newPostActions } from "@/store/slices/newPostSlice/slice";

const EmojiSelections = () => {
  const [ele, setEle] = useState<HTMLTextAreaElement | null>(null);
  const emojiISOpened = useAppSelector((state) => state.newPost.emojisIsOpened);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const element = window.document.getElementById(
      "postContent"
    ) as HTMLTextAreaElement;
    setEle(element);
  }, []);

  const handleOpenEmojis = () => {
    emojiISOpened
      ? dispatch(newPostActions.closeEmoji())
      : dispatch(newPostActions.openEmoji());
    !emojiISOpened && dispatch(newPostActions.closeFeeling());
  };

  const handleSelectedEmoji = (shape: string) => {
    if (ele) {
      ele.value = ele.value + `${shape}`;
    }
    dispatch(newPostActions.disableErrorMsg());
  };
  return (
    <section className=" space-y-2">
      {emojiISOpened && (
        <ul className="flex bg-offWhite dark:bg-black w-40 flex-wrap h-24 overflow-y-scroll scrollbar-thumb-redColor scrollbar-thin scrollbar-track-transparent">
          {Emojis.map((emo, i) => {
            return (
              <li key={i} id={i.toFixed(1)}>
                <p
                  className="cursor-pointer "
                  onClick={() => handleSelectedEmoji(emo.shape)}
                  dangerouslySetInnerHTML={{ __html: emo.code }}></p>
              </li>
            );
          })}
        </ul>
      )}
      <p>
        <button
          className="bg-redColor px-1 font-basicFont"
          type="button"
          onClick={handleOpenEmojis}
          dangerouslySetInnerHTML={{
            __html: emojiISOpened ? "close" : "&#x1F600;",
          }}></button>
      </p>
    </section>
  );
};

export default EmojiSelections;
