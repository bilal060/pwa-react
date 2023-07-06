import React, { useState } from "react";
import AppHeader from "../Header";
import AppFooter from "../Footer";
import MobUserIcon from "../../assets/Images/MobUser";
import MobSearchIcon from "../../assets/Images/MobSearch";
import MobDispensaryIcon from "../../assets/Images/MobDispensary";
import MobHeartIcon from "../../assets/Images/MobHeart";
import MobHomeIcon from "../../assets/Images/MobHome";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MobSettingsIcon from "../../assets/Images/MobSettings";
import DashboardLogo from "../../assets/Images/DashboardLogo";
import CrossIcon from "../../assets/Images/Cross";
import User from "../../assets/Images/sidelink-user.svg";
import SideLinkSettings from "../../assets/Images/sideLinkSettings";
import selectafter from "../../assets/Images/select-after.svg";
import MobMapIcon from "../../assets/Images/mobMap";
import Hooks from "../../hooks";

const sideLinks = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Seed Store",
    link: "/home/seed",
  },
  // {
  //   name: "Buds",
  //   link: "/home/buds",
  // },
  {
    name: "Dispensary",
    link: "/home/dispensary",
  },
  {
    name: "Cannabis Lounge",
    link: "/home/cannabis",
  },
  {
    name: "Head Store",
    link: "/home/headshop",
  },
  {
    name: "About us",
    link: "aboutus",
  },
];

const AppLayout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { children } = props;
  const Location = useLocation();
  const mobFooter = [""];
  const head = [
    "/home",
    "/aboutus",
    "/home/seed",
    "/home/buds",
    "/home/dispensaries",
    "/home/cannabis",
    "/home/headshops",
    "/home/seed/map",
    "/home/buds/map",
    "/home/dispensaries/map",
    "/home/cannabis/map",
    "/home/headshops/map",
  ];
  const { Logout } = Hooks();

  return (
    <div className="app-layout">
      {isOpen && (
        <div className={`app-menu d-flex d-lg-none`}>
          <div>
            <div className="section-1">
              <div className="d-flex justify-content-end align-items-center">
                <span onClick={() => setIsOpen(!isOpen)} className="cr-p mb-4">
                  <CrossIcon />
                </span>
              </div>
              <div className="d-flex align-items-center gap-2  mb-4 pb-3">
                <DashboardLogo />
                <div>
                  <h3 className="font-18 font-weight-700">GROW AND SHARE</h3>
                  <p className="font-10">Diversity Your Supply</p>
                </div>
              </div>
              <div className="search-product mb-4">
                <input
                  placeholder="Search Product"
                  className="border-0 outline-0 bg-transparent"
                />
                <span className="icon-green-bg">
                  <MobSearchIcon />
                </span>
              </div>
            </div>
            <div className="d-flex flex-column  side-links-main">
              {sideLinks.map((data, index) => {
                return (
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    key={index}
                    to={data.link}
                    className={`${
                      data.link === Location.pathname ? "side-link-active" : ""
                    }  side-link`}
                  >
                    {data.icon} {data.name}
                  </Link>
                );
              })}
              <p className="side-link border-0 cr-p" onClick={() => Logout()}>
                Login/Logout
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 pt-4 section-2">
            <div className="dropdown">
              <div
                className="d-flex align-items-center gap-2"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={User} alt="" className="side-link-user-img" />
                <div>
                  <h3 className="font-18 font-weight-700">Tony Stark</h3>
                  <p className="font-10">Retailer</p>
                </div>
                <img src={selectafter} alt="" />
              </div>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <Link
                  to={"/favourite"}
                  className={`${
                    "/favourite" === Location.pathname
                      ? "product-item-active "
                      : ""
                  } dropdown-item`}
                >
                  Favourites
                </Link>
                <Link
                  to={"/myaccount "}
                  className={`${
                    "/myaccount " === Location.pathname
                      ? "product-item-active "
                      : ""
                  } dropdown-item`}
                >
                  My Account
                </Link>
                <div
                  onClick={() => Logout()}
                  to={"/login"}
                  className={` dropdown-item`}
                >
                  Logout
                </div>
              </ul>
            </div>

            <SideLinkSettings />
          </div>
        </div>
      )}

      <AppHeader setIsOpen={setIsOpen} isOpen={isOpen} />
      <div
        className={`content-footer ${
          head.includes(Location.pathname) ? "mob-app-content-footer" : ""
        } ${
          mobFooter.includes(Location.pathname) ? "small-header-mob-footer" : ""
        }`}
      >
        {children}
        <div className="d-sm-block d-none">
          <AppFooter />
        </div>
      </div>
      {head.includes(Location.pathname) ? (
        <div className="mobile-view-footer d-sm-none b-block">
          {!Location.pathname.includes("map") ? (
            <Link to={`${Location.pathname}/map`} className={`center-location`}>
              <MobMapIcon />
            </Link>
          ) : (
            <Link className={`center-location`}>
              <MobMapIcon />
            </Link>
          )}
          <div className="container mx-auto h-100">
            <div className="d-flex align-items-center justify-content-between gap-5 h-100 px-xs-4 mx-2">
              <div className="d-flex align-items-center justify-content-between h-100 section-1">
                <Link
                  to={"/home"}
                  className={`${
                    Location.pathname.includes("/home")
                      ? "mob-footer-link-active"
                      : ""
                  } mob-footer-link`}
                >
                  <MobHomeIcon />
                </Link>
                <Link
                  to={"/favourite"}
                  className={`${
                    Location.pathname.includes("/favourite")
                      ? "mob-footer-link-active"
                      : ""
                  } mob-footer-link`}
                >
                  <MobHeartIcon />
                </Link>
                <Link
                  to={"/search"}
                  className={`${
                    Location.pathname.includes("/search")
                      ? "mob-footer-link-active"
                      : ""
                  } mob-footer-link`}
                >
                  <MobSearchIcon />
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-between h-100 section-2">
                <Link
                  to={"/home/dispensaries"}
                  className={`${
                    Location.pathname.includes("/dispensaries")
                      ? "mob-footer-link-active"
                      : ""
                  } mob-footer-link`}
                >
                  <MobDispensaryIcon />
                </Link>
                <Link
                  // to={"/myaccount"}
                  className={`${
                    Location.pathname.includes("/myaccount")
                      ? "mob-footer-link-active"
                      : ""
                  } mob-footer-link`}
                >
                  <MobSettingsIcon />
                </Link>
                <Link
                  to={"/myaccount"}
                  className={`${
                    Location.pathname.includes("/myaccount")
                      ? "mob-footer-link-active"
                      : ""
                  } mob-footer-link`}
                >
                  <MobUserIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AppLayout;
