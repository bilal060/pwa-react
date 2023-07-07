import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SocialPostSignUp } from "../../Api";
import Axios from "../../axios/Axios";
import { toast } from "react-toastify";

const SocialSignUp = () => {
  const navigate = useNavigate();
  const [signUpDetails, setsignUpDetails] = useState({
    email: "",
    fullName: "",
    password: "",
  });

  const [currentuserData, setcurrentuserData] = useState();
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    setcurrentuserData(data);
    let GetUserUrl = `${process.env.REACT_APP_API_URI}users/${data?._id}`;
    GetUser(GetUserUrl);
    setsignUpDetails({
      email: data?.email,
      fullName: data?.fullName,
    });
  }, []);

  const GetUser = async (GetUserUrl) => {
    try {
      const fetchData = await Axios.get(GetUserUrl);
      localStorage.setItem(
        "userdata",
        JSON.stringify(fetchData?.data?.data?.doc)
      );
      setcurrentuserData(fetchData?.data?.data?.doc);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setsignUpDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (currentuserData) {
      navigate("/social/summary");
    } else SocialPostSignUp(signUpDetails, navigate);
    console.log(signUpDetails);
  };
  return (
    <div className="auth-model mx-4 my-5 ">
      <div className="max-width-521 min-width-521 px-3 py-4">
        <form onSubmit={(e) => submitHandler(e)}>
          <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              What’s your email?
            </label>
            <input
              readOnly={currentuserData ? true : false}
              className="auth-input"
              type="email"
              placeholder="Email"
              required
              value={signUpDetails.email}
              name="email"
              onChange={(e) => formHandler(e)}
            />
          </div>

          <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Choose a username
            </label>
            <input
              readOnly={currentuserData ? true : false}
              className="auth-input"
              type="text"
              placeholder="Username"
              required
              name="fullName"
              value={signUpDetails.fullName}
              onChange={(e) => formHandler(e)}
            />
          </div>

          {!currentuserData && (
            <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
              <label className="text-white mb-2 font-weight-600 font-18-100">
                Enter your password
              </label>
              <div className="auth-input d-flex align-items-center justify-content-between w-100">
                <input
                  name="password"
                  required
                  type={"password"}
                  placeholder="Password"
                  className="password-input w-75"
                  value={signUpDetails.password}
                  onChange={(e) => formHandler(e)}
                />
              </div>
            </div>
          )}

          <button className="green-btn">Next</button>
        </form>
      </div>
    </div>
  );
};

export default SocialSignUp;
