import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../axios/Axios";
import { toast } from "react-toastify";

const SocialUserBio = () => {
  const [currentuserData, setcurrentuserData] = useState();
  const [userBio, setUserBio] = useState({
    bio: "",
    gender: "",
    height: "",
    state: "",
    drinking: "",
    smoking: "",
    hobbies: "",
  });
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    setcurrentuserData(data);
    let GetUserUrl = `${process.env.REACT_APP_API_URI}users/${data?._id}`;
    GetUser(GetUserUrl);
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
    setUserBio((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const AddUserDetail = async (EditProfileUrl) => {
    try {
      const fetchData = await Axios.patch(EditProfileUrl, userBio);
      localStorage.setItem(
        "userdata",
        JSON.stringify(fetchData?.data?.updateUser)
      );
      navigate("/social/subscription");
      toast.success("Detail Added Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const EditProfileUrl = `${process.env.REACT_APP_API_URI}users/profileUpdate/${currentuserData?._id}`;

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      currentuserData?.bio &&
      currentuserData?.gender &&
      currentuserData?.height &&
      currentuserData?.smoking &&
      currentuserData?.drinking &&
      currentuserData?.hobbies &&
      currentuserData?.state
    ) {
      navigate("/social/subscription");
    } else AddUserDetail(EditProfileUrl);
  };
  return (
    <div className="max-width-521 min-width-521 my-4 mx-3 px-0">
      <h2 className="font-weight-700 text-white font-24-social mb-4 px-4 text-left ">
        {currentuserData?.fullName}
      </h2>
      <div className="self-summary rounded-0 px-4 py-3">
        <p className="font-18-100 font-weight-700 pb-2 text-white">
          My Self- summary
        </p>
        <p className="font-14 font-weight-400 text-grey pt-1 text-capitalize">
          {currentuserData?.selfSummary}
        </p>
      </div>
      <form onSubmit={(e) => submitHandler(e)} className="px-4 mt-4 pt-3">
        <label className="text-white mb-2 font-weight-600 font-18-100">
          My Bio
        </label>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <textarea
            readOnly={currentuserData?.bio ? true : false}
            value={currentuserData?.bio}
            required
            className="auth-input-textarea border-grey rounded-3 rounded-3"
            placeholder="Tell me about yourself!"
            onChange={(e) => formHandler(e)}
            name="bio"
          />
        </div>
        <select
          className="auth-input mb-4"
          required
          onChange={(e) => formHandler(e)}
          name="gender"
          disabled={currentuserData?.gender ? true : false}
          value={currentuserData?.gender}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
        {/* <select
          className="auth-input mb-4"
          required
          onChange={(e) => formHandler(e)}
          name="height"
        >
          <option value="">Height</option>
          <option value="yes">4Feet 1Inch</option>
          <option value="no">Female</option>
          <option value="others">Others</option>
        </select> */}
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="Height"
          name="height"
          onChange={(e) => formHandler(e)}
          value={currentuserData?.height}
          readOnly={currentuserData?.height ? true : false}
        />
        <select
          className="auth-input mb-4"
          required
          onChange={(e) => formHandler(e)}
          name="state"
          value={currentuserData?.state}
          disabled={currentuserData?.state ? true : false}
        >
          <option value="">Ethincity</option>
          <option value="AmericanIndianOrAlaskaNative">
            American Indian or Alaska Native
          </option>
          <option value="asian">Asian</option>
          <option value="BlackOrAfricanAmerican">
            Black or African American
          </option>
          <option value="NativeHawaiian">Native Hawaiian</option>
          <option value="white">White</option>
          <option value="OtherPacificIslander">Other Pacific Islander</option>
        </select>

        <select
          className="auth-input mb-4"
          required
          onChange={(e) => formHandler(e)}
          name="drinking"
          value={currentuserData?.drinking}
          disabled={currentuserData?.drinking ? true : false}
        >
          <option value="">Drinking</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select
          className="auth-input mb-4"
          required
          onChange={(e) => formHandler(e)}
          name="smoking"
          value={currentuserData?.smoking}
          disabled={currentuserData?.smoking ? true : false}
        >
          <option value="">Smoking</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="My hobbies"
          name="hobbies"
          onChange={(e) => formHandler(e)}
          value={currentuserData?.hobbies}
          readOnly={currentuserData?.hobbies ? true : false}
        />

        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-4 pt-3">
          <button className="green-btn custom-w min-width-208" type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default SocialUserBio;
