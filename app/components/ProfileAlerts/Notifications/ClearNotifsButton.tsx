import React from "react";
import clearNotifications from "../functions/clearNotifications";

const ClearNotifsButton: React.FC<{ userID: string }> = ({ userID }) => {
  const handleClearNotfs = async () => {
    await clearNotifications(userID);
  };
  return (
    <li className="w-fit text-white bg-redColor px-2 py-1 rounded-md ring-1 ring-redColor ring-offset-2 ring-offset-offWhite dark:ring-offset-black">
      <button onClick={handleClearNotfs} className="font-bold">
        Clear
      </button>
    </li>
  );
};

export default ClearNotifsButton;
