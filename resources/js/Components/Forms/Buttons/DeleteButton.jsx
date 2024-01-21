import TrashIcon from "@/SVG/TrashIcon";
import React from "react";
import IconButton from "./IconButton";

const DeleteButton = ({ className, iconSize, onClick, children }) => {
  return (
    <IconButton
      onClick={onClick}
      className={`border-error bg-transparent hover:bg-error ${className}`}
    >
      <TrashIcon
        size={iconSize || 20}
        className="fill-error group-hover:fill-white"
      />
      <span className="hidden text-sm text-error group-hover:text-white lg:inline">
        {children}
      </span>
    </IconButton>
  );
};

export default DeleteButton;
