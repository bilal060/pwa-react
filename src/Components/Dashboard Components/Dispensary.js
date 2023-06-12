import React from "react";
import DistanceIcon from "../../assets/Images/Distance";
import RatingIcon from "../../assets/Images/Rating";
import LocationIcon from "../../assets/Images/Location";
import SendMailIcon from "../../assets/Images/SendMail";
import DispensryProductIcon from "../../assets/Images/Dispensry1";
import dispensary1 from "../../assets/Images/dispensary1.svg";
import dispensary2 from "../../assets/Images/dispensary2.svg";
import dispensary3 from "../../assets/Images/dispensary3.svg";
import dispensary4 from "../../assets/Images/dispensary4.svg";
import HeartIcon from "../../assets/Images/Heart";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

// const dispensaryData = [
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: dispensary1,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "Super Store",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: dispensary2,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "Super Store",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: dispensary3,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "Super Store",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: dispensary4,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "Super Store",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: dispensary1,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "Super Store",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: dispensary2,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "Super Store",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: dispensary3,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "Super Store",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
//   {
//     id: 1,
//     name: "Toronto, Ontario     ",
//     img: dispensary4,
//     distance: "3 km Away",
//     location: "Indica, White Rhino",
//     count: "Super Store",
//     rating: "5.0",
//     totalReviews: "(56 Reviews)",
//   },
// ];

const GetDispensaryUrl = `${process.env.REACT_APP_API_URI}dispensary`;
const Dispensary = () => {
  const [dispensary, setDispensary] = useState([]);

  const GetDispensary = async () => {
    try {
      const fetchData = await axios.get(GetDispensaryUrl);
      console.log(fetchData.data.data);
      setDispensary(fetchData.data.data);
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };
  useEffect(() => {
    GetDispensary();
  }, []);

  return (
    <div className="seeds-card-main row m-0">
      {dispensary.map((data, index) => {
        return (
          <div
            className="col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col"
            key={index}
          >
            <div className="seed-card position-relative ">
              <img
                className="w-100 intro-img rounded-3"
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
                  <span className="d-flex gap-2 align-items-center font-18 font-weight-500">
                    <DispensryProductIcon />
                    {data.postStrain}
                  </span>
                </div>

                <span className="d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-2">
                  <LocationIcon />
                  <span className="cut-text">
                    {data.userId?.address?.addressname}
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
                    to={`/home/dispensary/${data._id}`}
                    className="green-btn w-auto ps-3 pe-1 d-flex align-items-center font-18 py-sm-3 gap-3 text-white"
                  >
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

export default Dispensary;
