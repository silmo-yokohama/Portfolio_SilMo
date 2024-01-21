import React from "react";

const IconButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`t group btn btn-square h-auto min-h-0 w-auto rounded-full  border p-2 md:rounded-md md:p-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
