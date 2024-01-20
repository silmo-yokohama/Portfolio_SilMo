import { Themes } from "@/Constants/Themes";
import React from "react";
import { useSelector } from "react-redux";

const SiteLogo = (props) => {
  const { className, color, ...options } = props;
  const currentTheme = useSelector((state) => state.theme.active);
  const imagePath =
    currentTheme === Themes.dark || color === "white"
      ? "/images/logo/logo-h-white.png"
      : "/images/logo/logo-h-black.png";

  return <img src={imagePath} alt="SilMo" className={className} {...props} />;
};

export default SiteLogo;
