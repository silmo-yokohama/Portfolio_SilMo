import React, { useState } from "react";
import SiteLogo from "../Parts/SiteLogo";
import ThemeChanger from "../Parts/ThemeChanger";
import { Themes } from "@/Constants/Themes";

const GuestHeader = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    (localStorage.getItem("theme") ?? Themes.light) === Themes.dark,
  );

  const themeChangeCB = (current) => {
    setIsDarkTheme(current === Themes.dark);
  };

  return (
    <header className="fixed left-0 top-0 z-30 w-full bg-base-200">
      <div className="m-auto mx-6 flex items-center justify-between">
        <h1>
          <span className="sr-only">SilMo</span>
          {isDarkTheme ? (
            <SiteLogo color="white" className="w-36" />
          ) : (
            <SiteLogo className="w-36" />
          )}
        </h1>

        <div className="">
          <nav></nav>

          <ThemeChanger callback={themeChangeCB} />
        </div>
      </div>
    </header>
  );
};

export default GuestHeader;
