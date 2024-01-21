import React from "react";

const SubmitButton = ({ className, children, ...props }) => {
  return (
    <button
      className={`btn btn-wide border bg-primary text-white hover:border-primary hover:bg-base-200 hover:text-current ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default SubmitButton;
