import React from "react";
import DistanceIcon from "../../assets/Images/Distance";
import LocationIcon from "../../assets/Images/Location";
import RatingIcon from "../../assets/Images/Rating";
import DispensryProductIcon from "../../assets/Images/Dispensry1";
import MobHeartIcon from "../../assets/Images/MobHeart";
import TimerIcon from "../../assets/Images/Timer";
import PriceIcon from "../../assets/Images/Price";
import PhonebtnIcon from "../../assets/Images/Phonebtn";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import Axios from "../../axios/Axios";
import { MarkFavourite } from "../../Api";
import EmptyDataImage from "../../assets/Images/EmptyData";

const CannabisProfileDetail = () => {
  const routeParams = useParams();
  const [cannabis, setCannabis] = useState([]);
  const [others, setOthers] = useState([]);
  const [currentuserData, setcurrentuserData] = useState();

  const [filter, setFilter] = useState({
    event: "",
    foodOfferd: "",
    brandName: "",
  });
  const formHandler = (e) => {
    const { name, value } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const GetCannabiss = async (GetCannabissUrl) => {
    try {
      const fetchData = await Axios.get(GetCannabissUrl);
      setCannabis(fetchData.data.data);
      let GetOthersUrl = `${process.env.REACT_APP_API_URI}cannabisLounge/userCannabisLounge/?userId=${fetchData.data.data.userId?._id}`;
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
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    setcurrentuserData(data);
    let GetCannabissUrl = `${process.env.REACT_APP_API_URI}cannabisLounge/${routeParams.id}?latlang=${data?.location?.coordinates[0]},${data?.location?.coordinates[1]}`;
    GetCannabiss(GetCannabissUrl);
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
            Cannabis Lounge
          </span>
          &gt;
          <span className="text-grey">{cannabis.brandName}</span>
        </div>
        <div className="row m-0 seed-card flex-row">
          <div className="col-lg-5 ps-0">
            <img
              className="w-100"
              src={`${process.env.REACT_APP_PORT}/${cannabis?.photo}`}
              alt=""
            />
          </div>
          <div className="col-lg-7 pe-0 ps-lg-3 ps-0 pt-lg-0 pt-5">
            <div className="ps-sm-0 ps-3">
              <div className="border-smx-bottom mb-4">
                <p className="mb-3 pb-3 font-32 font-weight-900">
                  {cannabis.brandName}
                </p>
                <div className="d-flex gap-xxl-5 gap-lg-4 gap-sm-4 gap-3 align-items-sm-end gap-2 mb-sm-4 mb-3 flex-sm-row flex-column flex-wrap">
                  <div>
                    <span className="d-flex gap-2 align-items-center font-18 mb-sm-4 mb-3 font-weight-500">
                      <DispensryProductIcon />
                      <span>{cannabis.event}</span>
                    </span>
                    <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                      <DistanceIcon />
                      <span>{cannabis.distance}</span>
                    </span>
                  </div>
                  <div>
                    <div className="d-flex gap-2 align-items-center flex-wrap mb-sm-4 mb-3">
                      <span className="d-flex gap-2 align-items-center font-18 font-weight-700">
                        <RatingIcon />
                        <span>5.0</span>
                      </span>
                      <span className="font-14-100 text-grey font-weight-400">
                        <span>(56 Reviews)</span>
                      </span>
                    </div>
                    <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                      <PriceIcon />
                      <span>Entry Fees: ${cannabis.entryFee}</span>
                    </span>
                  </div>
                  <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                    <TimerIcon />
                    <span>Store Hours: 09:00 To 17:00 </span>
                  </span>
                </div>

                <span className="d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-3">
                  <LocationIcon />
                  <span>{cannabis.userId?.location?.address}</span>
                </span>
              </div>
              <p className="font-24 font-weight-700">
                {cannabis.ConnectToEventbrite}
              </p>
              <p className="mt-3 font-18 font-weight-500">
                {cannabis.ConnectToEventbrite}
              </p>

              <div className="d-md-flex d-none flex-sm-row flex-column justify-content-between align-items-center gap-4 mt-5 pt-4">
                <button
                  onClick={() =>
                    MarkFavourite(
                      currentuserData._id,
                      cannabis._id,
                      cannabis.category
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

        <h3 className="d-flex gap-2 align-items-center flex-wrap font-32 font-weight-700 pt-3 mt-5 ms-12 bordered-heading">
          What We Offer At:
          <span className="text-primary-green"> {cannabis.brandName}</span>
        </h3>

        <div className="row m-0 pt-4">
          <div className="col-lg-4 col-md-6  bg-transparent border-0 mb-3">
            <label className="mb-2 font-weight-700 font-18-100">
              Accessories For Use
            </label>
            <select
              className="auth-input height-56 bg-white"
              name="brandName"
              onChange={(e) => {
                formHandler(e);
                GetOthersByUser(
                  `${
                    process.env.REACT_APP_API_URI
                  }cannabisLoung/userCannabisLounge/?userId=${
                    cannabis.userId?._id
                  }&${`&brandName=${e.target.value}`}`
                );
              }}
            >
              <option value="">- Select Option -</option>
              <option value="Bongs">Bongs</option>
              <option value="Rig">Rig</option>
              <option value="Papers">Papers</option>
              <option value="Vaporizers">Vaporizers</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-6  bg-transparent border-0 mb-3">
            <label className="mb-2 font-weight-700 font-18-100">Events</label>
            <select
              className="auth-input height-56 bg-white"
              name="event"
              onChange={(e) => {
                formHandler(e);
                GetOthersByUser(
                  `${
                    process.env.REACT_APP_API_URI
                  }cannabisLoung/userCannabisLounge/?userId=${
                    cannabis.userId?._id
                  }&${`event=${e.target.value}`}${`&brandName=${filter.brandName}`}`
                );
              }}
            >
              <option value="">- Select Option -</option>
              <option value="Music/Band">Music / Band</option>
              <option value="ComedyShow">Comedy Show</option>
              <option value="SeshandPaint">Sesh and Paint</option>
              <option value="BBQ">BBQ</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="col-lg-4 col-md-6  bg-transparent border-0">
            <label className="mb-2 font-weight-700 font-18-100"> Food</label>
            <select
              className="auth-input height-56 bg-white"
              name="foodOfferd"
              onChange={(e) => {
                formHandler(e);
                GetOthersByUser(
                  `${
                    process.env.REACT_APP_API_URI
                  }cannabisLoung/userCannabisLounge/?userId=${
                    cannabis.userId?._id
                  }&${`foodOfferd=${e.target.value}`}${`&event=${filter.event}`}${`&brandName=${filter.brandName}`}`
                );
              }}
            >
              <option value="">- Select Option -</option>
              <option value="Shakes">Shakes</option>
              <option value="HotDogs/Burgers">HotDogs/Burgers</option>
              <option value="SoftDrinks">Soft Drinks</option>
              <option value="Nachos">Nachos</option>
              <option value="Edibles">Edibles</option>
            </select>
          </div>
        </div>

        <div className="seeds-card-main row m-0 pt-5">
          {others?.length !== 0 ? (
            (others || [])?.map((data, index) => {
              return (
                <div
                  className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
                  key={index}
                >
                  <Link
                    to={`/home/cannabisLounge/${data._id}`}
                    className="seed-card position-relative text-black"
                  >
                    <div className="row m-0 flex-sm-column w-100">
                      <div className="col-4 col-sm-12 p-0">
                        <img
                          className="w-100 intro-img cards-image-style"
                          src={`${process.env.REACT_APP_PORT}/${data.photo}`}
                          alt=""
                        />
                      </div>
                      <div className="col-8 col-sm-12 p-0">
                        <div className="ps-sm-0 ps-3">
                          <p className="my-sm-4 mb-3 font-24 font-weight-700">
                            {data.brandName}
                          </p>

                          {/* <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2">
                      <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                        <QuantityIcon />
                        {data.strainName}
                      </span>
                    </div> */}
                          <span className="d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-2 ">
                            <LocationIcon />
                            <span className="cut-text">
                              {data.userId?.location?.address}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
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
  );
};

export default CannabisProfileDetail;
