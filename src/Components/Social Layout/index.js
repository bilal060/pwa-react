import React from "react";
import SocialFooter from "../Social App/Footer";
import DashboardLogo from "../../assets/Images/DashboardLogo";
import { Link } from "react-router-dom";
import MenuBarIcon from "../../assets/Images/MenuBar";

const SocialLayout = (props) => {
  const { children } = props;
  return (
    <div className="d-flex flex-column justify-content-between h-100 ">
      <div
        className={`app-header d-sm-none flex-column justify-content-center `}
      >
        <div className="container px-4 mx-auto d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <DashboardLogo />
            <h3 className="app-heading">GROW AND SHARE</h3>
          </div>

          <Link to={"/home"} className="d-sm-none d-block text-black">
            Home
          </Link>

          <span className="cr-p d-lg-none d-block">
            <MenuBarIcon />
          </span>
        </div>
      </div>
      <div className="social-home-content">{children}</div>
      <SocialFooter />
    </div>
  );
};

export default SocialLayout;
