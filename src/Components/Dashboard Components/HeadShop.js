import React from "react";
import RatingIcon from "../../assets/Images/Rating";
import LocationIcon from "../../assets/Images/Location";
import SendMailIcon from "../../assets/Images/SendMail";
import PriceIcon from "../../assets/Images/Price";
import ConcreteIcon from "../../assets/Images/Concrete";
import headshop1 from "../../assets/Images/headshop1.svg";
import headshop2 from "../../assets/Images/headshop2.svg";
import headshop3 from "../../assets/Images/headshop3.svg";
import headshop4 from "../../assets/Images/headshop4.svg";
import FlavorIcon from "../../assets/Images/Flavor";
import HeartIcon from "../../assets/Images/Heart";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const headShopData = [
  {
    id: 1,
    name: "Toronto, Ontario",
    img: headshop1,
    price: "Price: $153",
    location: "789 Yonge St, Toronto, Canada",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario",
    img: headshop2,
    price: "Price: $153",
    location: "789 Yonge St, Toronto, Canada",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario",
    img: headshop3,
    price: "Price: $153",
    location: "789 Yonge St, Toronto, Canada",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario",
    img: headshop4,
    price: "Price: $153",
    location: "789 Yonge St, Toronto, Canada",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario",
    img: headshop1,
    price: "Price: $153",
    location: "789 Yonge St, Toronto, Canada",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario",
    img: headshop2,
    price: "Price: $153",
    location: "789 Yonge St, Toronto, Canada",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario",
    img: headshop3,
    price: "Price: $153",
    location: "789 Yonge St, Toronto, Canada",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
  {
    id: 1,
    name: "Toronto, Ontario",
    img: headshop4,
    price: "Price: $153",
    location: "789 Yonge St, Toronto, Canada",
    concrete: "Concentrate: 5%",
    flavor: "Flavour: Mint",
    rating: "5.0",
    totalReviews: "(56 Reviews)",
  },
];
const GetHeadShopUrl = `${process.env.REACT_APP_API_URI}headShop`;

const HeadShop = () => {
  const [headShop, setHeadShop] = useState([]);

  const GetHeadShop = async () => {
    try {
      const fetchData = await axios.get(GetHeadShopUrl);
      console.log(fetchData.data.data);
      setHeadShop(fetchData.data.data);
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };
  useEffect(() => {
    GetHeadShop();
  }, []);

  return (
    <div className="seeds-card-main row m-0">
      {headShop.map((data, index) => {
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
                  <span className="cut-text">{data.userId?.address?.addressname}</span>
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
                    to={`/home/headshop/${data._id}`}
                    className="green-btn w-auto ps-3 pe-1 d-flex align-items-center font-18 py-sm-3 gap-3 text-white"
                  >
                    {" "}
                    <span>View Store</span>{" "}
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

export default HeadShop;
