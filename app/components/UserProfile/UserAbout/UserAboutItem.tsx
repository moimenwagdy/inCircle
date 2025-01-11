"use client";
import useLan from "@/lib/useLan";
import React from "react";

const UserAboutItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  const isAr = useLan();
  return (
    <div className="flex justify-start w-fit">
      <p className={`w-28 ${isAr ? "text-sm" : ""}`}>{label}</p>
      <p className="">{value}</p>
    </div>
  );
};

export default UserAboutItem;
