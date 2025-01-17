import { motion } from "framer-motion";

const MoodButton: React.FC<{
  onClick: () => void;
  isDark: boolean;
  moodValue: string;
  disabled: boolean;
}> = ({ isDark, onClick, moodValue, disabled }) => {
  return (
    <div id="mood" className="relative text-white">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`text-sm px-1 font-bold z-50`}>
        {moodValue}
      </button>
      {disabled && (
        <motion.div
          layoutId="mood"
          transition={{ type: "spring", stiffness: 150 }}
          className="absolute inset-0  bg-redColor z-0 rounded shadow-md mix-blend-color"
        />
      )}
    </div>
  );
};

export default MoodButton;
