import { Link } from "@inertiajs/react";
import React from "react";

const AdminPagination = (props) => {
  const { links } = props;

  console.log(links);

  return (
    <div className="flex items-center justify-center">
      {links && links.length > 3 && (
        <div className="join">
          {links.map((link, index) => {
            return link.url === null ? (
              <div key={index} className="btn btn-disabled join-item btn-sm">
                {link.label}
              </div>
            ) : (
              <Link
                key={index}
                href={link.url}
                disabled={link.active}
                className={`btn join-item btn-sm ${link.active && "btn-active"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AdminPagination;
