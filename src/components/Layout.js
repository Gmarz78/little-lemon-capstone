import React from "react";
import "../styles/layout.css";

const Layout = ({ children }) => {
    return <div className="flex-container">{children}</div>;
};

export default Layout;
