import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MessagesButton = () => {
  return (
    <button
      type="button"
      className="bg-blueColor  flex text-start px-5 py-2 rounded-md shadow-md shadow-black/20 hover:scale-95 ">
      <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl " />
    </button>
  );
};

export default MessagesButton;
