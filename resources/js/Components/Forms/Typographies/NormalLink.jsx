import { Link } from "@inertiajs/react";
import React from "react";

const NormalLink = (props) => {
  const { href, className, children, ...options } = props;
  return (
    <Link
      href={href}
      className={`link text-accent underline underline-offset-2 ${className}`}
    >
      {children}
    </Link>
  );
};

export default NormalLink;
