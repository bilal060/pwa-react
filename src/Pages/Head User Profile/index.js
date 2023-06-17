import React, { useEffect, useState } from "react";
import DistanceIcon from "../../assets/Images/Distance";
import LocationIcon from "../../assets/Images/Location";
import RatingIcon from "../../assets/Images/Rating";
import dispensary1 from "../../assets/Images/dispensary1.svg";
import dispensary2 from "../../assets/Images/dispensary2.svg";
import dispensary3 from "../../assets/Images/dispensary3.svg";
import dispensary4 from "../../assets/Images/dispensary4.svg";

import DispensryProductIcon from "../../assets/Images/Dispensry1";
import MobHeartIcon from "../../assets/Images/MobHeart";
import HeartIcon from "../../assets/Images/Heart";
import { Link, useNavigate, useParams } from "react-router-dom";
import ConcreteIcon from "../../assets/Images/Concrete";
import FlavorIcon from "../../assets/Images/Flavor";
import TimerIcon from "../../assets/Images/Timer";
import PhonebtnIcon from "../../assets/Images/Phonebtn";
import "react-image-gallery/styles/css/image-gallery.css";
import VaporizeIcon from "../../assets/Images/Vaporize";
import GrinderIcon from "../../assets/Images/Grinder";
import PapersIcon from "../../assets/Images/Papers";
import BongRigsIcon from "../../assets/Images/BongRigs";
import PriceIcon from "../../assets/Images/Price";
import { toast } from "react-toastify";
import Axios from "../../axios/Axios";
import { MarkFavourite } from "../../Api";

const seedData = [
  {
    id: 1,
    name: "Purple Haze, Indica",
    img: dispensary1,
    price: "Price: $153",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
  },
  {
    id: 1,
    name: "Lemon Kush, Indica",
    img: dispensary2,
    price: "Price: $153",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
  },
  {
    id: 1,
    name: "Purple Haze, Indica",
    img: dispensary3,
    price: "Price: $153",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
  },
  {
    id: 1,
    name: "Lemon Kush, Indica",
    img: dispensary4,
    price: "Price: $153",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
  },
];

