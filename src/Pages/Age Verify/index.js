import React, { useEffect, useState } from "react";
import DatePicker from "react-date-picker";
import CalendarIcon from "../../assets/Images/Calendar";
import { useNavigate } from "react-router-dom";
import { VerifyAge } from "../../Api";

const AgeVerifyPage = () => {
  const [value, onChange] = useState("");
  const [ageVerify, setAgeVerify] = useState({
    date: "",
    province: value,
  });
  useEffect(() => {
    setAgeVerify((prevState) => ({
      ...prevState,
      date: value,
    }));
    return () => {
      setAgeVerify((prevState) => ({
        ...prevState,
        date: value,
      }));
    };
  }, [value]);

  console.log(value);
  const navigate = useNavigate();

  const formHandler = (e) => {
    const { name, value } = e.target;
    setAgeVerify((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    console.log(ageVerify);
    e.preventDefault();
    VerifyAge(ageVerify);
  };
  return (
    <div className="max-width-521">
      <h2 className="auth-model-heading mb-4">Confirm Your Age</h2>
      <p className="auth-model-desc mb-5">
        You must be of legal age to consume cannabis in your province or state
        of residence to enter our app. By clicking “Enter”, You confirm that you
        are of legal age to consume cannabis in the province or state you
        reside.
      </p>
      <form onSubmit={(e) => submitHandler(e)}>
        <select
          className="auth-input my-3"
          required
          name="province"
          onChange={(e) => formHandler(e)}
        >
          <option value="">Where are you from?</option>
          <option value="AB">AB</option>
          <option value="NS">NS</option>
          <option value="Nb">Nb</option>
          <option value="ON">ON</option>
          <option value="MB">MB</option>
          <option value="SK">SK</option>
          <option value="BC">BC</option>
          <option value="YT">YT</option>
          <option value="NU">NU</option>
          <option value="Quebec">Quebec</option>
        </select>
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
        />
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between mt-5">
          <button className="green-btn-outline" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="green-btn">Next</button>
        </div>
      </form>
    </div>
  );
};

export default AgeVerifyPage;
