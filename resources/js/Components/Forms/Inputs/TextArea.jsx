import React from "react";

const TextArea = (props) => {
  const { className, ...options } = props;
  return (
    <textarea
      className={`textarea textarea-bordered w-full  ${className}`}
      {...options}
    ></textarea>
  );
};

export default TextArea;
