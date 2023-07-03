import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../axios/Axios";
import { toast } from "react-toastify";

const SocialUserBio = () => {
  const [currentuserData, setcurrentuserData] = useState();
  const [userBio, setUserBio] = useState({
    bio: "",
    height: "",
    Smoking: "",
    drinking: "",
    hobbies: "",
    drinking: "",
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
      toast.error(error?.message);
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

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/subscription");
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
        <p className="font-14 font-weight-400 text-grey pt-1">
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
            value={userBio.bio}
            required
            className="auth-input-textarea border-grey rounded-3 rounded-3"
            placeholder="Tell me about yourself!"
            onChange={(e) => formHandler(e)}
            name="bio"
          />
        </div>
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="I’ve been kinky for"
          onChange={(e) => formHandler(e)}
        />
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="Height"
          onChange={(e) => formHandler(e)}
        />
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="Ethincity"
          onChange={(e) => formHandler(e)}
        />
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="Drinking"
          onChange={(e) => formHandler(e)}
        />
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="Smoking"
          onChange={(e) => formHandler(e)}
        />
        <input
          className="auth-input mb-4"
          type="text"
          required
          placeholder="My hobbies"
          onChange={(e) => formHandler(e)}
        />

        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-4 pt-3">
          <button className="green-btn custom-w min-width-208">Next</button>
        </div>
      </form>
    </div>
  );
};

export default SocialUserBio;
