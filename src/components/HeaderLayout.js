import React from "react";
import "../styles/headerLayout.css";

const HeaderLayout = ({ children }) => {
    return <div className="header-container">{children}</div>;
};

export default HeaderLayout;
