import BackArrowIcon from "@/SVG/BackArrowIcon";
import { Link } from "@inertiajs/react";
import React from "react";
import LinkButton from "../../Forms/Buttons/LinkButton";

const AdminSectionHeader = (props) => {
  const { title, children, backToRoute } = props;

  return (
    <div className="mb-5 flex flex-wrap items-center border-b border-current pb-5">
      {backToRoute && (
        <div className="px-3 md:px-0">
          <LinkButton
            href={backToRoute}
            className="group flex flex-col items-center justify-center px-3"
          >
            <BackArrowIcon size={20} className="t group-hover:fill-accent" />
            <span className="t mx-2 hidden text-sm group-hover:text-accent lg:inline">
              戻る
            </span>
          </LinkButton>
        </div>
      )}

      <div className="relative w-full max-w-full flex-1 px-4">
        {title && (
          <h3 className="text-blueGray-700 text-sm font-semibold">{title}</h3>
        )}
      </div>

      {children && (
        <div className="relative flex items-center justify-end gap-2 px-2 lg:px-4">
          {children}
        </div>
      )}
    </div>
  );
};

export default AdminSectionHeader;
