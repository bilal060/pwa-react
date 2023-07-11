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
    VerifyAge(ageVerify, navigate);
  };
  const handleDatePickerChange = (date) => {
    onChange(date);
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
          <option value="AB">Alberta(AB)</option>
          <option value="AL">Alaska</option>
          <option value="AR">Arizona</option>
          <option value="BC">British Columbia(BC)</option>
          <option value="CA">California</option>
          <option value="CL">Colorado</option>
          <option value="CO">Connecticut</option>
          <option value="IL">Illinois</option>
          <option value="MA">Maine</option>
          <option value="MS">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MO">Montana</option>
          <option value="MB">Manitoba(MB)</option>
          <option value="NE">Nevada</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NB">New Brunswick(NB)</option>
          <option value="NL">Newfoundland and Labrador(NL)</option>
          <option value="NT">Northwest Territories(NT)</option>
          <option value="NS">Nova Scotia(NS)</option>
          <option value="NU">Nunavut(NU)</option>
          <option value="ON">Ontario(ON)</option>
          <option value="OR">Oregon</option>
          <option value="PE">Prince Edward Island (PE)</option>
          <option value="Quebec">Quebec(QC)</option>
          <option value="VE">Vermont</option>
          <option value="VI">Virginia</option>
          <option value="WA">Washington</option>
          <option value="SK">Saskatchewan(SK)</option>
          <option value="YT">Yukon(YT)</option>
        </select>
        <DatePicker
          onChange={handleDatePickerChange}
          value={value}
          className="auth-input"
          clearIcon={false}
          format="y-M-d"
          dayPlaceholder="DD"
          yearPlaceholder="YYYY"
          monthPlaceholder="MM"
          calendarIcon={<CalendarIcon />}
          required={true}
          maxDate={new Date()}
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
