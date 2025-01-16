"use client";
import React, { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { profileAlertsActions } from "@/store/slices/ProfileAlertsSlice/ProfileAlertsSlice";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NotifFlag from "./NotifFlag";

const NotificationsButton: React.FC<{ notifLength: number; ulID: string }> = ({
  ulID,
  notifLength,
}) => {
  const showNotifs = useAppSelector(
    (state) => state.ProfileAlertsSlice.showNotifs
  );
  const dispatch = useAppDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const Notifications = notifLength > 0;
  const handleShowNotifs = () => {
    if (!showNotifs) {
      dispatch(profileAlertsActions.openNotifs());
      dispatch(profileAlertsActions.closeMessages());
    } else {
      dispatch(profileAlertsActions.closeNotifs());
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        showNotifs &&
        !buttonRef.current?.contains(target) &&
        !document.getElementById(ulID)?.contains(target)
      ) {
        dispatch(profileAlertsActions.closeNotifs());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showNotifs, dispatch]);

  return (
    <button
      ref={buttonRef}
      onClick={handleShowNotifs}
      type="button"
      className="relative bg-blueColor flex justify-center items-center text-start px-5 py-2 gap-x-[1px] rounded-md shadow-md shadow-black/20 hover:scale-95">
      <FontAwesomeIcon icon={faBell} className="text-white text-xl" />
      {Notifications && (
        <NotifFlag notifLength={notifLength} key={notifLength} />
      )}
    </button>
  );
};

export default NotificationsButton;
