import GuestHeader from "@/Components/Template/GuestHeader";
import React from "react";

const GuestLayout = (props) => {
  const { pageTitle, children } = props;

  return (
    <div className="min-h-screen">
      <GuestHeader />

      {children}
    </div>
  );
};

export default GuestLayout;
