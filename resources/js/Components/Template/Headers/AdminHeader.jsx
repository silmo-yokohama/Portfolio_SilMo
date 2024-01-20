import React from "react";
import ThemeChanger from "../../Parts/ThemeChanger";

const AdminHeader = (props) => {
  const { isOpen, setIsOpen, pageTitle, auth, ...options } = props;

  return (
    <header className="t sticky top-0 z-30 flex w-full bg-neutral">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-md md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            className="z-50 block rounded-lg border border-base-200 bg-base-100 p-1 shadow-sm lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="relative block h-5 w-5 cursor-pointer">
              <span
                className={`relative left-0 top-0 my-1 block h-[3px] w-0 rounded-2xl bg-base-content delay-[50] duration-500 ease-in-out ${
                  !isOpen && "!w-full delay-300"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-[3px] w-0 rounded-2xl bg-base-content delay-[150] duration-500 ease-in-out ${
                  !isOpen && "delay-400 !w-full"
                }`}
              ></span>
              <span
                className={`relative left-0 top-0 my-1 block h-[3px] w-0 rounded-2xl bg-base-content delay-[250] duration-500 ease-in-out ${
                  !isOpen && "!w-full delay-500"
                }`}
              ></span>
            </span>
          </button>
        </div>

        <div>
          <h1>{pageTitle}</h1>
        </div>

        <div className="flex items-center gap-4">
          {auth.user && (
            <span className="hidden text-left lg:block">
              <span className="block text-sm font-medium">
                {auth.user.name} でログインしています
              </span>
              <span className="block text-xs font-medium">
                {auth.user.email}
              </span>
            </span>
          )}

          <ThemeChanger />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
