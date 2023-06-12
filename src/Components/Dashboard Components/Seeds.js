import React from "react";
import DistanceIcon from "../../assets/Images/Distance";
import CountIcon from "../../assets/Images/Count";
import RatingIcon from "../../assets/Images/Rating";
import LocationIcon from "../../assets/Images/Location";
import SendMailIcon from "../../assets/Images/SendMail";
import seed1 from "../../assets/Images/seed1.svg";
import seed2 from "../../assets/Images/seed2.svg";
import seed3 from "../../assets/Images/seed3.svg";
import seed4 from "../../assets/Images/seed4.svg";
import HeartIcon from "../../assets/Images/Heart";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import FavouriteIcon from "../../assets/Images/FavouriteIcon";

// const seedData = [
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: seed1,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "20 Seeds",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: seed2,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "20 Seeds",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: seed3,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "20 Seeds",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: seed4,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "20 Seeds",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: seed1,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "20 Seeds",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: seed2,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "20 Seeds",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: seed3,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "20 Seeds",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: seed4,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "20 Seeds",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
// ];

const GetSeedsUrl = `${process.env.REACT_APP_API_URI}seedStore`;
const Seeds = () => {
  const [seeds, setSeeds] = useState([]);
  const GetSeeds = async () => {
    try {
      const fetchData = await axios.get(GetSeedsUrl);
      console.log(fetchData.data.data);
      setSeeds(fetchData.data.data);
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };
  useEffect(() => {
    GetSeeds();
  }, []);
  return (
    <div className="seeds-card-main row m-0">
      {seeds.map((data, index) => {
        return (
          <div
            className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
            key={index}
          >
            <div className="seed-card position-relative text-black">
              <img
                className="w-100 intro-img"
                src={`http://localhost:4000/${data.photo}`}
                alt=""
              />
              <span className="like-post">
                <HeartIcon />
              </span>
              <div className="ps-sm-0 ps-3">
                <p className="my-sm-4 mb-3 font-24 font-weight-700">
                  {data.strainName}
                </p>
                <div className="d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2">
                  <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                    <DistanceIcon />
                    {data.postStrain}
                  </span>
                  <span className="d-flex gap-2 align-items-center font-18 font-weight-500 ">
                    <CountIcon />
                    {data.quantity}
                  </span>
                </div>

                <span className="d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-2 ">
                  <LocationIcon />
                  <span className="cut-text">
                    {" "}
                    {data.userId?.address?.addressname}
                  </span>
                </span>
                <div className="d-flex justify-content-between align-items-center gap-sm-2 gap-3 flex-sm-nowrap flex-wrap">
                  <div className="d-flex gap-2 align-items-center flex-wrap">
                    <span className="d-flex gap-2 align-items-center font-24 font-weight-700">
                      <RatingIcon />
                      {/* {data.rating} */}
                      5.0
                    </span>
                    <span className="font-14-100 text-grey font-weight-400">
                      {/* {data.totalReviews} */}
                      (56 Reviews)
                    </span>
                  </div>
                  <Link
                    to={`/home/seed/${data._id}`}
                    className="green-btn-outline bg-primary-green text-white ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2 w-max-content"
                  >
                    {" "}
                    <span>View Profile </span>{" "}
                    <span className="icon-green-bg bg-light-green">
                      <FavouriteIcon />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Seeds;
