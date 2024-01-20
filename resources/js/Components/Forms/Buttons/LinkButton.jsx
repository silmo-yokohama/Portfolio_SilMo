import { Link } from "@inertiajs/react";
import React from "react";

const LinkButton = ({ className, children, href }) => {
  return (
    <Link
      href={href}
      className={`btn btn-square w-auto border border-current bg-transparent p-4 hover:border-accent  hover:bg-transparent ${className}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
