import React from "react";
import IconButton from "./IconButton";
import AddIcon from "@/SVG/AddIcon";

const CreateButton = ({ className, iconSize, onClick, children }) => {
  return (
    <IconButton
      onClick={onClick}
      className={`t border-none bg-info shadow-none hover:border-info hover:bg-success-content ${className}`}
    >
      <AddIcon
        size={iconSize || 20}
        className="fill-white group-hover:fill-white"
      />
      <span className="hidden text-sm text-white group-hover:text-white lg:inline">
        {children}
      </span>
    </IconButton>
  );
};

export default CreateButton;
