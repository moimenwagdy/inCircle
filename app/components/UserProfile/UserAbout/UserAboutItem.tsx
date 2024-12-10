import React from "react";

const UserAboutItem: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <div className="flex justify-start w-fit">
      <p className="w-24">{label}</p>
      <p className="">{value}</p>
    </div>
  );
};

export default UserAboutItem;
