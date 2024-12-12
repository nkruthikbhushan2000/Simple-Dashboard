import React, { useEffect } from "react";
import { Breadcrumb, Input } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import { PiSidebar } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import "./TopBar.css";
import { toggleMenuBar, toggleNotiBar } from "../../redux/Actions";
import { connect } from "react-redux";

const IconSize = 22;

const TopBar = (props) => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const location = useLocation();
  const { toggleNotiiBar, toggleMenu } = props;

  useEffect(() => {
    document.body.classList.toggle("dark-theme-full-app", isDarkTheme);
  }, [isDarkTheme]);

  const pageArr = location.pathname
    .split("/")
    .filter((item) => (!item || item.startsWith(":") ? undefined : item));

  return (
    <div className="top-bar">
      <div className="right-top-bar">
        <PiSidebar size={IconSize} className="top-bar-icon" onClick={toggleMenu}/>
        <FaRegStar size={IconSize} className="top-bar-icon" />
        <Breadcrumb
          className="top-bar-breadcrumb"
          items={pageArr.map((item, index, arr) => {
            if (index !== pageArr.length - 1) {
              return {
                title: (
                  <NavLink to={arr.slice(0, index - 1).join("/")}>
                    {item}
                  </NavLink>
                ),
              };
            }
            return { title: item };
          })}
        />
      </div>
      <div className="left-top-bar">
        <div>
          <Input placeholder="Search" variant="filled" />
        </div>
        <CiLight
          onClick={toggleTheme}
          size={IconSize}
          className="top-bar-icon"
        />
        <FaBell size={IconSize} className="top-bar-icon" />
        <PiSidebar size={IconSize} className="top-bar-icon" onClick={toggleNotiiBar}/>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleMenu: () => dispatch(toggleMenuBar()),
  toggleNotiiBar: () => dispatch(toggleNotiBar())
})

export default connect(null,mapDispatchToProps)(TopBar);
