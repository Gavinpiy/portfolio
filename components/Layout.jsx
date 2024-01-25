import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <main
      className={` w-full h-full inline-block z-0 bg-gray-100 ${className}`}
    >
      {children}
    </main>
  );
};
export default Layout;
