"use client";
import { Emojis } from "./EmojiCodes";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { newPostActions } from "@/store/slices/newPostSlice/slice";

const EmojiSelections = () => {
  const emojiISOpened = useAppSelector((state) => state.newPost.emojisIsOpened);
  const dispatch = useAppDispatch();
  const handleOpenEmojis = () => {
    emojiISOpened
      ? dispatch(newPostActions.closeEmoji())
      : dispatch(newPostActions.openEmoji());
    !emojiISOpened && dispatch(newPostActions.closeFeeling());
  };
  const handleSelectedEmoji = (shape: string) => {
    const ele = window.document.getElementById(
      "postContent"
    ) as HTMLTextAreaElement;
    if (ele) {
      const { selectionStart, selectionEnd } = ele;
      const beforeCursor = ele.value.slice(0, selectionStart);
      const afterCursor = ele.value.slice(selectionEnd);
      ele.value = `${beforeCursor}${shape}${afterCursor}`;
      const newCursorPosition = selectionStart + shape.length;
      ele.setSelectionRange(newCursorPosition, newCursorPosition);
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
                  className="cursor-pointer"
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
