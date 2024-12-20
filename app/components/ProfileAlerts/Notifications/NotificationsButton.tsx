"use client";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const NotificationsButton: React.FC<{ notifLength: number }> = ({
  notifLength,
}) => {
  const Notifications = notifLength > 0;
  return (
    <button
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
