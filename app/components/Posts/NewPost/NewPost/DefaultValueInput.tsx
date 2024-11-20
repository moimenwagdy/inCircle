import React from "react";

export const DefaultValueInput: React.FC<{
  defaultValue: string | string[];
  name: string;
  id: string;
}> = ({ defaultValue, id, name }) => {
  return (
    <input name={name} id={id} className="hidden" defaultValue={defaultValue} />
  );
};
