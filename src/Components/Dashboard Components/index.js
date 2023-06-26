import React, { useState } from "react";
import ScopeIcon from "../../assets/Images/Scope";
import { Link, useLocation, useParams } from "react-router-dom";
import SeedICon from "../../assets/Images/Seed";
import BudsIcon from "../../assets/Images/Buds";
import CannbisIcon from "../../assets/Images/Cannbis";
import HeadShopIcon from "../../assets/Images/HeadShop";
import DispensaryIcon from "../../assets/Images/Dispensary";
import SearchButtonIcon from "../../assets/Images/Search";
import CrossBorderIcon from "../../assets/Images/CrossBorder";
import ProgressSteps from "../Filter Components/ProgressBar";
import WeightFilter from "../Filter Components/WeightFilter";

const products = [
  {
    name: "Seeds",
    icon: <SeedICon />,
    link: "/home/seed",
  },
  {
    name: "Buds",
    icon: <BudsIcon />,
    link: "/home/buds",
  },
  {
    name: "Dispensary",
    icon: <DispensaryIcon />,
    link: "/home/dispensary",
  },
  {
    name: "Cannabis Lounge",
    icon: <CannbisIcon />,
    link: "/home/cannabis",
  },
  {
    name: "Head Shop",
    icon: <HeadShopIcon />,
    link: "/home/headshop",
  },
];

const AllProducts = (props) => {
  const params = useParams();
  const { children } = props;
  const Location = useLocation();
  const [filter, setFilter] = useState({
    radius: 0,
    area: "",
    quantity: "",
  });
  const formHandler = (e) => {
    const { name, value } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const hasRadius = "radius" in params;
    console.log(hasRadius);
    if (hasRadius) {
      let url = window.location.href;
      let modifiedUrl = url.split("radius=")[0];
      window.location.href = `${modifiedUrl}${params.radius ? "" : ""}radius=${
        filter.radius
      }`;
    } else {
      window.location.href = `${window.location.href}/${
        params.radius ? "" : ""
      }radius=${filter.radius}`;
    }

    // window.location.href = `${window.location.href}/${
    //   params.radius ? "" : ""
    //   }radius=${filter.radius}`;
  };
  return (
    <div className="all-product-section ">
      <div className="allproduct-mob d-sm-block d-none">
        <div className="container mx-auto">
          <div className="d-flex flex-sm-row flex-column-reverse align-items-sm-center justify-content-between gap-4 ps-12 pe-12">
            <h2 className="allproduct-heading ms-12 me-12">All Products</h2>
            <div className="d-flex  align-items-center gap-4">
              <div className="search-product d-sm-none d-flex">
                <input
                  placeholder="Search Product"
                  className="border-0 outline-0 bg-transparent"
                />
                <SearchButtonIcon />
              </div>
              <div className="d-flex align-items-center gap-4">
                {!Location.pathname.includes("map") ? (
                  <Link
                    to={`${Location.pathname}/map`}
                    className="text-white view-map-btn d-sm-flex d-none align-items-center gap-3"
                  >
                    View Map
                    <span className="view-map-btn-scope d-flex align-items-center justify-content-center ">
                      <ScopeIcon />
                    </span>
                  </Link>
                ) : (
                  <Link className="text-white view-map-btn d-sm-flex d-none align-items-center gap-3">
                    View Map
                    <span className="view-map-btn-scope d-flex align-items-center justify-content-center ">
                      <ScopeIcon />
                    </span>
                  </Link>
                )}

                <button
                  className="border-0 outline-0 bg-transparent p-0"
                  data-bs-toggle="modal"
                  data-bs-target="#deactivatemodal"
                >
                  <svg
                    width={56}
                    height={56}
                    viewBox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width={55}
                      height={55}
                      rx="15.5"
                      fill="#5D8B2F"
                      fillOpacity="0.2"
                      stroke="#5D8B2F"
                    />
                    <path
                      d="M41.9999 15.2328V18.7889C41.9999 20.0821 41.186 21.6985 40.372 22.5067L33.3721 28.649C32.3954 29.4572 31.7442 31.0736 31.7442 32.3668V39.3173C31.7442 40.2872 31.0931 41.5803 30.2791 42.0652L28.0001 43.52C25.8838 44.8131 22.9536 43.3584 22.9536 40.7721V32.2051C22.9536 31.0736 22.3025 29.6189 21.6513 28.8107L20.0234 27.1134L29.4977 12H38.7442C40.5348 12 41.9999 13.4548 41.9999 15.2328Z"
                      fill="#5D8B2F"
                    />
                    <path
                      opacity="0.4"
                      d="M26.8603 12L18.4279 25.4324L15.4651 22.345C14.6512 21.5368 14 20.0821 14 19.1122V15.3945C14 13.4548 15.4651 12 17.2558 12H26.8603Z"
                      fill="#5D8B2F"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="mt-sm-5 mt-4 mb-5 pb-3 gap-4 d-flex align-items-start justify-content-between ps-12 pe-12">
            <div className="search-product d-sm-flex d-none">
              <input
                placeholder="Search Product"
                className="border-0 outline-0 bg-transparent"
              />
              <SearchButtonIcon />
            </div>
            <div className="d-flex gap-3 overflow-x-auto all-products-link">
              {products.map((data, index) => {
                return (
                  <Link
                    key={index}
                    to={data.link}
                    className={`${
                      data.link === Location.pathname ||
                      Location.pathname.includes(`${data.link}/map`)
                        ? "product-item-active"
                        : ""
                    }  product-item`}
                  >
                    {data.icon} {data.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto ">{children}</div>
      <div
        className="modal fade"
        id="deactivatemodal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog custom-model w-max-content modal-dialog-centered mx-auto filter-model">
          <div className="modal-content justify-content-center p-4">
            <div className="d-flex justify-content-end">
              <span className="cr-p" data-bs-dismiss="modal">
                <CrossBorderIcon />
              </span>
            </div>
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="d-flex flex-column align-items-start justify-content-center mb-5 mt-4 pt-2">
                <p className="font-32 font-weight-800 text-center mb-4">
                  Filter your search
                </p>

                <div className="p-0 bg-transparent border-0 mb-4">
                  <label className="mb-2 font-weight-600 font-18-100">
                    Search an area
                  </label>
                  <input
                    className="auth-input bg-white auth-input height-42"
                    placeholder="Enter here..."
                    name="area"
                    onChange={(e) => formHandler(e)}
                  />
                </div>
                <span className="my-2"></span>

                {/* <ProgressSteps /> */}
                <div className="d-flex flex-column align-items-start justify-content-center w-100 gap-2">
                  <label className="font-weight-600 font-18-100">
                    Distance
                  </label>

                  <input
                    type="range"
                    className="form-control-range w-100"
                    min="0"
                    max="50"
                    step="10"
                    name="radius"
                    value={filter.radius}
                    onChange={(e) => formHandler(e)}
                  ></input>
                  <p className="rangetext d-flex w-100 justify-content-between ">
                    <span>All</span>
                    <span></span>
                    <span>0-10km</span>
                    <span>0-20km</span>
                    <span>0-30km</span>
                    <span>0-40km</span>
                    <span>0-50km</span>
                  </p>
                </div>
                <span className="my-3"></span>
                <WeightFilter />
              </div>
              <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center w-100 mt-4">
                <button
                  className="green-btn-outline text-primary-green custom-w min-width-208 height-42"
                  data-bs-dismiss="modal"
                  type="button"
                >
                  Cancel
                </button>
                <button
                  className="green-btn custom-w min-width-208 height-42"
                  type="submit"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