const HeadProfileDetail = () => {
  const routeParams = useParams();

  const [headShop, setheadShop] = useState([]);
  const GetHeadShops = async (GetHeadShopsUrl) => {
    try {
      const fetchData = await Axios.get(GetHeadShopsUrl);
      console.log(fetchData.data.data);
      setheadShop(fetchData.data.data);
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    let GetHeadShopsUrl = `${process.env.REACT_APP_API_URI}headshop/${routeParams.id}?latlang=${data?.location?.coordinates[0]},${data?.location?.coordinates[1]}`;
    GetHeadShops(GetHeadShopsUrl);
  }, []);
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
              className="w-100"
              src={`${process.env.REACT_APP_PORT}/${headShop?.photo}`}
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
                      headShop.userId._id,
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
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link product-item w-max-content active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  <VaporizeIcon /> Vaporizers
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link product-item w-max-content"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  <GrinderIcon /> Grinders
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link product-item w-max-content"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  <PapersIcon /> Papers
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link product-item w-max-content"
                  id="pills-rig-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-rig"
                  type="button"
                  role="tab"
                  aria-controls="pills-rig"
                  aria-selected="false"
                >
                  <BongRigsIcon /> Bongs / Rigs
                </button>
              </li>
            </ul>
          </div>
          <div className="col-md-4 bg-transparent border-0">
            <label className="mb-2 font-weight-700 font-18-100">Type</label>
            <select className="auth-input height-56 bg-white">
              <option defaultValue>Select Type</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

        <div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="seeds-card-main row m-0 pt-5">
                {seedData.map((data, index) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
                      key={index}
                    >
                      <Link
                        to={"/home/seed/seedinfo"}
                        className="seed-card position-relative text-black"
                      >
                        <img
                          className="w-100 intro-img"
                          src={data.img}
                          alt=""
                        />
                        <span className="like-post">
                          <HeartIcon />
                        </span>
                        <div className="ps-sm-0 ps-3">
                          <p className="my-sm-4 mb-3 font-24 font-weight-700">
                            {data.name}
                          </p>
                          <span className="d-flex gap-2 align-items-center font-18 font-weight-500 pb-sm-1 mb-3">
                            <PriceIcon />
                            {data.price}
                          </span>
                          <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-3">
                            <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                              <ConcreteIcon />
                              {data.concrete}
                            </span>
                            <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                              <FlavorIcon />
                              {data.flavor}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="seeds-card-main row m-0 pt-5">
                {seedData.map((data, index) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
                      key={index}
                    >
                      <Link
                        to={"/home/seed/seedinfo"}
                        className="seed-card position-relative text-black"
                      >
                        <img
                          className="w-100 intro-img"
                          src={data.img}
                          alt=""
                        />
                        <span className="like-post">
                          <HeartIcon />
                        </span>
                        <div className="ps-sm-0 ps-3">
                          <p className="my-sm-4 mb-3 font-24 font-weight-700">
                            {data.name}
                          </p>
                          <span className="d-flex gap-2 align-items-center font-18 font-weight-500 pb-sm-1 mb-3">
                            <PriceIcon />
                            {data.price}
                          </span>
                          <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2">
                            <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                              <ConcreteIcon />
                              {data.concrete}
                            </span>
                            <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                              <FlavorIcon />
                              {data.flavor}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="seeds-card-main row m-0 pt-5">
                {seedData.map((data, index) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
                      key={index}
                    >
                      <Link
                        to={"/home/seed/seedinfo"}
                        className="seed-card position-relative text-black"
                      >
                        <img
                          className="w-100 intro-img"
                          src={data.img}
                          alt=""
                        />
                        <span className="like-post">
                          <HeartIcon />
                        </span>
                        <div className="ps-sm-0 ps-3">
                          <p className="my-sm-4 mb-3 font-24 font-weight-700">
                            {data.name}
                          </p>
                          <span className="d-flex gap-2 align-items-center font-18 font-weight-500 pb-sm-1 mb-3">
                            <PriceIcon />
                            {data.price}
                          </span>
                          <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2">
                            <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                              <ConcreteIcon />
                              {data.concrete}
                            </span>
                            <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                              <FlavorIcon />
                              {data.flavor}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-rig"
              role="tabpanel"
              aria-labelledby="pills-rig-tab"
            >
              <div className="seeds-card-main row m-0 pt-5">
                {seedData.map((data, index) => {
                  return (
                    <div
                      className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
                      key={index}
                    >
                      <Link
                        to={"/home/seed/seedinfo"}
                        className="seed-card position-relative text-black"
                      >
                        <img
                          className="w-100 intro-img"
                          src={data.img}
                          alt=""
                        />
                        <span className="like-post">
                          <HeartIcon />
                        </span>
                        <div className="ps-sm-0 ps-3">
                          <p className="my-sm-4 mb-3 font-24 font-weight-700">
                            {data.name}
                          </p>
                          <span className="d-flex gap-2 align-items-center font-18 font-weight-500 pb-sm-1 mb-3">
                            <PriceIcon />
                            {data.price}
                          </span>
                          <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2">
                            <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                              <ConcreteIcon />
                              {data.concrete}
                            </span>
                            <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                              <FlavorIcon />
                              {data.flavor}
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadProfileDetail;

const RightNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-right-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Next Slide"
    >
      <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.73023 0.29552C9.14137 -0.0985067 9.80795 -0.0985067 10.2191 0.29552L17.0833 6.874C18.305 8.04493 18.305 9.95507 17.0833 11.126L10.2191 17.7045C9.80795 18.0985 9.14137 18.0985 8.73023 17.7045C8.31909 17.3105 8.31909 16.6716 8.73023 16.2776L15.5944 9.69911C15.9939 9.31623 15.9939 8.68377 15.5944 8.30089L8.73023 1.72242C8.31909 1.32839 8.31909 0.689547 8.73023 0.29552Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.308354 0.29552C0.719492 -0.0985067 1.38608 -0.0985067 1.79722 0.29552L8.66138 6.874C9.88316 8.04493 9.88316 9.95507 8.66138 11.126L1.79722 17.7045C1.38608 18.0985 0.719492 18.0985 0.308354 17.7045C-0.102785 17.3105 -0.102785 16.6716 0.308354 16.2776L7.17252 9.69911C7.57202 9.31623 7.57202 8.68377 7.17252 8.30089L0.308354 1.72242C-0.102785 1.32839 -0.102785 0.689547 0.308354 0.29552Z"
          fill="white"
        />
      </svg>
    </button>
  );
});

const LeftNav = React.memo(({ disabled, onClick }) => {
  return (
    <button
      type="button"
      className="image-gallery-icon image-gallery-left-nav"
      disabled={disabled}
      onClick={onClick}
      aria-label="Previous Slide"
    >
      <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.26977 0.29552C8.85863 -0.0985067 8.19205 -0.0985067 7.78091 0.29552L0.916746 6.874C-0.305037 8.04493 -0.305037 9.95507 0.916746 11.126L7.78091 17.7045C8.19205 18.0985 8.85863 18.0985 9.26977 17.7045C9.68091 17.3105 9.68091 16.6716 9.26977 16.2776L2.40561 9.69911C2.0061 9.31623 2.0061 8.68377 2.40561 8.30089L9.26977 1.72242C9.68091 1.32839 9.68091 0.689547 9.26977 0.29552Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.6916 0.29552C17.2805 -0.0985067 16.6139 -0.0985067 16.2028 0.29552L9.33862 6.874C8.11684 8.04493 8.11684 9.95507 9.33862 11.126L16.2028 17.7045C16.6139 18.0985 17.2805 18.0985 17.6916 17.7045C18.1028 17.3105 18.1028 16.6716 17.6916 16.2776L10.8275 9.69911C10.428 9.31623 10.428 8.68377 10.8275 8.30089L17.6916 1.72242C18.1028 1.32839 18.1028 0.689547 17.6916 0.29552Z"
          fill="white"
        />
      </svg>
    </button>
  );
});
