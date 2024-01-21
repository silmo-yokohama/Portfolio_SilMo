import BackArrowIcon from "@/SVG/BackArrowIcon";
import { Link, router } from "@inertiajs/react";
import React from "react";
import LinkButton from "../../Forms/Buttons/LinkButton";
import BackButton from "@/Components/Forms/Buttons/BackButton";

const AdminSectionHeader = (props) => {
  const { title, children, backToRoute } = props;

  return (
    <div className="mb-5 flex flex-wrap items-center border-b border-current pb-5">
      {backToRoute && (
        <div className="px-3 md:px-0">
          <BackButton onClick={() => router.get(backToRoute)}>戻る</BackButton>
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
