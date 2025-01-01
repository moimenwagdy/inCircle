"use client";
import {
  getUsersFilteredSuggetions,
  getUsersStandardSuggetions,
} from "./functions/getSuggetions";
import { usersuggestion } from "@/globalTypes/globalTypes";
import FriendSuggetion from "./FriendSuggetion";
import { ChangeEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import SuggestionsLoading from "./SuggestionsLoading";

const FriendSuggetions = () => {
  const [suggestions, setSuggetions] = useState<usersuggestion[]>();
  const [loading, setIsLoading] = useState<boolean>(false);
  const session = useSession();
  const [queryPayload, setQueryPayload] = useState<string>("");

  const handleQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setQueryPayload(e.target.value);
    }, 1000);
  };

  useEffect(() => {
    const getSug = async () => {
      if (!session.data) return;
      if (queryPayload === "") {
        setIsLoading(true);
        const result = await getUsersStandardSuggetions(
          session?.data?.user._id!
        );
        setIsLoading(false);
        setSuggetions(result);
      } else {
        setIsLoading(true);
        setTimeout(async () => {
          const result = await getUsersFilteredSuggetions(
            session?.data?.user._id!,
            queryPayload
          );
          setIsLoading(false);
          setSuggetions(result);
        }, 200);
      }
    };
    getSug();
  }, [session?.data, queryPayload]);
  const SuggestionsAreEmpty = suggestions?.length === 0;

  return (
    <>
      <input
        type="text"
        id="searchFriends"
        placeholder="Find Friends"
        defaultValue={""}
        onChange={handleQueryChange}
        className="w-[85%] px-2 py-1 mx-auto ring-1 ring-black/5 dark:ring-white/5"
      />
      {!loading ? (
        <>
          {!SuggestionsAreEmpty ? (
            <ul className="w-full dark:text-white flex flex-col gap-y-2 justify-center items-center ">
              {suggestions &&
                suggestions.map((result: usersuggestion) => {
                  return (
                    <li
                      key={result._id}
                      className="w-[95%] lg:w-[75%] ring-1 ring-black/10 dark:ring-white/10 py-1 px-2 rounded-md">
                      <FriendSuggetion userSuggetion={result} />
                    </li>
                  );
                })}
            </ul>
          ) : (
            <p className="dark:text-white">No result round</p>
          )}
        </>
      ) : (
        <SuggestionsLoading />
      )}
    </>
  );
};

export default FriendSuggetions;
