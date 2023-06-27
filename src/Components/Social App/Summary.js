import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../../axios/Axios";
import { toast } from "react-toastify";

const SocialSummary = () => {
  const [userData, setuserData] = useState();
  const [summary, setSummary] = useState({
    selfSummary: userData?.selfSummary,
  });
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    setuserData(JSON.parse(currentUser));
    setSummary({
      selfSummary: JSON.parse(currentUser).selfSummary,
    });
  }, []);
  const EditProfileUrl = `${process.env.REACT_APP_API_URI}users/profileUpdate/${userData?._id}`;

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const EditUser = async (EditProfileUrl) => {
    try {
      const fetchData = await Axios.patch(EditProfileUrl, summary);
      localStorage.setItem(
        "userdata",
        JSON.stringify(fetchData?.data?.updateUser)
      );
      navigate("/social/userdetail");
      toast.success("Summary Added Successfully");
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (userData) {
      navigate("/social/userdetail");
    } else EditUser(EditProfileUrl);
  };
  console.log(userData);
  return (
    <div className="px-3 py-4 h-100 ">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Your self-summary
          </label>
          <textarea
            readOnly={userData ? true : false}
            value={summary.selfSummary}
            onChange={(e) => setSummary({ selfSummary: e.target.value })}
            required
            className="auth-input-textarea border-grey"
            type="email"
            placeholder="Tell me about yourself!"
          />
        </div>
        <p className="font-15 line-height-140 font-weight-500 text-white">
          Note: It’s NOT allowed to post any inappropriate content, such as
          pornographic content
        </p>
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between  mt-4 pt-3">
          <button className="green-btn-outline " onClick={() => goBack()}>
            Back
          </button>
          <button className="green-btn " type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default SocialSummary;
