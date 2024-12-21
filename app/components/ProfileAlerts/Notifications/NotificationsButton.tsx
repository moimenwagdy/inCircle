"use client";
import { useAppDispatch, useAppSelector } from "@/store/reduxHooks";
import { profileAlertsActions } from "@/store/slices/ProfileAlertsSlice/ProfileAlertsSlice";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NotificationsButton: React.FC<{ notifLength: number }> = ({
  notifLength,
}) => {
  const showNotifs = useAppSelector(
    (state) => state.ProfileAlertsSlice.showNotifs
  );
  const dispatch = useAppDispatch();
  const Notifications = notifLength > 0;
  const handleShowNotifs = () => {
    !showNotifs
      ? dispatch(profileAlertsActions.openNotifs())
      : dispatch(profileAlertsActions.closeNotifs());
  };
  return (
    <button
      onClick={handleShowNotifs}
      type="button"
      className="relative bg-blueColor flex justify-center items-center  text-start px-5 py-2 gap-x-[1px] rounded-md shadow-md shadow-black/20 hover:scale-95 ">
      <FontAwesomeIcon icon={faBell} className="text-white text-xl" />
      {Notifications && (
        <p className="text-white font-bold bg-redExtra absolute -top-1 right-0 rounded-md w-5 h-5 text-sm text-center ">
          {notifLength}
        </p>
      )}
    </button>
  );
};
export default NotificationsButton;
