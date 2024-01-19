import { Link } from "@inertiajs/react";
import React from "react";

const AdminMenuItem = (props) => {
  const { href, className, children, ...options } = props;
  return (
    <li>
      <Link
        href={href}
        className={`group relative flex items-center gap-2 rounded-sm px-4 py-2 font-medium text-gray-100 duration-300 ease-in-out hover:bg-gray-800 ${className}`}
        {...props}
      >
        {children}
      </Link>
    </li>
  );
};

export default AdminMenuItem;
