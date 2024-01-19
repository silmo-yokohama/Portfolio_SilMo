import React from "react";

const SiteLogo = (props) => {
  const { className, color, ...options } = props;
  const imagePath =
    color === "white"
      ? "/images/logo/logo-h-white.png"
      : "/images/logo/logo-h-black.png";

  return <img src={imagePath} alt="SilMo" className={className} {...props} />;
};

export default SiteLogo;
