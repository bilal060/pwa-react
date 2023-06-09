import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom";
import CalendarIcon from "../../assets/Images/Calendar";
import Axios from "../../axios/Axios";
import { toast } from "react-toastify";

const libraries = ["places"];
const SocialUserDetail = () => {
  const [value, onChange] = useState("");
  const navigate = useNavigate();
  const [userDetail, setuserDetail] = useState({
    age: "",
    role: "",
    address: "",
  });

  const [currentuserData, setcurrentuserData] = useState();
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    setcurrentuserData(data);
    let GetUserUrl = `${process.env.REACT_APP_API_URI}users/${data?._id}`;
    GetUser(GetUserUrl);
    setuserDetail({
      age: data.age,
      role: data.userType,
      address: data.location.address,
    });
    onChange(data.age);
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

  useEffect(() => {
    setuserDetail((prevState) => ({
      ...prevState,
      age: value,
    }));
    return () => {
      setuserDetail((prevState) => ({
        ...prevState,
        age: value,
      }));
    };
  }, [value]);

  const EditProfileUrl = `${process.env.REACT_APP_API_URI}users/profileUpdate/${currentuserData?._id}`;

  const formHandler = (e) => {
    const { name, value } = e.target;
    setuserDetail((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const inputRef = useRef();
  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      setuserDetail((prevState) => ({
        ...prevState,
        address: place.formatted_address,
      }));
    }
  };

  const AddUserDetail = async (EditProfileUrl) => {
    try {
      const fetchData = await Axios.patch(EditProfileUrl, userDetail);
      localStorage.setItem(
        "userdata",
        JSON.stringify(fetchData?.data?.updateUser)
      );
      navigate("/social/userbio");
      toast.success("Detail Added Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      currentuserData?.userType &&
      currentuserData?.age &&
      currentuserData?.location.address
    ) {
      navigate("/social/userbio");
    } else AddUserDetail(EditProfileUrl);
  };
  return (
    <div className="max-width-521 min-width-521 mx-3 my-4 ">
      <h2 className="font-weight-700 text-white text-center font-24-social mb-4">
        User
      </h2>
      <p className="font-14 font-weight-500 text-primary-red pb-4 mb-2">
        <span className="font-weight-700">Warning:</span> you must be at atleast
        18 years old to sign up for app.
      </p>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Your Age
          </label>
          {currentuserData?.age ? (
            <div className="auth-input d-flex align-items-center justify-content-between w-100">
              <input
                readOnly
                name="password"
                required
                type={"text"}
                placeholder="Password"
                className="password-input w-75"
                value={currentuserData?.age}
              />
            </div>
          ) : (
            <DatePicker
              onChange={onChange}
              value={value}
              className="auth-input"
              clearIcon={false}
              format="y-M-d"
              dayPlaceholder="DD"
              yearPlaceholder="YYYY"
              monthPlaceholder="MM"
              calendarIcon={<CalendarIcon />}
              required={true}
              disabled={currentuserData?.age ? true : false}
            />
          )}
        </div>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Your Role
          </label>
          <select
            required
            className="auth-input"
            name="role"
            value={userDetail.role}
            onChange={(e) => formHandler(e)}
            disabled={currentuserData?.userType ? true : false}
          >
            <option value="">- Select Type -</option>
            <option value="Retailer">Retailer</option>
            <option value="Consumer">Consumer</option>
          </select>
        </div>
        {!currentuserData?.location.address ? (
          <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
            <LoadScript
              googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAP}
              libraries={libraries}
            >
              <StandaloneSearchBox
                onLoad={(ref) => (inputRef.current = ref)}
                onPlacesChanged={handlePlaceChanged}
              >
                <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
                  <label className="text-white mb-2 font-weight-600 font-18-100">
                    Your Location
                  </label>
                  <input
                    disabled={
                      currentuserData?.hasOwnProperty("address") ? true : false
                    }
                    type="text"
                    required
                    className="auth-input"
                    placeholder="Enter Address"
                    value={userDetail.address}
                  />
                </div>
              </StandaloneSearchBox>
            </LoadScript>
          </div>
        ) : (
          <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              What’s your email?
            </label>
            <input
              readOnly
              className="auth-input"
              type="email"
              placeholder="Email"
              required
              value={currentuserData?.location.address}
              name="email"
              onChange={(e) => formHandler(e)}
            />
          </div>
        )}
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-4 pt-3">
          <button className="green-btn custom-w min-width-208">Continue</button>
        </div>
      </form>
    </div>
  );
};

export default SocialUserDetail;
