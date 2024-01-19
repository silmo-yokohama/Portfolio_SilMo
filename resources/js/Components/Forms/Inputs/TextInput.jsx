import React from "react";

const TextInput = (props) => {
  const { className, ...options } = props;

  return (
    <input
      type="text"
      className={`t input input-bordered w-full ${className}`}
      {...options}
    />
  );
};

export default TextInput;
