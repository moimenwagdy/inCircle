import React from "react";

const LoadingNormalIndicator: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <p className={`${className ? className : ""} text-center tracking-widest`}>
      Loading
    </p>
  );
};

export default LoadingNormalIndicator;
