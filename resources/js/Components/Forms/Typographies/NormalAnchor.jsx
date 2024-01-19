import React from "react";

const NormalAnchor = (props) => {
  const { href, className, children, ...options } = props;
  return (
    <a href={href} className={` ${className}`}>
      {children}
    </a>
  );
};

export default NormalAnchor;
