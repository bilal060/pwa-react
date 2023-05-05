import React from "react";
import { useNavigate } from "react-router-dom";

const SocialUserDetail = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/userbio");
  };
  return (
    <div className=" px-3 py-4">
      <h2 className="auth-model-heading mb-4">User</h2>
      <p className="font-14 font-weight-500 text-primary-red pb-4 mb-3">
        Warning: you must be at atleast 18 years old to sign up for app.
      </p>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Your Age
          </label>
          <select className="auth-input" required>
            <option value="">Select an option</option>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
          </select>
        </div>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Your Role
          </label>
          <select className="auth-input" required>
            <option value="">Select an option</option>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
          </select>
        </div>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Your Location
          </label>
          <select className="auth-input" required>
            <option value="">Type Location</option>
            <option value="option1">Option1</option>
            <option value="option2">Option2</option>
            <option value="option3">Option3</option>
          </select>
        </div>
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-4 pt-3">
          <button className="green-btn custom-w min-width-208">Next</button>
        </div>
      </form>
    </div>
  );
};

export default SocialUserDetail;
