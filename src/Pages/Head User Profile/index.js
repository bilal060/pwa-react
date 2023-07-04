import React, { useEffect, useState } from "react";
import DistanceIcon from "../../assets/Images/Distance";
import LocationIcon from "../../assets/Images/Location";
import RatingIcon from "../../assets/Images/Rating";
import DispensryProductIcon from "../../assets/Images/Dispensry1";
import MobHeartIcon from "../../assets/Images/MobHeart";
import HeartIcon from "../../assets/Images/Heart";
import { Link, useNavigate, useParams } from "react-router-dom";
import ConcreteIcon from "../../assets/Images/Concrete";
import FlavorIcon from "../../assets/Images/Flavor";
import TimerIcon from "../../assets/Images/Timer";
import PhonebtnIcon from "../../assets/Images/Phonebtn";
import VaporizeIcon from "../../assets/Images/Vaporize";
import GrinderIcon from "../../assets/Images/Grinder";
import PapersIcon from "../../assets/Images/Papers";
import BongRigsIcon from "../../assets/Images/BongRigs";
import PriceIcon from "../../assets/Images/Price";
import { toast } from "react-toastify";
import Axios from "../../axios/Axios";
import { MarkFavourite } from "../../Api";
import EmptyDataImage from "../../assets/Images/EmptyData";

