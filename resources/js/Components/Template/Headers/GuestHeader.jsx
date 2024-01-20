import React from "react";
import SiteLogo from "../../Parts/SiteLogo";
import ThemeChanger from "../../Parts/ThemeChanger";

const GuestHeader = () => {
  return (
    <header className="fixed left-0 top-0 z-30 w-full px-10 py-3 ">
      <div className="m-auto flex items-center justify-between">
        <h1>
          <span className="sr-only">SilMo</span>
          <SiteLogo className="w-36" />
        </h1>

        <div className="">
          <nav></nav>

          <ThemeChanger />
        </div>
      </div>
    </header>
  );
};

export default GuestHeader;
