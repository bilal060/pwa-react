import React from "react";
import productuser from "../../assets/Images/productuser-1.svg";
import LocationIcon from "../../assets/Images/Location";
import RatingIcon from "../../assets/Images/Rating";
import seed1 from "../../assets/Images/seed1.svg";
import seed2 from "../../assets/Images/seed2.svg";
import seed3 from "../../assets/Images/seed3.svg";
import seed4 from "../../assets/Images/seed4.svg";
import DispensryProductIcon from "../../assets/Images/Dispensry1";
import ConcreteIcon from "../../assets/Images/Concrete";
import FlavorIcon from "../../assets/Images/Flavor";
import QuantityIcon from "../../assets/Images/Quantity";
import { useState } from "react";
import { useParams } from "react-router-dom";
import StrainAvailableIcon from "../../assets/Images/StrainAvailable";
import SeedICon from "../../assets/Images/Seed";
import DispensaryIcon from "../../assets/Images/Dispensary";
import CannbisIcon from "../../assets/Images/Cannbis";
import HeadShopIcon from "../../assets/Images/HeadShop";
import { useEffect } from "react";
import Axios from "../../axios/Axios";
import { toast } from "react-toastify";
import Rating from "react-rating";
import ratingEmpty from "../../assets/Images/ratingEmpty.svg";
import ratingFull from "../../assets/Images/ratingFull.svg";

const seedData = [
  {
    id: 1,
    name: "Purple Haze, Indica",
    img: seed1,
    quantity: "Quantity: 1 Gram",
    thc: "THC: 24%",
    cbd: "CBD: 1%",
  },
  {
    id: 1,
    name: "Lemon Kush, Indica",
    img: seed2,
    quantity: "Quantity: 1 Gram",
    thc: "THC: 24%",
    cbd: "CBD: 1%",
  },
  {
    id: 1,
    name: "Purple Haze, Indica",
    img: seed3,
    quantity: "Quantity: 1 Gram",
    thc: "THC: 24%",
    cbd: "CBD: 1%",
  },
  {
    id: 1,
    name: "Lemon Kush, Indica",
    img: seed4,
    quantity: "Quantity: 1 Gram",
    thc: "THC: 24%",
    cbd: "CBD: 1%",
  },
  {
    id: 1,
    name: "Purple Haze, Indica",
    img: seed1,
    quantity: "Quantity: 1 Gram",
    thc: "THC: 24%",
    cbd: "CBD: 1%",
  },
  {
    id: 1,
    name: "Lemon Kush, Indica",
    img: seed2,
    quantity: "Quantity: 1 Gram",
    thc: "THC: 24%",
    cbd: "CBD: 1%",
  },
];

const filter = [
  {
    id: 1,
    query: "seedStore",
    ariaSelected: false,
    name: "Seed",
    icon: <SeedICon />,
  },
  {
    id: 2,
    query: "dispensary",
    ariaSelected: false,
    name: "Dispensary",
    icon: <DispensaryIcon />,
  },
  {
    id: 3,
    query: "cannabisLounge",
    ariaSelected: false,
    name: "Cannabis Lounge",
    icon: <CannbisIcon />,
  },
  {
    id: 4,
    query: "headShop",
    ariaSelected: false,
    name: "HeadShop",
    icon: <HeadShopIcon />,
  },
];