const filter = [
  {
    id: 1,
    query: "Vaporizers",
    ariaSelected: false,
    url: "Vaporizers",
    name: "Vaporizers",
    icon: <VaporizeIcon />,
  },
  {
    id: 2,
    query: "Bongs/Rigs",
    ariaSelected: false,
    url: "BongsRigs",
    name: "Bongs/Rigs",
    icon: <BongRigsIcon />,
  },
  {
    id: 3,
    query: "Grinders",
    ariaSelected: false,
    url: "Grinders",
    name: "Grinders",
    icon: <GrinderIcon />,
  },
  {
    id: 4,
    query: "Papers/Blunts",
    ariaSelected: false,
    url: "PapersBlunts",
    name: "Papers/Blunts",
    icon: <PapersIcon />,
  },
];
const HeadProfileDetail = () => {
  const routeParams = useParams();
  const [headShop, setheadShop] = useState([]);
  const [headShopFilter, setHeadShopFilter] = useState({
    accessories: "",
    type: "",
  });
  const [currentuserData, setcurrentuserData] = useState();

  const [others, setOthers] = useState([]);

  const formHandler = (e) => {
    const { name, value } = e.target;
    setHeadShopFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const GetHeadShops = async (GetHeadShopsUrl) => {
    try {
      const fetchData = await Axios.get(GetHeadShopsUrl);
      setheadShop(fetchData.data.data);
      let GetOthersUrl = `${process.env.REACT_APP_API_URI}headShop/userheadShop?userId=${fetchData.data.data.userId?._id}&accessories=${headShopFilter.accessories}&type=${headShopFilter.type}`;
      GetOthersByUser(GetOthersUrl);
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };
  const GetOthersByUser = async (GetOthersUrl) => {
    try {
      const fetchData = await Axios.get(GetOthersUrl);
      setOthers(fetchData.data.data);
      if (fetchData.data.data.result === 0) {
        toast.error("No Record Found");
      }
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    setcurrentuserData(data);
    let GetHeadShopsUrl = `${process.env.REACT_APP_API_URI}headshop/${routeParams.id}?latlang=${data?.location?.coordinates[0]},${data?.location?.coordinates[1]}`;
    GetHeadShops(GetHeadShopsUrl);
  }, [routeParams.id]);
  const navigate = useNavigate();

  return (
    <div className="product-user-profile">
      <div className="container mx-auto">
        <div className="d-sm-flex d-none align-items-center gap-2 font-18-100 font-weight-500 mb-4 ps-12">
          <Link to={"/home"} className="text-primary-green cr-p">
            Home
          </Link>
          &gt;
          <span
            className="text-primary-green cr-p"
            onClick={() => navigate(-1)}
          >
            Head Shop
          </span>
          &gt;
          <span className="text-grey"> {headShop.productName}</span>
        </div>
        <div className="row m-0 seed-card flex-row">
          <div className="col-lg-5 ps-0">
            <img
              className="w-100 intro-img"
              src={`${process.env.REACT_APP_PORT}/${
                Array.isArray(headShop.photo)
                  ? headShop.photo[0]
                  : headShop.photo
              }`}
              alt=""
            />
          </div>
          <div className="col-lg-7 pe-0 ps-lg-3 ps-0 pt-lg-0 pt-5">
            <div className="ps-sm-0 ps-3">
              <div className="border-smx-bottom mb-4">
                <p className="mb-3 pb-3 font-32 font-weight-900">
                  {headShop.brandName}
                </p>
                <div className="d-flex gap-sm-5 gap-3 align-items-sm-center gap-2 mb-sm-4 mb-3 flex-sm-row flex-column">
                  <div>
                    <span className="d-flex gap-2 align-items-center font-18 mb-sm-4 mb-3 font-weight-500">
                      <DispensryProductIcon />
                      <span>{headShop.accessories}</span>
                    </span>
                    <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                      <DistanceIcon />
                      <span>{headShop.distance} Away</span>
                    </span>
                  </div>
                  <div>
                    <div className="d-flex gap-2 align-items-center flex-wrap mb-sm-4 mb-3">
                      <span className="d-flex gap-2 align-items-center font-24 font-weight-700">
                        <RatingIcon />
                        <span>5.0</span>
                      </span>
                      <span className="font-14-100 text-grey font-weight-400">
                        <span>(56 Reviews)</span>
                      </span>
                    </div>
                    <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                      <TimerIcon />
                      <span>Store Hours: 09:00 To 17:00 </span>
                    </span>
                  </div>
                </div>

                <span className="d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-3">
                  <LocationIcon />
                  <span>{headShop.userId?.location?.address}</span>
                </span>
              </div>
              <p className="font-24 font-weight-700">{headShop.brandName}</p>
              <p className="mt-3 font-18 font-weight-500">
                Super Stores are highly rated retailers committed to great
                customer services, and prices. They have received more than ten
                5 star ratings.
              </p>

              <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center gap-sm-4 gap-3 mt-md-5 mt-3 pt-4">
                <button
                  onClick={() =>
                    MarkFavourite(
                      currentuserData._id,
                      headShop._id,
                      headShop.category
                    )
                  }
                  className="green-btn-outline text-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2"
                >
                  <span>Mark Favourite</span>
                  <span className="icon-green-bg">
                    <MobHeartIcon />
                  </span>
                </button>
                <button className="green-btn-outline bg-primary-green ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2">
                  <span>Call Store </span>
                  <span className="icon-green-bg bg-light-green">
                    <PhonebtnIcon />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h3 className="font-32 font-weight-700 pt-3 mt-5 ms-12 allproduct-heading">
          Accessories
        </h3>

        <div className="row m-0 pt-4">
          <div className="col-md-8 mb-md-0 mb-4 pb-md-0 pb-2">
            <ul
              className=" nav nav-pills  gap-3 align-items-end m-0 h-100 flex-nowrap w-md-75 overflow-auto accessories"
              id="pills-tab"
              role="tablist"
            >
              {filter.map((data, index) => {
                return (
                  <li className="nav-item" key={index} role="presentation">
                    <button
                      className="nav-link product-item w-max-content"
                      id={`pills-${data.url}-tab`}
                      data-bs-toggle={`pill`}
                      data-bs-target={`#pills-${data.url}`}
                      type={`button`}
                      role={`tab`}
                      aria-controls={`pills-${data.url}`}
                      aria-selected={data.ariaSelected}
                      onClick={() => {
                        GetOthersByUser(
                          `${process.env.REACT_APP_API_URI}headShop/userheadShop?userId=${headShop.userId._id}&accessories=${data.query}&type=${headShopFilter.type}`
                        );
                        setHeadShopFilter((prevState) => ({
                          ...prevState,
                          accessories: data.query,
                        }));
                      }}
                    >
                      {data.icon} {data.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col-md-4 bg-transparent border-0">
            <label className="mb-2 font-weight-700 font-18-100">Type</label>
            <select
              className="auth-input height-56 bg-white"
              name="type"
              value={headShopFilter.type}
              onChange={(e) => {
                formHandler(e);
                GetOthersByUser(
                  `${process.env.REACT_APP_API_URI}headShop/userheadShop?userId=${headShop.userId._id}&accessories=${headShopFilter.accessories}&type=${e.target.value}`
                );
              }}
            >
              <option value={""}>- Select Type -</option>
              {headShopFilter.accessories === "Bongs/Rigs" && (
                <>
                  <option value="Glass">Bongs / Rigs</option>
                  <option value="Acrylic">Acrylic</option>
                  <option value="Under100$">Under 100$</option>
                  <option value="Over100$">Over 100$</option>
                </>
              )}

              {headShopFilter.accessories === "Grinders" && (
                <>
                  <option value="Glass">Glass</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Wood">Wood</option>
                </>
              )}

              {headShopFilter.accessories === "Papers/Blunts" && (
                <>
                  <option value="Papers">Papers</option>
                  <option value="Blunts">Blunts</option>
                  <option value="Flavored">Flavored</option>
                </>
              )}

              {headShopFilter.accessories === "Vaporizers" && (
                <>
                  <option value="Flower">Flower</option>
                  <option value="Concentrate">Concentrate</option>
                  <option value="Flower&Concentrate">
                    Flower & Concentrate
                  </option>
                </>
              )}
            </select>
          </div>
        </div>

        <div>
          <div className="seeds-card-main row m-0 pt-5">
            {others?.length === 0 ? (
              (others || [])?.map((data, index) => {
                return (
                  <div
                    className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
                    key={index}
                  >
                    <div className="seed-card position-relative text-black">
                      <div className="row m-0 flex-sm-column w-100">
                        <div className="col-4 col-sm-12 p-0">
                          <img
                            className="w-100 intro-img"
                            src={`${process.env.REACT_APP_PORT}/${data.photo}`}
                            alt=""
                          />
                          <span
                            className="like-post cr-p"
                            onClick={() =>
                              MarkFavourite(
                                currentuserData._id,
                                data._id,
                                data.category
                              )
                            }
                          >
                            <HeartIcon />
                          </span>
                        </div>
                        <div className="col-8 col-sm-12 p-0">
                          <div className="ps-sm-0 ps-3">
                            <p className="my-sm-4 mb-3 font-24 font-weight-700">
                              {data.productName}
                            </p>
                            <span className="d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-3 mb-2">
                              <PriceIcon />
                              <span>Price: ${data.cost}</span>
                            </span>
                            <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-sm-3 gap-2">
                              <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                                <ConcreteIcon />
                                {data.brandName}
                              </span>
                              <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                                <FlavorIcon />
                                {data.type}
                              </span>
                            </div>

                            <span className="d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-2">
                              <LocationIcon />
                              <span className="cut-text">
                                {data.userId?.location?.address}
                              </span>
                            </span>
                            <div className="d-flex justify-content-between align-items-center gap-sm-2 gap-3 flex-sm-nowrap flex-wrap">
                              <div className="d-flex gap-2 align-items-center flex-wrap">
                                <span className="d-flex gap-2 align-items-center font-24 font-weight-700">
                                  <RatingIcon />
                                  {data.userId.ratingsAverage}
                                </span>
                                <span className="font-14-100 text-grey font-weight-400">
                                  ({data.userId.ratingsQuantity} Reviews)
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="d-flex justify-content-center w-100">
                <div className="w-50">
                  <EmptyDataImage />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadProfileDetail;
