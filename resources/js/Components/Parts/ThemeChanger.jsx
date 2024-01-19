import React, { useEffect, useState } from "react";
import DarkThemeIcon from "@/SVG/DarkThemeIcon";
import LightThemeIcon from "@/SVG/LightThemeIcon";
import { Themes } from "@/Constants/Themes";

const ThemeChanger = ({ callback }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? light);

  const handlerToggle = (e) => {
    if (e.target.checked) {
      setTheme(Themes.dark);
      callback && callback(Themes.dark);
    } else {
      setTheme(Themes.light);
      callback && callback(Themes.light);
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate">
      {/* this hidden checkbox controls the state */}
      <input
        type="checkbox"
        className="invisible"
        checked={theme === Themes.dark}
        onChange={handlerToggle}
      />

      {/* sun icon */}
      <LightThemeIcon
        className="swap-off h-10 w-10 fill-secondary"
        viewBox="0 0 24 24"
      />

      {/* moon icon */}
      <DarkThemeIcon
        className="swap-on h-10 w-10 fill-primary"
        viewBox="0 0 24 24"
      />
    </label>
  );
};

export default ThemeChanger;
