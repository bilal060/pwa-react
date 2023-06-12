import React from "react";
import { useNavigate } from "react-router-dom";
import productuser from "../../assets/Images/productuser-1.svg";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "react-phone-number-input/style.css";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import en from "react-phone-number-input/locale/en";
import BackIcon from "../../assets/Images/back";
import { useEffect } from "react";
import { EditUser } from "../../Api";
import { useRef } from "react";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

const libraries = ["places"];
const EditProfile = () => {
  const [value, setvalue] = useState("");
  const [country, setCountry] = useState("US");

  const [editedData, setEditedData] = useState({
    addressname: "",
    fullName: "",
    phone: "",
    photo: "",
  });
  const [userData, setuserData] = useState();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    setuserData(JSON.parse(currentUser));
  }, []);

  const [file, setFile] = useState(productuser);

  const EditProfileUrl = `${process.env.REACT_APP_API_URI}users/profileUpdate/${userData?._id}`;

  const attachFile = (e) => {
    if (e.target.files) {
      let imageFile = e.target.files[0];
      setEditedData((prevState) => ({
        ...prevState,
        photo: imageFile,
      }));
      setFile(imageFile.name);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();

    const data = new FormData();
    let allowEdit = false;
    if (editedData.fullName) {
      data.append("fullName", editedData.fullName);
      allowEdit = true;
    }
    if (editedData.phone) {
      data.append("phone", editedData.phone);
      allowEdit = true;
    }
    if (editedData.photo) {
      data.append("photo", editedData.photo);
      allowEdit = true;
    }
    if (editedData.addressname) {
      data.append("addressname", editedData.addressname);
      allowEdit = true;
    }
    if (allowEdit) {
      EditUser(EditProfileUrl, data);
    }
  };
  const inputRef = useRef();
  const handlePlaceChanged = () => {
    const [place] = inputRef.current.getPlaces();
    if (place) {
      setEditedData((prevState) => ({
        ...prevState,
        addressname: place.formatted_address,
      }));
    }
  };
  return (
    <div className="product-user-profile">
      <div className="container mx-auto">
        <div className="me-12 ms-12 position-relative">
          <div className="d-flex justify-content-start d-sm-flex d-none">
            <button
              className="green-btn-outline text-primary-green w-max-content px-5 gap-2"
              onClick={() => goBack()}
            >
              <BackIcon />
              <span className="ps-2">Back</span>
            </button>
          </div>

          <div className=" mx-auto edit-profile">
            <h3 className="pb-4 font-32 font-weight-600 allproduct-heading position-absolute mx-auto top-0 d-lg-block d-none">
              Edit Profile
            </h3>
            <h3 className="pb-4 font-32 font-weight-600 allproduct-heading mt-5 d-lg-none d-sm-block d-none">
              Edit Profile
            </h3>

            <form onSubmit={(e) => submitHandler(e)}>
              <div className="seed-card flex-column mt-lg-5 mt-3">
                <div className="d-flex flex-column justify-content-lg-center justify-content-between align-items-center">
                  <div className="d-flex flex-column gap-4 w-50 mb-sm-5">
                    <img src={file} alt="" />
                    <label className="green-btn-outline text-primary-green height-56 cr-p d-flex justify-content-center align-items-center">
                      <input
                        type="file"
                        className="d-none"
                        accept=".jpg, .jpeg, .png"
                        onChange={(e) => attachFile(e)}
                      />
                      <span>Upload Picture</span>
                    </label>
                  </div>
                  <div className="d-sm-block d-none">
                    <div className="bg-transparent border-0 mb-4 w-100">
                      <label className="mb-2 font-weight-600 font-18-100">
                        User Name
                      </label>
                      <input
                        type="text"
                        className="auth-input height-56 bg-white"
                        placeholder="Full Name"
                        name="fullName"
                        onChange={(e) =>
                          setEditedData((prevState) => ({
                            ...prevState,
                            fullName: e.target.value,
                          }))
                        }
                      />
                    </div>
                    <div className="form-control h-auto p-0 bg-transparent border-0">
                      <label className="mb-2 font-weight-600 font-18-100">
                        Phone Number
                      </label>

                      <div className="custom-phone-input auth-input bg-white mb-4 d-flex align-items-center">
                        <PhoneInput
                          countrySelectProps={{ unicodeFlags: false }}
                          country={country}
                          value={value}
                          onChange={(value) =>
                            setEditedData((prevState) => ({
                              ...prevState,
                              phone: value,
                            }))
                          }
                          inputProps={{
                            name: "phone",
                          }}
                          buttonClass="d-none"
                          inputClass="bg-transparent outline-0 p-0 m-0 border-0 shadow-none custom-phone-input-1 font-18-100"
                        />
                      </div>
                    </div>
                    <LoadScript
                      googleMapsApiKey="AIzaSyBji3krLZlmFpDakJ1jadbsMuL_ZJfazfA"
                      libraries={libraries}
                    >
                      <StandaloneSearchBox
                        onLoad={(ref) => (inputRef.current = ref)}
                        onPlacesChanged={handlePlaceChanged}
                      >
                        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
                          <label className="mb-2 font-weight-600 font-18-100">
                            Address
                          </label>
                          <input
                            type="text"
                            className="auth-input bg-white height-56"
                            placeholder="Enter Address"
                          />
                        </div>
                      </StandaloneSearchBox>
                    </LoadScript>
                    <button
                      className="green-btn w-100 ps-3 pe-1 d-flex align-items-center justify-content-center font-18 py-sm-3 user"
                      type="submits"
                    >
                      {" "}
                      Save Change
                    </button>
                  </div>
                </div>
              </div>
              <div className="d-sm-none d-block mt-4">
                <div className="bg-transparent border-0 mb-4 w-100">
                  <label className="mb-2 font-weight-600 font-18-100">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="auth-input height-56 bg-white"
                    placeholder="Full Name"
                  />
                </div>

                <div className="w-100">
                  <label className="mb-2 font-weight-600 font-18-100">
                    Phone Number
                  </label>
                  <div className="custom-phone-input bg-white auth-input d-flex align-items-center mb-4 w-100 height-56">
                    <CountrySelect
                      labels={en}
                      value={country}
                      onChange={setCountry}
                      className="bg-transparent outline-0 border-0 custom-phone-dropdown-btn font-18-100"
                    />
                    <PhoneInput
                      countrySelectProps={{ unicodeFlags: false }}
                      country={country}
                      value={value}
                      onChange={setvalue}
                      buttonClass="d-none"
                      inputClass="bg-transparent outline-0 shadow-none custom-phone-input-1 font-18-100 w-100"
                    />
                  </div>
                </div>
                <div className="bg-transparent border-0 mb-4 w-100 mb-sm-5 mb-3">
                  <label className="mb-2 font-weight-600 font-18-100">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="auth-input height-56 bg-white"
                    placeholder="Full Address"
                  />
                </div>
                <button
                  className="green-btn w-100 ps-3 pe-1 d-flex align-items-center justify-content-center font-18 py-sm-3 user"
                  type="submit"
                >
                  Save Change
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;

const CountrySelect = ({ value, onChange, labels, ...rest }) => (
  <select
    {...rest}
    value={value.match(/[A-Z]/g).join("")}
    onChange={(event) => onChange(event.target.value || undefined)}
  >
    <option value="">{labels["ZZ"]}</option>
    {getCountries().map((country) => (
      <option key={country} value={country}>
        {labels[country].match(/[A-Z]/g).join("")} +
        {getCountryCallingCode(country)}
      </option>
    ))}
  </select>
);