const ProductUserProfile = (props) => {
  const routeParams = useParams();
  const [userData, setUserData] = useState([]);
  const [category, setCategory] = useState("");
  const [ratingData, setRatingData] = useState({
    ProductUserId: "",
    LoginUserId: "",
    rating: 0,
  });
  const ratingHandler = (rating) => {
    setRatingData((prevState) => ({
      ...prevState,
      rating: rating,
    }));
  };

  const GetUserData = async (GetFavouriteUrl) => {
    try {
      const fetchData = await Axios.get(GetFavouriteUrl);
      setUserData(fetchData.data);
      console.log(fetchData.data);
    } catch (error) {
      toast.error(error?.response.data.message);
      console.log(error);
    }
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    const GetUserDataUrl = `${process.env.REACT_APP_API_URI}users/?userId=${data._id}&category=${category}`;
    GetUserData(GetUserDataUrl);
  }, []);

  return (
    <div className="product-user-profile">
      <div className="container mx-auto">
        <div className="row m-0">
          <div className="col-xl-3 pe-md-0 col-md-6 mb-md-0 pb-lg-0 mb-4 pb-3">
            <div className="seed-card flex-column">
              <div className="d-flex flex-lg-column justify-content-lg-center gap-4 justify-content-start align-items-lg-center mb-lg-5 mb-3">
                <img src={productuser} alt="" className="mb-md-4 " />
                <div className="d-flex flex-column gap-3 align-items-lg-center">
                  <p className="font-24 font-weight-600">Tony Stark</p>
                  <div className="d-flex gap-2 align-items-center flex-wrap">
                    <span className="d-flex gap-2 align-items-center font-18 font-weight-600">
                      <RatingIcon />
                      <span>5.0</span>
                    </span>
                    <span className="font-18-100 text-grey font-weight-400">
                      <span>(56 Reviews)</span>
                    </span>
                  </div>
                </div>
              </div>

              <div className="d-flex align-items-center mb-3 flex-wrap gap-3">
                <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                  <DispensryProductIcon />
                  <span>Super Sharer</span>
                </span>
                <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                  <StrainAvailableIcon />
                  <span>54 Strains</span>
                </span>
              </div>

              <span className="d-flex gap-2 align-items-center font-18 font-weight-500 pb-4">
                <LocationIcon />
                <span>789 Yonge St, Toronto, ON M4W 2G8, Canada</span>
              </span>
              <h3 className="fw-bolder fs-5 mb-3 d-flex align-items-center gap-2">
                Rate User
              </h3>
              <div className="d-flex align-items-center gap-2">
                <Rating
                  start={0}
                  stop={5}
                  step={1}
                  direction="ltr"
                  readonly={false}
                  initialRating={ratingData.rating}
                  emptySymbol={
                    <img src={ratingEmpty} alt="" className="me-2" />
                  }
                  fullSymbol={<img src={ratingFull} alt="" className="me-2" />}
                  onChange={ratingHandler}
                />
                <p className="fw-bold fs-6 m-0">{ratingData.rating}.0</p>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-md-6 ">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
              <h3 className="d-flex gap-2 align-items-center flex-wrap font-32 font-weight-600 ms-12 bordered-heading">
                Shared Strains
              </h3>
            </div>
            <ul
              className=" nav nav-pills ps-12 pe-12  gap-3 align-items-end m-0  flex-nowrap w-md-75 overflow-auto accessories mt-4"
              id="pills-tab"
              role="tablist"
            >
              {filter.map((data, index) => {
                return (
                  <li className="nav-item" key={index} role="presentation">
                    <button
                      className="nav-link product-item w-max-content"
                      id={`pills-${data.query}-tab`}
                      data-bs-toggle={`pill`}
                      data-bs-target={`#pills-${data.query}`}
                      type={`button`}
                      role={`tab`}
                      aria-controls={`pills-${data.query}`}
                      aria-selected={data.ariaSelected}
                      onClick={() => setCategory(data.query)}
                    >
                      {data.icon} {data.name}
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="seeds-card-main row m-0 pt-5">
              {seedData.map((data, index) => {
                return (
                  <div
                    className="col-xl-4 col-md-12  mb-4 seed-card-col"
                    key={index}
                  >
                    <div className="seed-card position-relative text-black">
                      <img className="w-100 intro-img" src={data.img} alt="" />
                      <div className="ps-sm-0 ps-3">
                        <p className="my-sm-4 mb-3 font-24 font-weight-600">
                          {data.name}
                        </p>
                        <span className="d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 mb-3">
                          <QuantityIcon />
                          {data.quantity}
                        </span>
                        <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2">
                          <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                            <ConcreteIcon />
                            {data.thc}
                          </span>
                          <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                            <FlavorIcon />
                            {data.cbd}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductUserProfile;
