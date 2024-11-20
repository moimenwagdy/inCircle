"use client";
import { useEffect, useState } from "react";
import { feelings, feelinType } from "./FellingsTags";
import { useAppDispatch } from "@/store/reduxHooks";
import { newPostActions } from "@/store/slices/newPostSlice/slice";
import { Session } from "inspector/promises";
import { useSession } from "next-auth/react";

const FeelingsSelections = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const session = useSession();
  const handleFeelSelect = (feelings: feelinType) => {
    dispatch(newPostActions.setFeeling(feelings));
    console.log(session);
  };
  const handleOpenFeeling = () => {
    setOpened((prv) => !prv);
  };

  return (
    <>
      {opened && (
        <>
          <ul className="w-32 max-h-40 overflow-y-scroll">
            {feelings.map((feel, i) => {
              return (
                <li onClick={() => handleFeelSelect(feel)} key={i}>
                  <p
                    className="text-sm"
                    dangerouslySetInnerHTML={{
                      __html: feel.feeling + " " + feel.shape,
                    }}></p>
                </li>
              );
            })}
          </ul>
        </>
      )}
      <button
        className="bg-blueColor px-1 text-white"
        type="button"
        onClick={handleOpenFeeling}>
        {opened ? "close" : "feeling"}
      </button>
    </>
  );
};

export default FeelingsSelections;
