import React from "react";
import {
  differenceInMinutes,
  differenceInHours,
  differenceInDays,
} from "date-fns";

interface RelativeTimeProps {
  createdAt: string; // Expecting ISO format string
}

const TimePrint: React.FC<RelativeTimeProps> = ({ createdAt }) => {
  const date = new Date(createdAt);

  // Calculate differences
  const minutesAgo = differenceInMinutes(new Date(), date);
  const hoursAgo = differenceInHours(new Date(), date);
  const daysAgo = differenceInDays(new Date(), date);

  let displayText = "";

  if (minutesAgo < 1) {
    displayText = "just now";
  } else if (minutesAgo < 60) {
    displayText = `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (hoursAgo < 24) {
    displayText = `${hoursAgo} hour${hoursAgo !== 1 ? "s" : ""} ago`;
  } else if (daysAgo <= 29) {
    displayText = `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
  } else {
    displayText = `${daysAgo} day${daysAgo !== 1 ? "s" : ""} ago`;
  }

  return <p className="text-xs">{displayText}</p>;
};

export default TimePrint;
