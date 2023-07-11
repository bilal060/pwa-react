import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import DistanceIcon from "../../assets/Images/Distance";
import LocationIcon from "../../assets/Images/Location";
import RatingIcon from "../../assets/Images/Rating";
import FavouriteIcon from "../../assets/Images/FavouriteIcon";

import GoogleMapNew from "./GoogleMap/GoogleMapNew";
import { toast } from "react-toastify";
import Axios from "../../axios/Axios";
import EmptyDataImage from "../../assets/Images/EmptyData";
import { PaginationControl } from "react-bootstrap-pagination-control";
import SearchButtonIcon from "../../assets/Images/Search";
import ScopeIcon from "../../assets/Images/Scope";
import SeedICon from "../../assets/Images/Seed";
import DispensaryIcon from "../../assets/Images/Dispensary";
import CannbisIcon from "../../assets/Images/Cannbis";
import HeadShopIcon from "../../assets/Images/HeadShop";
import MobSearchIcon from "../../assets/Images/MobSearch";

const seedsDetail = [
  {
    id: 1,
    name: "Raza Awan",
    active: false,
  },
  {
    id: 2,
    name: "Raza Awan",
    active: true,
  },
  {
    id: 3,
    name: "Raza Awan",
    active: false,
  },
];

const AllProductMapView = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [allProduct, setAllProduct] = useState([]);
  const [categoryFilter, setcategoryFilter] = useState([]);
  const [userType, setUserType] = useState("Retailer");

  const [options, setOptions] = useState([
    {
      id: 1,
      value: "seedStore",
      label: "Seed",
      icon: <SeedICon />,
    },
    {
      id: 2,
      value: "dispensary",
      label: "Dispensary",
      icon: <DispensaryIcon />,
    },
    {
      id: 3,
      value: "cannabisLounge",
      label: "Cannabis Lounge",
      icon: <CannbisIcon />,
    },
    {
      id: 4,
      value: "headShop",
      label: "HeadShop",
      icon: <HeadShopIcon />,
    },
  ]);
  const GetAllProduct = async (GetAllProductUrl) => {
    try {
      const fetchData = await Axios.get(GetAllProductUrl);
      setAllProduct(fetchData.data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const [page, setPage] = useState(1);

  const pageHandler = (page) => {
    setPage(page);
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    let GetAllProductUrl = `${
      process.env.REACT_APP_API_URI
    }users/getAllData/?page=${page}&userType=retailer&latlang=${
      data?.location?.coordinates[0]
    },${data?.location?.coordinates[1]}&category=${categoryFilter.join(",")}`;
    GetAllProduct(GetAllProductUrl);
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    let GetAllProductUrl = `${
      process.env.REACT_APP_API_URI
    }users/getAllData/?page=1&userType=retailer&latlang=${
      data?.location?.coordinates[0]
    },${data?.location?.coordinates[1]}&category=${categoryFilter.join(",")}`;
    GetAllProduct(GetAllProductUrl);
  }, [categoryFilter]);

  function handleCheckboxChange(event) {
    const { value, checked } = event.target;
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.value === value ? { ...option, checked } : option
      )
    );
    if (categoryFilter?.includes(value)) {
      setcategoryFilter((prevStrings) =>
        prevStrings.filter((string) => string !== value)
      );
    } else {
      setcategoryFilter((prevArray) => [...prevArray, value]);
    }

    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    let GetAllProductUrl = `${
      process.env.REACT_APP_API_URI
    }users/getAllData/?page=${page}&userType=retailer&latlang=${
      data?.location?.coordinates[0]
    },${data?.location?.coordinates[1]}&category=${categoryFilter.join(",")}`;
    GetAllProduct(GetAllProductUrl);
  }

  return (
    <div className="all-product-section ">
      <div className="allproduct-mob d-block">
        <div className="container mx-auto">
          <div className="d-flex flex-sm-row flex-column-reverse align-items-sm-center justify-content-between gap-4 ps-12 pe-12">
            <div className="d-flex align-items-center gap-4 justify-content-between w-100">
              <h2 className="allproduct-heading ms-12 me-12">All Products</h2>
              <div className="form-control w-max-content h-auto p-0 bg-transparent border-0">
                <select
                  className="green-btn-outline text-primary-green outline-0 w-max-content px-3"
                  required
                  name="userType"
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option defaultValue={"Retailer"}>Retailer</option>
                  <option value={"Consumer"}>Consumer</option>
                </select>
              </div>
            </div>
            <div className="d-flex  align-items-center gap-4">
              <div className="search-product d-sm-none d-flex">
                <input
                  placeholder="Search Product"
                  type="text"
                  className="border-0 outline-0 bg-transparent"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                />
                <span className="icon-green-bg d-md-none d-flex">
                  <MobSearchIcon />
                </span>
                <span className="icon-green-bg d-md-flex d-none">
                  <SearchButtonIcon />
                </span>
              </div>
              <div className="d-none align-items-center gap-4">
                {!Location.pathname?.includes("map") ? (
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
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <SearchButtonIcon />
            </div>
            <div className="d-flex gap-3 overflow-x-auto all-products-link">
              {options.map((option) => (
                <label
                  key={option.value}
                  className={`product-item cr-p ${
                    option.checked ? "active" : ""
                  }`}
                >
                  <input
                    className="d-none"
                    type="checkbox"
                    value={option.value}
                    checked={option.checked}
                    onChange={handleCheckboxChange}
                  />
                  {option.icon} {option.label}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        {allProduct?.result?.length !== 0 ? (
          <div className="row flex-md-row flex-column-reverse seed-card p-0 flex-row ms-12 me-12">
            <div className="col-md-6 p-0 bg-transparent ">
              <div
                className="nav flex-column nav-pills map-card-col nav-card-map"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {(allProduct || []).result?.map((data, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        data.active ? "active" : ""
                      } nav-link w-100 map-link bg-white rounded-0 w-100 justify-content-start h-auto product-border`}
                      id={`v-pills-${data.id}-tab`}
                      data-toggle="pill"
                      href={`#v-pills-${data.id}`}
                      role="tab"
                      aria-controls={`v-pills-${data.id}`}
                      aria-selected="true"
                    >
                      <div className="flex-column">
                        <div className="position-relative text-black d-flex flex-lg-row flex-md-column justify-content-between gap-sm-4 ga-2">
                          <div>
                            <img
                              className="w-100 intro-img"
                              src={`${process.env.REACT_APP_PORT}/${
                                Array.isArray(data.photo)
                                  ? data.photo[0]
                                  : data.photo
                              }`}
                              alt=""
                            />
                          </div>
                          <div className="ps-sm-0 ps-3 w-100 d-flex flex-column justify-content-between">
                            <div>
                              <p className="mb-3 font-24 font-weight-700">
                                {data.name}
                              </p>
                              <div className="d-flex gap-2 align-items-sm-center flex-sm-row flex-column mb-sm-3 mb-2">
                                <span className="d-flex gap-2 align-items-center font-18  font-weight-500 ">
                                  <svg
                                    width={13}
                                    height={18}
                                    viewBox="0 0 13 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      opacity="0.4"
                                      d="M6.50284 0C4.08381 0 2.11719 1.91701 2.11719 4.27503C2.11719 6.58804 3.97301 8.46005 6.39205 8.54105C6.46591 8.53205 6.53977 8.53205 6.59517 8.54105C6.61364 8.54105 6.62287 8.54105 6.64133 8.54105C6.65057 8.54105 6.65057 8.54105 6.6598 8.54105C9.02344 8.46005 10.8793 6.58804 10.8885 4.27503C10.8885 1.91701 8.92187 0 6.50284 0Z"
                                      fill="#5D8B2F"
                                    />
                                    <path
                                      d="M11.1903 10.9352C8.61435 9.26119 4.41335 9.26119 1.81889 10.9352C0.646307 11.7002 0 12.7352 0 13.8422C0 14.9492 0.646307 15.9752 1.80966 16.7312C3.10227 17.5772 4.80114 18.0002 6.5 18.0002C8.19886 18.0002 9.89773 17.5772 11.1903 16.7312C12.3537 15.9662 13 14.9402 13 13.8242C12.9908 12.7172 12.3537 11.6912 11.1903 10.9352Z"
                                      fill="#5D8B2F"
                                    />
                                  </svg>
                                  <span> {data.userId.fullName}</span>
                                </span>
                                <span className="d-flex gap-1 align-items-center font-18 font-weight-500">
                                  <DistanceIcon />
                                  {data.distance}
                                </span>
                                <span className="d-flex gap-1 align-items-center font-18 font-weight-500">
                                  <svg
                                    width={18}
                                    height={20}
                                    viewBox="0 0 18 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M12.603 0C9.62311 0 7.20508 2.35236 7.20508 5.25131C7.20508 8.15027 9.62311 10.5026 12.603 10.5026C15.5829 10.5026 18.0009 8.15027 18.0009 5.25131C18.0009 2.35236 15.5829 0 12.603 0Z"
                                      fill="#5D8B2F"
                                    />
                                    <path
                                      opacity="0.6"
                                      d="M3.34108 11.0098C1.50498 11.0098 0 12.4641 0 14.2601C0 16.0561 1.49495 17.5105 3.34108 17.5105C5.17717 17.5105 6.68218 16.0561 6.68218 14.2601C6.68218 12.4641 5.17717 11.0098 3.34108 11.0098Z"
                                      fill="#5D8B2F"
                                    />
                                    <path
                                      opacity="0.4"
                                      d="M13.6358 14.5146C12.0806 14.5146 10.8164 15.7445 10.8164 17.2574C10.8164 18.7704 12.0806 20.0002 13.6358 20.0002C15.1909 20.0002 16.4551 18.7704 16.4551 17.2574C16.4551 15.7445 15.1909 14.5146 13.6358 14.5146Z"
                                      fill="#5D8B2F"
                                    />
                                  </svg>
                                  {data.count}
                                </span>
                              </div>
                              <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                                <LocationIcon />
                                <span>{data.userId.location.address}</span>
                              </span>
                            </div>

                            <div className="d-xl-flex d-none flex-xl-row flex-column justify-content-between align-items-end gap-xl-3 gap-2 mt-3 ">
                              <div className="d-flex gap-2 align-items-center flex-wrap">
                                <span className="d-flex gap-2 align-items-center font-18 font-weight-700">
                                  <RatingIcon />
                                  <span>{data.userId.ratingsAverage}</span>
                                </span>
                                <span className="font-14-100 text-grey font-weight-400">
                                  <span>
                                    ({data.userId.ratingsQuantity} Reviews)
                                  </span>
                                </span>
                              </div>
                              <Link
                                to={`/home/${data.category}/${data._id}`}
                                className="green-btn-outline bg-primary-green text-white ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2 w-max-content"
                              >
                                <span>View Profile </span>
                                <span className="icon-green-bg bg-light-green">
                                  <FavouriteIcon />
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="d-xl-none d-flex flex-row justify-content-between align-items-end gap-xl-3 gap-2 mt-3 flex-wrap">
                          <div className="d-flex gap-2 align-items-center">
                            <span className="d-flex gap-2 align-items-center font-18 font-weight-700">
                              <RatingIcon />
                              <span className="text-black">
                                {data?.userId?.ratingsAverage}
                              </span>
                            </span>
                            <span className="font-14-100 text-grey font-weight-400">
                              <span>
                                ({data?.userId?.ratingsQuantity} Reviews)
                              </span>
                            </span>
                          </div>
                          <Link
                            to={`/home/${data.category}/${data._id}`}
                            className="green-btn-outline bg-primary-green text-white ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2 w-max-content"
                          >
                            <span>View Profile </span>
                            <span className="icon-green-bg bg-light-green">
                              <FavouriteIcon />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {allProduct.totalRecords > 10 && (
                  <div className="my-3">
                    <PaginationControl
                      page={page}
                      between={3}
                      total={allProduct.totalRecords}
                      limit={allProduct.limit}
                      changePage={(page) => pageHandler(page)}
                      ellipsis={1}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-6 p-0 mb-md-0 mb-4 ">
              {seedsDetail.map((chatsdetail, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      chatsdetail.active ? "active show" : ""
                    } tab-pane h-100 w-100 fade  chat-detail`}
                    id={`v-pills-${chatsdetail.id}`}
                    role="tabpanel"
                    aria-labelledby={`v-pills-${chatsdetail.id}-tab`}
                  >
                    <div
                      style={{ height: "100vh", width: "100%" }}
                      className="custom-map position-relative"
                    >
                      <div className="d-flex justify-content-end w-100 poeple-sharing-seed">
                        <button className="green-btn-outline bg-white z-index-1 text-black d-flex align-items-center justify-content-between font-18 py-sm-3 gap-2 w-max-content">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.4"
                              d="M7.0254 0C4.41078 0 2.28516 2.13 2.28516 4.75C2.28516 7.32 4.29103 9.4 6.90564 9.49C6.98548 9.48 7.06531 9.48 7.12519 9.49C7.14515 9.49 7.15513 9.49 7.17509 9.49C7.18507 9.49 7.18507 9.49 7.19505 9.49C9.74979 9.4 11.7557 7.32 11.7656 4.75C11.7656 2.13 9.64001 0 7.0254 0Z"
                              fill="#5D8B2F"
                            />
                            <path
                              d="M12.0951 12.1499C9.31083 10.2899 4.77018 10.2899 1.96595 12.1499C0.698562 12.9999 0 14.1499 0 15.3799C0 16.6099 0.698562 17.7499 1.95597 18.5899C3.3531 19.5299 5.18932 19.9999 7.02553 19.9999C8.86175 19.9999 10.698 19.5299 12.0951 18.5899C13.3525 17.7399 14.0511 16.5999 14.0511 15.3599C14.0411 14.1299 13.3525 12.9899 12.0951 12.1499Z"
                              fill="#5D8B2F"
                            />
                            <path
                              opacity="0.4"
                              d="M17.9929 5.3401C18.1526 7.2801 16.7754 8.9801 14.8694 9.2101C14.8594 9.2101 14.8594 9.2101 14.8494 9.2101H14.8195C14.7596 9.2101 14.6997 9.2101 14.6498 9.2301C13.6818 9.2801 12.7936 8.9701 12.125 8.4001C13.1529 7.4801 13.7417 6.1001 13.6219 4.6001C13.5521 3.7901 13.2726 3.0501 12.8535 2.4201C13.2327 2.2301 13.6718 2.1101 14.1209 2.0701C16.0769 1.9001 17.8233 3.3601 17.9929 5.3401Z"
                              fill="#5D8B2F"
                            />
                            <path
                              d="M19.9894 14.5904C19.9096 15.5604 19.2909 16.4004 18.253 16.9704C17.2551 17.5204 15.9976 17.7804 14.7502 17.7504C15.4687 17.1004 15.8879 16.2904 15.9677 15.4304C16.0675 14.1904 15.4787 13.0004 14.3011 12.0504C13.6325 11.5204 12.8541 11.1004 12.0059 10.7904C14.2113 10.1504 16.9856 10.5804 18.6921 11.9604C19.6102 12.7004 20.0792 13.6304 19.9894 14.5904Z"
                              fill="#5D8B2F"
                            />
                          </svg>
                          {allProduct.length} People Sharing Seeds
                        </button>
                      </div>
                      <GoogleMapNew markersData={allProduct.result} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-center w-100">
            <EmptyDataImage />
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProductMapView;
