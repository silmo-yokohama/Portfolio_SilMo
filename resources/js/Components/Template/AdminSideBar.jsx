import DashboardIcon from "@/SVG/DashboardIcon";
import React, { useState } from "react";
import AdminMenuItem from "../Parts/AdminMenuItem";
import LeftArrowIcon from "@/SVG/LeftArrowIcon";
import { Link } from "@inertiajs/react";
import SiteLogo from "../Parts/SiteLogo";

const AdminSideBar = (props) => {
  const { isOpen, setIsOpen } = props;

  return (
    <aside
      className={`absolute left-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-primary  duration-300 ease-linear lg:static lg:translate-x-0 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5 lg:py-6">
        <Link>
          <SiteLogo color="white" />
        </Link>

        <button className="block lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <LeftArrowIcon />
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4  font-medium text-secondary">MENU</h3>

            <ul className="mb-6 flex flex-col gap-1">
              <AdminMenuItem href="">
                <DashboardIcon color="#FFF" size={18} />
                ダッシュボード
              </AdminMenuItem>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AdminSideBar;
