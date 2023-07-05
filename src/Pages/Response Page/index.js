import React, { useState } from "react";
import UploadIcon from "../../assets/Images/Upload";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../assets/Images/Add";
import { useEffect } from "react";
import { PostResponse } from "../../Api";
import Axios from "../../axios/Axios";
import { toast } from "react-toastify";
import Select from "react-select";

const ResponsivePage = () => {
  const [myArray, setMyArray] = useState([]);
  const [addMorebtn, setAddMoreBtn] = useState(false);
  const [id, setId] = useState();
  const [file, setFile] = useState(null);
  const [allStrains, setAllStrains] = useState();
  const [response, setResponse] = useState({
    userId: "",
    strainType: "",
    grownType: "",
    photo: "",
    strainName: "",
    description: "",
    quantity: "",
  });
  const [selectedImages, setSelectedImages] = useState([]);

  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    setResponse((prevState) => ({
      ...prevState,
      userId: JSON.parse(currentUser)?._id,
    }));
    setId(JSON.parse(currentUser)?._id);
    GetAllStrains();
  }, []);

  const GetAllStrains = async () => {
    try {
      const fetchData = await Axios.get(
        `${process.env.REACT_APP_API_URI}users/getAllStrains`
      );
      setAllStrains(fetchData.data.result);
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };

  const attachFile = (e) => {
    if (e.target.files) {
      let imageFile = e.target.files[0];
      setResponse((prevState) => ({
        ...prevState,
        photo: Array.from(e.target.files),
      }));
      setFile(imageFile?.name);
    }
    const files = Array.from(e.target.files);
    setSelectedImages(files);
  };

  const formHandler = (e) => {
    const { name, value } = e.target;
    setResponse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const clearSavedData = () => {
    localStorage.setItem("savedDataCount", "0");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();

    if (addMorebtn) {
      const updatedArray = [...myArray, response];
      setMyArray(updatedArray);

      updatedArray.forEach((mapData, index) => {
        console.log(mapData);
        data.append("userId", id);
        data.append("strainType", mapData.strainType);
        data.append("grownType", mapData.grownType);
        data.append("description", mapData.description);
        data.append("strainName", mapData.strainName);
        data.append("quantity", mapData.quantity);

        if (Array.isArray(mapData.photo)) {
          mapData.photo.forEach((file, fileIndex) =>
            data.append(`photo-${index}-${fileIndex}`, file)
          );
        } else {
          data.append(`photo-${index}`, mapData.photo);
        }
      });
    } else {
      data.append("userId", id);
      data.append("strainType", response.strainType);
      data.append("grownType", response.grownType);
      data.append("description", response.description);
      data.append("strainName", response.strainName);
      data.append("quantity", response.quantity);

      if (Array.isArray(response.photo)) {
        response.photo.forEach((file, fileIndex) =>
          data.append(`photo-${fileIndex}`, file)
        );
      } else {
        data.append("photo", response.photo);
      }
    }

    PostResponse(data);
    clearSavedData();
  };

  const addMore = () => {
    setAddMoreBtn(true);
    setMyArray((prev) => [...prev, response]);
    setResponse({
      strainType: "",
      grownType: "",
      photo: "",
    });
    setFile(null);
    const savedDataCount =
      JSON.parse(localStorage.getItem("savedDataCount")) || 0;
    localStorage.setItem("savedDataCount", JSON.stringify(savedDataCount + 1));
  };

  const allStrainsData = (allStrains || []).map((strain) => ({
    value: strain?._id,
    label: strain?.strainName || strain?.productName || strain?.event,
  }));

  const [value, setValue] = useState("");
  const StrainTypeHandler = (data) => {
    setValue(data);
    const matchedObject = allStrains.find((obj) => obj?._id === data.value);
    setResponse((prevState) => ({
      ...prevState,
      strainName: matchedObject?.strainName,
      description: matchedObject?.description,
      strainType: matchedObject?.postStrain ? matchedObject?.postStrain : "",
    }));
  };
  return (
    <div className="max-width-792">
      <h2 className="auth-model-heading mb-4 pb-3">
        We’ll help you get started based on your response
      </h2>
      <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
        <div className="form-control h-auto p-0 bg-transparent border-0">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Select Strain
          </label>
          <Select
            onChange={StrainTypeHandler}
            value={value}
            className="searchable-select"
            classNamePrefix="select"
            isDisabled={false}
            isLoading={false}
            isClearable={false}
            isRtl={false}
            isSearchable={true}
            name="color"
            options={allStrainsData}
          />
        </div>
      </div>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="d-flex flex-md-row flex-column align-items-start gap-4 justify-content-between mb-4">
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Name
            </label>
            <input
              onChange={(e) => formHandler(e)}
              type="text"
              className="auth-input"
              placeholder="Enter Name"
              required
              value={response.strainName}
              name="strainName"
            />
            <span className="font-12 text-white">
              If you can’t find your strain in the dropdown menu, write it here
            </span>
          </div>
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Which Strain type do you have?
            </label>
            <select
              className="auth-input"
              required
              name="strainType"
              onChange={(e) => formHandler(e)}
              value={response.strainType}
            >
              <option value={""}>Strain Type</option>
              <option value={"Sativa"}>Sativa</option>
              <option value={"Indica"}>Indica</option>
              <option value={"Hybrid"}>Hybrid</option>
              <option value={"CBD"}>CBD</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Quantity Available for Sharing
            </label>
            <select
              className="auth-input"
              required
              name="quantity"
              onChange={(e) => formHandler(e)}
              value={response.quantity}
            >
              <option value={""}>- Select Quantity-</option>
              <option value={"1-7"}>1-7 Grams</option>
              <option value={"7-14"}>7-14 Grams</option>
              <option value={"14-30"}>14-30 Grams</option>
            </select>
          </div>

          <div className="form-control h-auto p-0 bg-transparent border-0 ">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Grown or Purchased?
            </label>
            <select
              className="auth-input"
              required
              name="grownType"
              onChange={(e) => formHandler(e)}
              value={response.grownType}
            >
              <option value={""}>- Select Option -</option>
              <option value={"Dispensary"}>Dispensary</option>
              <option value={"Grown"}>Grown</option>
            </select>
          </div>
        </div>

        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Description
          </label>
          <textarea
            onChange={(e) => formHandler(e)}
            className="auth-input-textarea"
            placeholder="Enter description here..."
            required
            name="description"
            value={response.description}
          />
        </div>
        <div className="d-flex flex-md-row flex-column align-items-end gap-4 justify-content-between mb-4">
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Upload Images
            </label>
            <label className="upload-file cr-p w-100 ">
              <input
                type="file"
                className="d-none"
                accept=".jpg, .jpeg, .png"
                onChange={(e) => attachFile(e)}
              />
              <div className="d-flex justify-content-center align-items-center h-100 w-100 gap-2">
                <UploadIcon />
                <p className="font-16 font-weight-500">
                  {file === null ? "Choose File / Drag & Drop Here" : file}
                </p>
              </div>
            </label>
          </div>
          <button
            className="add-more bg-transparent border-white text-white gap-2"
            onClick={() => addMore()}
            type="button"
          >
            <AddIcon />
            Add More
          </button>
        </div>
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between  mt-4 pt-3">
          <button
            className="green-btn-outline "
            onClick={() => goBack()}
            type="button"
          >
            Back
          </button>
          <button className="green-btn " type="submit">
            Next
          </button>
        </div>
      </form>
      <p className="text-center text-grey mt-5 font-16">
        Terms of use | Privacy Policy
      </p>
    </div>
  );
};

export default ResponsivePage;
