import React from "react";

const AddIcon = ({ size, color, className }) => {
  return (
    <svg
      className={`fill-current ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      width={size || 32}
      height={size || 32}
      fill={color || "#000"}
      viewBox="0 0 256 256"
    >
      <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm52-84a12,12,0,0,1-12,12H140v28a12,12,0,0,1-24,0V140H88a12,12,0,0,1,0-24h28V88a12,12,0,0,1,24,0v28h28A12,12,0,0,1,180,128Z"></path>
    </svg>
  );
};

export default AddIcon;
