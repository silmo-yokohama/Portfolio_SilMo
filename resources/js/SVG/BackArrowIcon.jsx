import React from "react";

const BackArrowIcon = ({ size, color, className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width={size || 32}
      height={size || 32}
      fill={color || "#FFF"}
      viewBox="0 0 256 256"
    >
      <path d="M236,144a68.07,68.07,0,0,1-68,68H80a12,12,0,0,1,0-24h88a44,44,0,0,0,0-88H61l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,1,1,17,17L61,76H168A68.08,68.08,0,0,1,236,144Z"></path>
    </svg>
  );
};

export default BackArrowIcon;
