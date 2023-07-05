import React, { useState } from "react";
import UploadIcon from "../../assets/Images/Upload";
import AddIcon from "../../assets/Images/Add";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { PostHeadShop } from "../../Api";

const HeadShop = () => {
  const [file, setFile] = useState(null);
  const [addMorebtn, setAddMoreBtn] = useState(false);
  const [arrayData, setArrayData] = useState([]);
  const [id, setId] = useState();
  const [headShop, setHeadShop] = useState({
    accessories: "",
    type: "",
    cost: "",
    brandName: "",
    productName: "",
    size: "",
    photo: "",
  });
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    setHeadShop((prevState) => ({
      ...prevState,
      userId: JSON.parse(currentUser)?._id,
    }));
    setId(JSON.parse(currentUser)?._id);
  }, []);

  const formHandler = (e) => {
    const { name, value } = e.target;
    setHeadShop((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const attachFile = (e) => {
    if (e.target.files) {
      let imageFile = e.target.files[0];
      setHeadShop((prevState) => ({
        ...prevState,
        photo: imageFile,
      }));
      setFile(imageFile.name);
    }
  };

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const addMore = () => {
    setAddMoreBtn(true);
    setArrayData((prev) => [...prev, headShop]);
    setHeadShop({
      accessories: "",
      type: "",
      cost: "",
      brandName: "",
      productName: "",
      size: "",
      photo: "",
    });
    setFile(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    if (addMorebtn) {
      setArrayData((prev) => [...prev, headShop]);
      arrayData.forEach((mapData) => {
        data.append("userId", id);
        data.append("accessories", mapData.accessories);
        data.append("type", mapData.type);
        data.append("cost", mapData.cost);
        data.append("brandName", mapData.brandName);
        data.append("productName", mapData.productName);
        data.append("size", mapData.size);
        data.append("photo", mapData.photo);
      });
    } else {
      data.append("userId", id);
      data.append("accessories", headShop.accessories);
      data.append("type", headShop.type);
      data.append("cost", headShop.cost);
      data.append("brandName", headShop.brandName);
      data.append("productName", headShop.productName);
      data.append("size", headShop.size);
      data.append("photo", headShop.photo);
    }
    PostHeadShop(data);
    console.log(headShop);
  };

  return (
    <div className="max-width-792">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Select Accessories
            </label>
            <select
              className="auth-input"
              required
              name="accessories"
              value={headShop.accessories}
              onChange={(e) => {
                formHandler(e);
                setHeadShop((prevState) => ({
                  ...prevState,
                  type: "",
                  size: "",
                }));
              }}
            >
              <option value={""}>- Select Strain -</option>
              <option value="Bongs/Rigs">Bongs / Rigs</option>
              <option value="Grinders">Grinders</option>
              <option value="Papers/Blunts">Papers / Blunts</option>
              <option value="Vaporizers">Vaporizers</option>
            </select>
          </div>
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Select Type
            </label>
            <select
              className="auth-input"
              required
              name="type"
              value={headShop.type}
              onChange={(e) => formHandler(e)}
            >
              <option value={""}>- Select Type -</option>
              {headShop.accessories === "Bongs/Rigs" && (
                <>
                  <option value="Glass">Bongs / Rigs</option>
                  <option value="Acrylic">Acrylic</option>
                  <option value="Under100$">Under 100$</option>
                  <option value="Over100$">Over 100$</option>
                </>
              )}

              {headShop.accessories === "Grinders" && (
                <>
                  <option value="Glass">Glass</option>
                  <option value="Plastic">Plastic</option>
                  <option value="Wood">Wood</option>
                </>
              )}

              {headShop.accessories === "Papers/Blunts" && (
                <>
                  <option value="Papers">Papers</option>
                  <option value="Blunts">Blunts</option>
                  <option value="Flavored">Flavored</option>
                </>
              )}

              {headShop.accessories === "Vaporizers" && (
                <>
                  <option value="Flower">Flower</option>
                  <option value="Concentrate">Concentrate</option>
                  <option value="Flower&Concentrate">
                    Flower & Concentrate
                  </option>
                </>
              )}
            </select>
          </div>
        </div>
        <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Cost
            </label>
            <input
              name="cost"
              type="number"
              className="auth-input"
              required
              placeholder="$ Enter Cost"
              onChange={(e) => formHandler(e)}
            />
          </div>
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Brand Name
            </label>
            <input
              name="brandName"
              type="text"
              className="auth-input"
              placeholder="Enter Brand Name"
              required
              onChange={(e) => formHandler(e)}
            />
          </div>
        </div>
        <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Product Name
            </label>
            <input
              type="text"
              className="auth-input"
              placeholder="Enter Product Name"
              name="productName"
              required
              onChange={(e) => formHandler(e)}
            />
          </div>
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Select Size
            </label>
            <select
              className="auth-input"
              required
              name="size"
              value={headShop.size}
              onChange={(e) => formHandler(e)}
            >
              <option value={""}>- Select Type -</option>
              {headShop.accessories === "Bongs/Rigs" && (
                <>
                  <option value="small">Small &gt; 8 Inches</option>
                  <option value="medium">Medium 8-14 Inches</option>
                  <option value="large">Large 14-20 Inches</option>
                  <option value="extralarge">Extra Large 20+ Inches</option>
                </>
              )}

              {headShop.accessories === "Grinders" && (
                <>
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </>
              )}

              {headShop.accessories === "Papers/Blunts" && (
                <>
                  <option value="singlewide">Single Wide</option>
                  <option value="doublewide">Double Wide</option>
                  <option value="kingsize">King Size</option>
                  <option value="kingsizeslim">King Size Slim</option>
                </>
              )}

              {headShop.accessories === "Vaporizers" && (
                <>
                  <option value="small">Small &gt; 8 Inches</option>
                  <option value="medium">Medium 8-14 Inches</option>
                  <option value="large">Large 14-20 Inches</option>
                  <option value="extralarge">Extra Large 20+ Inches</option>
                </>
              )}
            </select>
          </div>
        </div>

        <label className="text-white mb-2 font-weight-600 font-18-100">
          Upload Images
        </label>
        <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
          <label className="upload-file cr-p">
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
          <button
            className="add-more bg-transparent border-white text-white gap-2"
            type="button"
            onClick={() => addMore()}
          >
            <AddIcon />
            Add More Strain
          </button>
        </div>
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-center  mt-5">
          <button
            className="green-btn-outline custom-w min-width-208"
            onClick={() => goBack()}
            type="button"
          >
            Back
          </button>
          <button className="green-btn custom-w min-width-208" type="submit">
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

export default HeadShop;
