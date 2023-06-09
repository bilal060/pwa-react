import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import ShowPassword from "../../assets/Images/ShowPassword";
import { PostSignUp } from "../../Api";
import { useEffect } from "react";
const SignUpPage = () => {

  const { state } = useLocation();

  const [signInDetails, setsignInDetails] = useState({
    fullName: JSON.parse(localStorage.getItem('signupData'))?.fullName || "",
    storeName: JSON.parse(localStorage.getItem('signupData'))?.storeName || "",
    startTime: "",
    closeTime: "",
    email: state.googleEmail || JSON.parse(localStorage.getItem('signupData'))?.email || "",
    password: JSON.parse(localStorage.getItem('signupData'))?.password || "",
    passwordConfirm: JSON.parse(localStorage.getItem('signupData'))?.passwordConfirm || "",
    userType: JSON.parse(localStorage.getItem('signupData'))?.userType || "retailer",
    age: JSON.parse(localStorage.getItem('signupData'))?.age || "",
    province: JSON.parse(localStorage.getItem('signupData'))?.province || "",
  });
  useEffect(() => {
    const user = sessionStorage.getItem("remember-age");
    setsignInDetails((prevState) => ({
      ...prevState,
      province: JSON.parse(user)?.province,
      age: JSON.parse(user)?.age,
    }));
    return () =>
      setsignInDetails((prevState) => ({
        ...prevState,
        province: JSON.parse(user)?.province,
        age: JSON.parse(user)?.age,
      }));
  }, []);
  const [passwordError, setPasswordError] = useState("");
  const [passwordShown1, setPasswordShown1] = useState(false);
  const [passwordShown2, setPasswordShown2] = useState(false);
  const [termCheck, setTermCheck] = useState(false);
  const [passwordCheck, setpasswordCheck] = useState(false);

  const formHandler = (e) => {
    const { name, value } = e.target;
    setsignInDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (
      name === "password" &&
      (value.length < 8 || value.length > 12 || !/[!@#$%^&*]/.test(value))
    ) {
      setPasswordError(
        "Choose a password between 8-12 characters and include one special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setpasswordCheck(true);
    console.log(signInDetails);
    if (signInDetails.password === signInDetails.passwordConfirm) {
      PostSignUp(signInDetails, navigate, state.googleEmail);
    } else return;
  };
  return (
    <>
      <div className="max-width-521">
        <h2 className="auth-model-heading mb-5">Create Account</h2>
        <form onSubmit={(e) => submitHandler(e)}>
          <select
            required
            className="auth-input mb-3"
            name="userType"
            onChange={(e) => formHandler(e)}
            defaultValue={signInDetails.userType}
          >
            <option value="">- Select Type -</option>
            <option value="retailer">Retailer</option>
            <option value="consumer">Consumer</option>
          </select>
          {signInDetails.userType === "consumer" ? (
            <input
              onChange={(e) => formHandler(e)}
              name="fullName"
              value={signInDetails.fullName}
              className="auth-input mb-3"
              type="text"
              placeholder="Full Name"
              required
            />
          ) : (
            <React.Fragment>
              <input
                onChange={(e) => formHandler(e)}
                name="storeName"
                className="auth-input mb-3"
                value={signInDetails.storeName}
                type="text"
                placeholder="Store Name"
                required
              />
              <input
                onChange={(e) => formHandler(e)}
                name="startTime"
                className="auth-input mb-3"
                type="text"
                value={signInDetails.startTime}
                placeholder="Open Time"
                onFocus={(e) => (e.target.type = "time")}
                required
              />
              <input
                onChange={(e) => formHandler(e)}
                name="closeTime"
                className="auth-input mb-3"
                type="text"
                value={signInDetails.closeTime}
                placeholder="Close Time"
                onFocus={(e) => (e.target.type = "time")}
                required
              />
            </React.Fragment>
          )}
          <input
            className="auth-input mb-3"
            type="email"
            placeholder="Email"
            required
            name="email"
            value={signInDetails.email}
            readOnly={state.googleEmail}
            onChange={(e) => formHandler(e)}
          />
          {!state.googleEmail && <div className="auth-input mb-3 d-flex align-items-center justify-content-between">
            <input
              name="password"
              required
              type={passwordShown1 ? "text" : "password"}
              value={signInDetails.password}
              placeholder="Enter password"
              className="password-input w-75"
              onChange={(e) => formHandler(e)}
              minLength={8}
              maxLength={12}
            />
            <span
              onClick={() => {
                setPasswordShown1(!passwordShown1);
              }}
              className="see-pswd-btn cr-p"
            >
              <ShowPassword />
            </span>
          </div>}
          {passwordError && <p className="text-danger mt-1">{passwordError}</p>}
          {!state.googleEmail && <div className="mb-3">
            <div className="auth-input d-flex align-items-center justify-content-between">
              <input
                name="passwordConfirm"
                required
                value={signInDetails.passwordConfirm}
                type={passwordShown2 ? "text" : "password"}
                placeholder="Confirm password"
                className="password-input w-75"
                onChange={(e) => formHandler(e)}
                minLength={8}
                maxLength={12}
              />
              <span
                onClick={() => {
                  setPasswordShown2(!passwordShown2);
                }}
                className="see-pswd-btn cr-p"
              >
                <ShowPassword />
              </span>
            </div>
            {passwordCheck && (
              <div>
                {signInDetails.password !== signInDetails.passwordConfirm && (
                  <div className="d-flex justify-content-start align-items-center">
                    <p className="text-danger mt-1">
                      Password are not the same.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>}
          <div className="d-flex align-items-start flex-column">
            <div className="checkbox-container">
              <input
                type="checkbox"
                id="head-checkbox"
                onChange={() => setTermCheck(!termCheck)}
              />
              <label htmlFor="head-checkbox">
                <span className="ps-2 font-16-100 text-grey font-weight-500">
                  I confirm I have read and agree to the
                  <span className="text-primary-green font-weight-700 px-1">
                    Term of use
                  </span>
                  and{" "}
                  <span className="text-primary-green ps-md-4 font-weight-700">
                    Privacy policy
                  </span>
                </span>
              </label>
            </div>
          </div>
          <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between mb-4 pb-2 mt-4 pt-3">
            <button
              className="green-btn-outline "
              onClick={() => goBack()}
              type="button"
            >
              Back
            </button>

            <button
              className="green-btn"
              disabled={termCheck ? false : true}
              type="submit"
            >
              Next
            </button>
          </div>
        </form>
        <Link
          className="text-white d-flex justify-content-center align-items-center gap-1 font-weight-500 font-18"
          to="/"
        >
          Already have an account?
          <span className="text-primary-green font-weight-700">Login</span>
        </Link>
        <p className="text-center text-grey mt-5 pt-sm-0 pt-3 font-16">
          Terms of use | Privacy Policy
        </p>
      </div>
    </>
  );
};

export default SignUpPage;
