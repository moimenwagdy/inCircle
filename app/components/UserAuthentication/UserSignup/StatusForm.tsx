import React from "react";

const StatusForm = () => {
  return (
    <div className="flex justify-start items-center gap-x-6">
      <label>Status</label>
      <select
        id="status"
        name="status"
        defaultValue="Single"
        className="border rounded p-2">
        <option value="Single">Single</option>
        <option value="Married">Married</option>
        <option value="Engaged">Engaged</option>
        <option value="Complicated">Complicated</option>
      </select>
    </div>
  );
};

export default StatusForm;
