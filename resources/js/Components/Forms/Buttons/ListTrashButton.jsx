import TrashIcon from "@/SVG/TrashIcon";
import React from "react";

const ListTrashButton = ({ onClick }) => {
  return (
    <button className="" onClick={(e) => onClick(e)}>
      <TrashIcon className="fill-error" size={16} />
    </button>
  );
};

export default ListTrashButton;
