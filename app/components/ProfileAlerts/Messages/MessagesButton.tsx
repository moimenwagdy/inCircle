import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { profileAlertsActions } from "@/store/slices/ProfileAlertsSlice/ProfileAlertsSlice";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const MessagesButton: React.FC<{ notifLength: number; ulID: string }> = ({
  notifLength,
  ulID,
}) => {
  const showMeesages = useAppSelector(
    (state) => state.ProfileAlertsSlice.showMsssages
  );
  //////////////
  const dispatch = useAppDispatch();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const Notifications = notifLength > 0;
  const handleShowNotifs = () => {
    if (!showMeesages) {
      dispatch(profileAlertsActions.openMessages());
      dispatch(profileAlertsActions.closeNotifs());
    } else {
      dispatch(profileAlertsActions.closeMessages());
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        showMeesages &&
        !buttonRef.current?.contains(target) &&
        !document.getElementById(ulID)?.contains(target)
      ) {
        dispatch(profileAlertsActions.closeMessages());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMeesages, dispatch]);

  return (
    <>
      <button
        name="messagesButton"
        ref={buttonRef}
        onClick={handleShowNotifs}
        type="button"
        className="relative bg-blueColor flex justify-center items-center text-start px-5 py-2 gap-x-[1px] rounded-md shadow-md shadow-black/20 hover:scale-95">
        <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
        {Notifications && (
          <p className="text-white font-bold bg-redExtra absolute -top-1 right-0 rounded-md w-5 h-5 text-sm text-center">
            {notifLength}
          </p>
        )}
      </button>
    </>
  );
};

export default MessagesButton;
