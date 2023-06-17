import React, { useEffect, useState } from "react";
import DistanceIcon from "../../assets/Images/Distance";
import RatingIcon from "../../assets/Images/Rating";
import LocationIcon from "../../assets/Images/Location";
import SendMailIcon from "../../assets/Images/SendMail";
import TimerIcon from "../../assets/Images/Timer";
import PriceIcon from "../../assets/Images/Price";
import HeartIcon from "../../assets/Images/Heart";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "../../axios/Axios";
import { MarkFavourite } from "../../Api";

const Cannabis = () => {
  const [cannabis, setCannabis] = useState([]);

  const GetCannabis = async (GetCannabisUrl) => {
    try {
      const fetchData = await Axios.get(GetCannabisUrl);
      setCannabis(fetchData.data);
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    let GetCannabisUrl = `${process.env.REACT_APP_API_URI}users/test/?collection=cannabisLounge&latlang=${data?.location?.coordinates[0]},${data?.location?.coordinates[1]}`;
    GetCannabis(GetCannabisUrl);
  }, []);

  return (
    <div className="seeds-card-main row m-0">
      {(cannabis || []).result?.map((data, index) => {
        return (
          <div
            className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
            key={index}
          >
            <div className="seed-card position-relative text-black">
              <img
                className="w-100 intro-img"
                src={`${process.env.REACT_APP_PORT}/${data.photo}`}
                alt=""
              />
              <span
                className="like-post cr-p"
                onClick={() =>
                  MarkFavourite(data.userId._id, data._id, data.category)
                }
              >
                <HeartIcon />
              </span>
              <div className="ps-sm-0 ps-3">
                <p className="my-sm-4 mb-3 font-24 font-weight-700">
                  {data.brandName}
                </p>
                <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2">
                  <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                    <DistanceIcon />
                    {data.distance}
                  </span>
                  <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                    <PriceIcon />
                    <span>Fees: ${data.entryFee}</span>
                  </span>
                </div>
                {data.timing && (
                  <span className="d-flex gap-2 align-items-center font-18 font-weight-500  mb-sm-3 mb-2">
                    <TimerIcon />
                    {data.timing}
                  </span>
                )}
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
                      5.0
                      {/* {data.rating} */}
                    </span>
                    <span className="font-14-100 text-grey font-weight-400">
                      {/* {data.totalReviews} */}
                      (56 Reviews)
                    </span>
                  </div>
                  <Link
                    to={`/home/cannabisLounge/${data._id}`}
                    className="green-btn w-auto ps-3 pe-1 d-flex align-items-center font-18 py-sm-3 gap-3 text-white"
                  >
                    {" "}
                    <span>View Store</span>
                    <span className="send-message">
                      <SendMailIcon />
                    </span>
                  </Link>
                  {/* <Link to={'/chat'} className='text-white green-btn w-auto ps-3 pe-1 d-flex align-items-center font-18 py-sm-3 gap-3'> <span>Message</span> <span className='send-message'><SendMailIcon /></span></Link> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cannabis;
