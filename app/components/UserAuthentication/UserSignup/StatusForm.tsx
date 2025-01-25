const StatusForm = () => {
  return (
    <div className="flex justify-start items-center gap-x-6">
      <label>Status</label>
      <select
        id="status"
        name="status"
        defaultValue="Single"
        className="border rounded p-2   ">
        <option className="dark:text-black" value="Single">Single</option>
        <option className="dark:text-black" value="Married">Married</option>
        <option className="dark:text-black" value="Engaged">Engaged</option>
        <option className="dark:text-black" value="Complicated">Complicated</option>
      </select>
    </div>
  );
};
export default StatusForm;
