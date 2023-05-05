import React from "react";
import { useNavigate } from "react-router-dom";

const SocialUserBio = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/social/subscription");
  };
  return (
      <div className="max-width-521 min-width-521 py-4 px-0">
        <h2 className="auth-model-heading mb-4 px-4 text-left ">User</h2>
        <div className="self-summary rounded-0 px-4 py-3">
          <p className="font-18-100 font-weight-700 pb-2 text-white">My Self- summary</p>
          <p className="font-16 font-weight-400 text-grey pt-1">
            I’m a sub looking to be dominated
          </p>
        </div>
        <form onSubmit={(e) => submitHandler(e)} className="px-4 mt-4 pt-3">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            My Bio
          </label>
          <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
            <select className="auth-input" required>
              <option value="">My Bio</option>
              <option value="option1">Option1</option>
              <option value="option2">Option2</option>
              <option value="option3">Option3</option>
            </select>
          </div>
          <input
            className="auth-input mb-4"
            type="text"
            required
            placeholder="I’ve been kinky for"
          />
          <input
            className="auth-input mb-4"
            type="text"
            required
            placeholder="Height"
          />
          <input
            className="auth-input mb-4"
            type="text"
            required
            placeholder="Ethincity"
          />
          <input
            className="auth-input mb-4"
            type="text"
            required
            placeholder="Drinking"
          />
          <input
            className="auth-input mb-4"
            type="text"
            required
            placeholder="Smoking"
          />
          <input
            className="auth-input mb-4"
            type="text"
            required
            placeholder="My hobbies"
          />

          <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-4 pt-3">
            <button className="green-btn custom-w min-width-208">Next</button>
          </div>
        </form>
      </div>
  );
};

export default SocialUserBio;
