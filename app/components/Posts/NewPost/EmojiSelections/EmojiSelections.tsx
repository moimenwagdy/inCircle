"use client";
import React, { useEffect, useState } from "react";
import { Emojis } from "./EmojiCodes";

const EmojiSelections = () => {
  const [openEmojis, setOpenEmojis] = useState(false);
  const [ele, setEle] = useState<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const element = window.document.getElementById(
      "new-post"
    ) as HTMLTextAreaElement;
    setEle(element);
  }, []);

  const handleOpenEmojis = () => {
    setOpenEmojis((prv) => !prv);
  };

  const handleSelectedEmoji = (shape: string) => {
    if (ele) {
      ele.value = ele.value + `${shape}`;
    }
  };
  return (
    <section>
      {openEmojis && (
        <ul className="flex flex-wrap h-20 overflow-y-scroll scrollbar-thumb-redColor scrollbar scrollbar-track-transparent">
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
      <button
      className="bg-redColor px-1"
        type="button"
        onClick={handleOpenEmojis}
        dangerouslySetInnerHTML={{
          __html: openEmojis ? "close" : "&#x1F600;",
        }}></button>
    </section>
  );
};

export default EmojiSelections;
