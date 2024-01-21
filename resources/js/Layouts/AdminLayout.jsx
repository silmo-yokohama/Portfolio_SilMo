import AdminHeader from "@/Components/Template/Headers/AdminHeader";
import AdminSideBar from "@/Components/Template/Headers/AdminSideBar";
import { Head } from "@inertiajs/react";
import React, { useState } from "react";

const AdminLayout = (props) => {
  const { pageTitle, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="admin flex h-screen">
      <Head title={pageTitle} />
      <AdminSideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <AdminHeader
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          pageTitle={pageTitle}
          {...props}
        />

        <main className="relative">
          <div className="mx-auto max-w-screen-2xl pt-4 md:p-6 2xl:p-10">
            <div className="mx-auto mb-12 w-full px-4">
              <div className="bg-light-gold relative mb-6 flex w-full min-w-0 flex-col break-words rounded shadow">
                <div className="mb-0 rounded-t border-0 bg-base-200 px-0 py-3 md:px-4">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
