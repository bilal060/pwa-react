import React, { useEffect, useState } from "react";
import UploadIcon from "../../assets/Images/Upload";
import AddIcon from "../../assets/Images/Add";
import { useNavigate } from "react-router-dom";
import { PostDispensary } from "../../Api";

const SeedStore = () => {
  const [file, setFile] = useState(null);
  const [addMorebtn, setAddMoreBtn] = useState(false);
  const [arrayData, setArrayData] = useState([]);
  const [id, setId] = useState();
  const [dispensary, setDispensary] = useState({
    postStrain: "",
    quantity: "",
    cost: "",
    strainName: "",
    description: "",
    photo: "",
  });
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    setDispensary((prevState) => ({
      ...prevState,
      userId: JSON.parse(currentUser)._id,
    }));
    setId(JSON.parse(currentUser)._id);
  }, []);

  const formHandler = (e) => {
    const { name, value } = e.target;
    setDispensary((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const attachFile = (e) => {
    if (e.target.files) {
      let imageFile = e.target.files[0];
      setDispensary((prevState) => ({
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
    setArrayData((prev) => [...prev, dispensary]);
    setDispensary({
      postStrain: "",
      quantity: "",
      cost: "",
      strainName: "",
      description: "",
      photo: "",
    });
    setFile(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    if (addMorebtn) {
      setArrayData((prev) => [...prev, dispensary]);
      arrayData.forEach((mapData) => {
        data.append("userId", id);
        data.append("postStrain", mapData.postStrain);
        data.append("quantity", mapData.quantity);
        data.append("cost", mapData.cost);
        data.append("strainName", mapData.strainName);
        data.append("description", mapData.description);
        data.append("photo", mapData.photo);
      });
    } else {
      data.append("userId", id);
      data.append("postStrain", dispensary.postStrain);
      data.append("quantity", dispensary.quantity);
      data.append("cost", dispensary.cost);
      data.append("strainName", dispensary.strainName);
      data.append("description", dispensary.description);
      data.append("photo", dispensary.photo);
    }
    PostDispensary(data);
  };

  return (
    <div className="max-width-792">
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Post Strain
            </label>
            <select
              className="auth-input"
              required
              name="postStrain"
              value={dispensary.postStrain}
              onChange={(e) => formHandler(e)}
            >
              <option value={""}>- Select Strain -</option>
              <option value="Sativa">Sativa</option>
              <option value="Indica">Indica</option>
              <option value="Hybrid">Hybrid</option>
              <option value="CBD">CBD</option>
            </select>
          </div>
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Quantity
            </label>
            <select
              className="auth-input"
              required
              value={dispensary.quantity}
              name="quantity"
              onChange={(e) => formHandler(e)}
            >
              <option value={""}>- Select Quantity -</option>
              <option value={"1-5"}>1-5 </option>
              <option value={"4-10"}>5-10 </option>
              <option value={"10-15"}>10-15</option>
              <option value={"15-20"}>15-20</option>
              <option value={"20-30"}>20-30</option>
            </select>
          </div>
        </div>
        <div className="d-flex flex-md-row flex-column align-items-center gap-4 justify-content-between mb-4">
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Cost
            </label>
            <input
              onChange={(e) => formHandler(e)}
              type="number"
              className="auth-input"
              placeholder="$ Enter Cost"
              required
              value={dispensary.cost}
              name="cost"
            />
          </div>
          <div className="form-control h-auto p-0 bg-transparent border-0">
            <label className="text-white mb-2 font-weight-600 font-18-100">
              Strain Name
            </label>
            <input
              onChange={(e) => formHandler(e)}
              type="text"
              className="auth-input"
              placeholder="Enter Strain Name"
              required
              value={dispensary.strainName}
              name="strainName"
            />
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
            value={dispensary.description}
          />
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
            onClick={() => addMore()}
            type="button"
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
      <p className="text-center text-grey mt-5">
        Terms of use | Privacy Policy
      </p>
    </div>
  );
};

export default SeedStore;
