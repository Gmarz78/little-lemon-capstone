import React from "react";
import "../styles/layout.css";

const Layout = ({ children }) => {
    return <div className="grid-container">{children}</div>;
};

export default Layout;
