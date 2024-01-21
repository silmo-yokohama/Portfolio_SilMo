import React from "react";

const FileInput = (props) => {
  const { className, ...options } = props;

  return (
    <input
      type="file"
      className={`t file-input file-input-bordered w-full ${className}`}
      {...options}
    />
  );
};

export default FileInput;
