"use client";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";
import changeBio from "../functions/changeBio";
import { useSession } from "next-auth/react";
const UserBio: React.FC<{ bio: string; userID: string }> = ({
  bio,
  userID,
}) => {
  console.log(bio);
  const [editBio, setEditBio] = useState(false);
  const [formState, fromAction] = useFormState(changeBio, null);
  const session = useSession();
  const handleBio = () => {
    setEditBio(true);
  };
  const cancelEditBio = () => {
    setEditBio(false);
  };

  useEffect(() => {
    if (formState?.success) {
      setEditBio(false);
    }
  }, [formState?.success]);

  const isCurrentUser = session.data?.user._id === userID;
  return (
    <div className="dark:text-white flex justify-center items-center gap-x-2 mt-2">
      {!editBio && <p className="text-black dark:text-white">{bio}</p>}
      {editBio && (
        <form
          action={fromAction}
          className="mt-2 flex justify-center items-center gap-x-1">
          <label className="hidden">editBio</label>
          <input
            defaultValue={bio}
            type="text"
            className={`h-3 py-2 text-sm outline-none `}
            name="bio"
            autoFocus={editBio}
          />
          <input
            type="text"
            defaultValue={userID}
            name="userID"
            className="hidden"
          />
          <button type="submit" className="text-xs text-blueColor">
            change
          </button>
          <button
            onClick={cancelEditBio}
            type="button"
            className="text-xs text-redColor">
            cancel
          </button>
        </form>
      )}
      {isCurrentUser && (
        <>
          {!editBio && (
            <button
              className="text-xs text-black/50 dark:text-white/50"
              onClick={handleBio}>
              Edit
            </button>
          )}
        </>
      )}
    </div>
  );
};
export default UserBio;
