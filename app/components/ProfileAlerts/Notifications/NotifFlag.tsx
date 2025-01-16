import { motion } from "framer-motion";
import React from "react";

const NotifFlag: React.FC<{ notifLength: number }> = ({ notifLength }) => {
  return (
    <motion.p
      initial={{ translateY: -10 }}
      animate={{ translateY: 0 }}
      className="text-white font-bold bg-redExtra absolute -top-1 right-0 rounded-md w-5 h-5 text-sm text-center">
      {notifLength}
    </motion.p>
  );
};

export default NotifFlag;
