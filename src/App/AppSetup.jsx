import React, { useEffect } from "react";
import "./AppSetup.css";
import SideBar from "../components/sideBarMenu/SideBar";
import TopBar from "../components/topBar/TopBar";
import RightBar from "../components/rightBar/RightBar";
import { pathToIncludeRightBar } from "../config";
import { useNavigate, useLocation } from "react-router-dom";
import { toggleNotiBar } from "../redux/Actions";
import { connect } from "react-redux";

const AppSetup = ({ isMenuOpen, toggleNotiBar, isNotiBarOpen, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the current path requires the right bar
    //With browser Router hash is not needed but with hashrouter we have to replace the hash with empty string
    if (!pathToIncludeRightBar.includes(location.pathname)) {
      //toggleNotiBar(false);
    }
  }, [navigate]);

  return (
    <div className={`app-setup ${!isMenuOpen ? "with-menubar" : ""} ${!isNotiBarOpen ? "with-rightbar" : ""}`}>
      <div className={`app-sidebar ${!isMenuOpen ? "no-dispaly-conatiner": ""}`}>
        <SideBar />
      </div>
      <div className="app-maincontent">
        <div className="app-topbar">
          <TopBar />
        </div>
        {children}
      </div>
        <div className={`app-notify-right ${isNotiBarOpen ? "no-dispaly-conatiner": ""}`}>
          <RightBar />
        </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isMenuOpen: state.MenuBar.isOpen,
  isNotiBarOpen: state.NotiSidebar.isOpen
})

const mapDispatchToProps = (dispatch) => ({
  toggleNotiBar: (isOpen) => dispatch(toggleNotiBar(isOpen))
})

export default connect(mapStateToProps, mapDispatchToProps)(AppSetup);

/**
 * Usehistory vs useNavigate - useHistory is deprecated
 */
