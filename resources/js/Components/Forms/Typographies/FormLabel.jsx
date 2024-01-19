import React from "react";

const FormLabel = (props) => {
  const { className, children, ...options } = props;

  return (
    <label className={`label label-text text-base ${className}`} {...options}>
      <span className="">{children}</span>
    </label>
  );
};

export default FormLabel;
