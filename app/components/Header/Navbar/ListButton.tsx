import { useAppDispatch } from "@/store/reduxHooks";
import { NavListSliceActions } from "@/store/slices/NavListSlice/NavListSlice";
import React from "react";

const ListButton = () => {
  const dispatch = useAppDispatch();
  const handleListStatus = () => {
    dispatch(NavListSliceActions.openList());
  };
  return (
    <button
      onClick={handleListStatus}
      className="group  w-8 gap-y-1 flex flex-col z-50 me-4 sm:hidden">
      <div className="h-1 w-8 bg-offWhite rounded-md"></div>
      <div className="h-1 group-hover:w-8 transition-all duration-300 w-5 bg-offWhite rounded-md self-end"></div>
      <div className="h-1 w-8 bg-offWhite rounded-md"></div>
    </button>
  );
};

export default ListButton;
