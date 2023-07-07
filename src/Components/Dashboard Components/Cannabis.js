import React, { useEffect, useState } from "react";
import DistanceIcon from "../../assets/Images/Distance";
import RatingIcon from "../../assets/Images/Rating";
import LocationIcon from "../../assets/Images/Location";
import SendMailIcon from "../../assets/Images/SendMail";
import TimerIcon from "../../assets/Images/Timer";
import PriceIcon from "../../assets/Images/Price";
import HeartIcon from "../../assets/Images/Heart";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "../../axios/Axios";
import { MarkFavourite } from "../../Api";
import EmptyDataImage from "../../assets/Images/EmptyData";
import { PaginationControl } from "react-bootstrap-pagination-control";

const Cannabis = () => {
  const [cannabis, setCannabis] = useState([]);
  const routeParams = useParams();
  const [currentuserData, setcurrentuserData] = useState();

  const GetCannabis = async (GetCannabisUrl) => {
    try {
      const fetchData = await Axios.get(GetCannabisUrl);
      setCannabis(fetchData.data);
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
    let GetCannabisUrl = `${process.env.REACT_APP_API_URI}users/${
      routeParams.radius
        ? `getDataByRadius?${routeParams.radius}&page=${page}&`
        : `getAllData/?page=${page}&`
    }category=cannabisLounge&latlang=${data?.location?.coordinates[0]},${
      data?.location?.coordinates[1]
    }&${routeParams.radius}`;
    GetCannabis(GetCannabisUrl);
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    setcurrentuserData(data);
    let GetCannabisUrl = `${process.env.REACT_APP_API_URI}users/${
      routeParams.radius
        ? `getDataByRadius?${routeParams.radius}&page=1&`
        : `getAllData/?page=1&`
    }category=cannabisLounge&latlang=${data?.location?.coordinates[0]},${
      data?.location?.coordinates[1]
    }&${routeParams.radius}`;
    GetCannabis(GetCannabisUrl);
  }, []);

  return (
    <div className="seeds-card-main row m-0">
      {cannabis?.result?.length !== 0 ? (
        (cannabis || []).result?.map((data, index) => {
          return (
            <div
              className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
              key={index}
            >
              <div className="seed-card position-relative text-black">
                <div className="row m-0 flex-sm-column w-100">
                  <div className="col-4 col-sm-12 p-0">
                    <img
                      className="w-100 intro-img cards-image-style"
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
                        {data.brandName}
                      </p>
                      <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 gap-2">
                        <span className="d-flex gap-2 align-items-center font-18 font-weight-500 w-50">
                          <DistanceIcon />
                          <span className="cut-text">{data.distance}</span>
                        </span>
                        <span className="d-flex gap-2 align-items-center font-18 font-weight-500 w-50">
                          <PriceIcon />
                          <span className="cut-text">
                            Fees: ${data.entryFee}
                          </span>
                        </span>
                      </div>
                      {data.timing && (
                        <span className="d-flex gap-2 align-items-center font-18 font-weight-500  mb-sm-3 mb-2">
                          <TimerIcon />
                          <span className="cut-text">{data.timing}</span>
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
      {cannabis.totalRecords > 10 && (
        <PaginationControl
          page={page}
          between={3}
          total={cannabis.totalRecords}
          limit={cannabis.limit}
          changePage={(page) => pageHandler(page)}
          ellipsis={1}
        />
      )}
    </div>
  );
};

export default Cannabis;
