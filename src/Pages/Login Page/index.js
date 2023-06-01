import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowPassword from "../../assets/Images/ShowPassword";
import GoogleIcon from "../../assets/Images/Google";
import axios from "axios";

const LoginPage = () => {
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
  });
  const [passwordShown, setPasswordShown] = useState(false);
  const [loading, setloading] = useState(true);
  const [login, setlogin] = useState([]);

  const formHandler = (e) => {
    const { name, value } = e.target;
    setloginDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigate = useNavigate();

  console.log(loginDetails);
  const API_URI = `${process.env.REACT_APP_API_URI}/api/v1/users/login`;
  const postLoginData = async () => {
    try {
      setloading(false);
      const fetchData = await axios.post(API_URI, loginDetails);
      setlogin(fetchData);

      localStorage.clear();
      localStorage.setItem(
        "remember-user",
        JSON.stringify(fetchData.data.userFetch)
      );
      localStorage.setItem("user-token", fetchData.data.token);
      localStorage.setItem(
        "userdata",
        JSON.stringify(fetchData.data.userFetch)
      );

      setTimeout(() => {
        navigate("/home");
      }, 500);
    } catch (error) {
      console.log(error);
      setloading(true);
      alert("Unable to login. Please try after some time.");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postLoginData();
  };
  return (
    <>
      {!loading ? (
        <h1 className="max-width-521">Loading...</h1>
      ) : (
        <div className="max-width-521 min-width-521">
          <h2 className="auth-model-heading mb-4">Welcome Back!</h2>
          <p className="auth-model-desc mb-5">Please login to your account.</p>
          <form onSubmit={(e) => submitHandler(e)}>
            <input
              className="auth-input"
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => formHandler(e)}
            />

            <div className="auth-input my-3 d-flex align-items-center justify-content-between w-100">
              <input
                name="password"
                required
                type={passwordShown ? "text" : "password"}
                placeholder="Enter password"
                className="password-input w-75"
                onChange={(e) => formHandler(e)}
              />{" "}
              <span
                onClick={() => {
                  setPasswordShown(!passwordShown);
                }}
                className="see-pswd-btn cr-p"
              >
                <ShowPassword />
              </span>
            </div>

            <div className="d-flex align-items-center justify-content-between mb-4 pb-3">
              <div className="checkbox-container">
                <input type="checkbox" id="head-checkbox" />
                <label htmlFor="head-checkbox">
                  <span className="ps-2 font-16-100 font-weight-600">
                    Remember me
                  </span>
                </label>
              </div>
              <Link className="text-white font-16-100 font-weight-600">
                <u>Forget Password?</u>
              </Link>
            </div>
            <button className="green-btn">Login</button>
          </form>
          <div className="or font-18-100 font-weight-600"> or </div>

          <button className="google-login w-100 my-4">
            <GoogleIcon />
            <span className="ps-3 font-weight-700 font-18-100">
              Login with Google
            </span>
          </button>
          <Link
            className="text-white d-flex justify-content-center align-items-center gap-1 font-weight-500 font-18"
            to="/signup"
          >
            Don’t have an account?
            <span className="text-primary-green font-weight-700">Register</span>
          </Link>
          <p className="text-center text-grey mt-5 pt-sm-0 pt-3 font-16">
            Terms of use | Privacy Policy
          </p>
        </div>
      )}
    </>
  );
};

export default LoginPage;
