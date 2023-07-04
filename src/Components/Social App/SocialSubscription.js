import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CummunicationIcon from "../../assets/Images/Cummunication";
import SocialSearchIcon from "../../assets/Images/SocialSearch";
import FollowerListIcon from "../../assets/Images/FollowerList";
import SeeViewIcon from "../../assets/Images/SeeView";
import Axios from "../../axios/Axios";

const SocialSubscription = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/notice");
  };

  const [type, setType] = useState("");
  const [allPlans, setAllPlans] = useState([]);

  const handleChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URI}plan/`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("user-token")}` },
    })
      .then(response => {
        setAllPlans(response.data.plans);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, []);

  return (
    <div className="max-width-521 min-width-521 my-4 mx-3 px-0 subscription">
      <form onSubmit={(e) => submitHandler(e)} className="px-4 mt-4 pt-3">
        <div className="self-summary border-0 rounded-4 p-4 d-flex flex-column gap-4 mb-4">
          <p className="font-weight-700 text-white">Subscription benefits:</p>
          <div className="d-flex gap-3 align-items-center">
            <CummunicationIcon />
            <p className="text-grey cut-text">Send unlimited messages</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <SocialSearchIcon />
            <p className="text-grey cut-text">Set advanced preferences</p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <FollowerListIcon />
            <p className="text-grey cut-text">
              Get access to your followers list
            </p>
          </div>
          <div className="d-flex gap-3 align-items-center">
            <SeeViewIcon />
            <p className="text-grey cut-text">See who viewed you and more</p>
          </div>
        </div>

        <div
          className="btn-group btn-group-toggle my-4 flex-column gap-4 w-100"
          data-toggle="buttons"
        >
          {allPlans.length > 0 && allPlans.map((plan, index) => {
            return <label key={index} className="btn subscription-offer p-0 w-100 font-14 bg-grey d-flex align-items-center">
              <input
                type="radio"
                name="options"
                id={plan._id}
                autoComplete="off"
                readOnly
                checked={type === plan._id}
                onChange={handleChange}
                value={plan._id}
              />
              <div className=" p-4 w-100 d-flex justify-content-center align-items-center text-white">
                <p className="font-32-social font-weight-700 border-right border-grey pr-3">
                  {`$${plan.price}`}
                </p>
                <div className="px-3">
                  <p className="font-18-social font-weight-700 mb-2">{plan.name}</p>
                  <p className="font-16-social font-weight-400 text-light-grey">
                    {`SAVE ${plan.discount}`}
                  </p>
                </div>
              </div>{" "}
            </label>
          })}
        </div>

        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-4 pt-3">
          <button className="green-btn w-max-content px-5">
            Subscribe Now
          </button>
        </div>
        <p className="font-14 font-weight-400 text-light-grey mt-3 text-center">
          Recurring billing, cancel anytime
        </p>
      </form>
      <p className="font-14 font-weight-400 text-light-grey mt-4 pt-2 px-4">
        Please strictly follow the community rules listed below. If you become
        aware of content with child sexual abuse imagery or human sex
        trafficking, please report it to us and to the appropriate authorities!
        Please strictly follow the community rules listed below. If you become
        aware of content with child sexual abuse imagery or human sex
        trafficking, please report it to us and to the appropriate authorities!{" "}
      </p>
    </div>
  );
};

export default SocialSubscription;
