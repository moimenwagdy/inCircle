import React from "react";
import StartNewConversation from "../../Messaging/StartNewConversation/StartNewConversation";

const TEST: React.FC<{ ids: string[] }> = ({ ids }) => {
  return <StartNewConversation participantsIDs={ids} />;
};

export default TEST;
