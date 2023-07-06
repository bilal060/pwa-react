import React from "react";
import DistanceIcon from "../../assets/Images/Distance";
import CountIcon from "../../assets/Images/Count";
import RatingIcon from "../../assets/Images/Rating";
import LocationIcon from "../../assets/Images/Location";
import HeartIcon from "../../assets/Images/Heart";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import FavouriteIcon from "../../assets/Images/FavouriteIcon";
import Axios from "../../axios/Axios";
import { MarkFavourite } from "../../Api";
import EmptyDataImage from '../../assets/Images/EmptyData'
import { PaginationControl } from "react-bootstrap-pagination-control";

const Seeds = () => {
  const [seeds, setSeeds] = useState([]);
  const routeParams = useParams();
  const [currentuserData, setcurrentuserData] = useState();

  const GetSeeds = async (GetSeedsUrl) => {
    try {
      const fetchData = await Axios.get(GetSeedsUrl);
      console.log(fetchData.data);
      setSeeds(fetchData.data);
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };

  const [page, setPage] = useState(1);

  const pageHandler = (page) => {
    setPage(page);
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    let GetSeedsUrl = `${process.env.REACT_APP_API_URI}users/${routeParams.radius
      ? `getDataByRadius?${routeParams.radius}&page=${page}&`
      : `getAllData/?page=${page}&`
      }category=seedStore&latlang=${data?.location?.coordinates[0]},${data?.location?.coordinates[1]
      }`;
    GetSeeds(GetSeedsUrl);
  };

  // useEffect(() => {
  //   GetSeeds();
  // }, []);
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    setcurrentuserData(data);
    let GetSeedsUrl = `${process.env.REACT_APP_API_URI}users/${routeParams.radius
      ? `getDataByRadius?${routeParams.radius}&page=1&`
      : `getAllData/?page=1&`
      }category=seedStore&latlang=${data?.location?.coordinates[0]},${data?.location?.coordinates[1]
      }`;
    GetSeeds(GetSeedsUrl);
  }, []);

  return (
    <div className="seeds-card-main row m-0">
      {seeds?.result?.length !== 0 ? (seeds || []).result?.map((data, index) => {
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
                    src={`${process.env.REACT_APP_PORT}/${data.photo[0]}`}
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
                      {data.strainName}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2">
                      <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                        <DistanceIcon />
                        {data.distance}
                      </span>
                      <span className="d-flex gap-2 align-items-center font-18 font-weight-500 ">
                        <CountIcon />
                        <span>{data.quantity} Seeds</span>
                      </span>
                    </div>

                    <span className="d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-2 ">
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
                        to={`/home/seedStore/${data._id}`}
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
      }) : <div className="d-flex justify-content-center w-100">
        <div className="w-50">
          <EmptyDataImage />
        </div>
      </div>}
      {seeds.totalRecords > 10 && <PaginationControl
        page={page}
        between={3}
        total={seeds.totalRecords}
        limit={seeds.limit}
        changePage={(page) => pageHandler(page)}
        ellipsis={1}
      />}
    </div>
  );
};

export default Seeds;
