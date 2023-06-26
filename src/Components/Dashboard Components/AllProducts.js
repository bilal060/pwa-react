import React, { useEffect, useState } from "react";
import DistanceIcon from "../../assets/Images/Distance";
import LocationIcon from "../../assets/Images/Location";
import RatingIcon from "../../assets/Images/Rating";
import CountIcon from "../../assets/Images/Count";
import TimerIcon from "../../assets/Images/Timer";
import HeartIcon from "../../assets/Images/Heart";
import PriceIcon from "../../assets/Images/Price";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import FavouriteIcon from "../../assets/Images/FavouriteIcon";
import Axios from "../../axios/Axios";
import { MarkFavourite } from "../../Api";

const ShowAllProducts = ({ match }) => {
  const [data, setData] = useState([]);
  const routeParams = useParams();
  const GetAllProduct = async (GetAllProductUrl) => {
    try {
      const fetchData = await Axios.get(GetAllProductUrl);
      // console.log(fetchData.data);
      setData(fetchData.data);
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    let GetAllProductUrl = `${process.env.REACT_APP_API_URI}users/${
      routeParams.radius
        ? `getDataByRadius?${routeParams.radius}&`
        : `getAllData/?`
    }latlang=${data?.location?.coordinates[0]},${
      data?.location?.coordinates[1]
    }`;
    GetAllProduct(GetAllProductUrl);
  }, []);

  return (
    <div className="seeds-card-main row m-0">
      {(data || []).result?.map((data, index) => {
        return (
          <div
            className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col h-100"
            key={index}
          >
            <div className="seed-card h-100 position-relative">
              <div className="row m-0 flex-sm-column w-100">
                <div className="col-4 col-sm-12 p-0">
                  <img
                    className="w-100 intro-img"
                    src={`${process.env.REACT_APP_PORT}/${
                      Array.isArray(data.photo) ? data.photo[0] : data.photo
                    }`}
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
                </div>
                <div className="col-8 col-sm-12 p-0">
                  <div className="ps-sm-0 ps-3">
                    <p className="my-sm-4 mb-3 font-24 font-weight-700">
                      {data.name}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-sm-3 gap-2">
                      <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                        <DistanceIcon />
                        {data.distance} Away
                      </span>
                      <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                        {data.quantity ? (
                          <CountIcon />
                        ) : (
                          <>{data.cost ? <PriceIcon /> : <PriceIcon />}</>
                        )}

                        {data.quantity ? (
                          `Seeds: ${data.quantity}`
                        ) : (
                          <>
                            {data.cost
                              ? `Fees: $${data.cost}`
                              : `Entry Fee: $${data.entryFee}`}
                          </>
                        )}
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
                          {data.userId.ratingsAverage}
                        </span>
                        <span className="font-14-100 text-grey font-weight-400">
                          ({data.userId.ratingsQuantity} Reviews)
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowAllProducts;
