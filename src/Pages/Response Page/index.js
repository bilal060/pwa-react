import React, { useState } from "react";
import UploadIcon from "../../assets/Images/Upload";
import { useNavigate } from "react-router-dom";

const ResponsivePage = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const attachFile = (e) => {
    if (e.target.files) {
      setFileName(e.target.files[0]?.name);
      let imageFile = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        var myImage = new Image();
        myImage.src = e.target.result;
        setFile(myImage.src);
        return myImage;
      };
    }
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/terms");
  };
  return (
    <div className="max-width-521">
      <h2 className="auth-model-heading mb-4 pb-3">
        We’ll help you get started based on your response
      </h2>
      <form onSubmit={(e) => submitHandler(e)}>
        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Which Strain type do you have?
          </label>
          <select className="auth-input" required>
            <option value={""}>Strain Type</option>
            <option value={"Sativa"}>Sativa</option>
            <option value={"Indica"}>Indica</option>
            <option value={"Hybrid"}>Hybrid</option>
            <option value={"CBD"}>CBD</option>
          </select>
        </div>

        <div className="form-control h-auto p-0 bg-transparent border-0 mb-4">
          <label className="text-white mb-2 font-weight-600 font-18-100">
            Grown or Purchased?
          </label>
          <select className="auth-input" required>
            <option value={""}>- Select Option -</option>
            <option value={"Dispensary"}>Dispensary</option>
            <option value={"Grown"}>Grown</option>
          </select>
        </div>
        <label className="upload-file cr-p w-100">
          <input
            type="file"
            className="d-none"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => attachFile(e)}
          />
          <div className="d-flex justify-content-center align-items-center h-100 w-100 gap-2">
            <UploadIcon />
            <p className="font-16 font-weight-500">
              {fileName === "" ? "Choose File / Drag & Drop Here" : fileName}
            </p>
          </div>
        </label>
        <div className="d-flex flex-sm-row flex-column align-items-center gap-4 justify-content-between  mt-4 pt-3">
          <button className="green-btn-outline " onClick={() => goBack()}>
            Back
          </button>
          <button className="green-btn ">Next</button>
        </div>
      </form>
      <p className="text-center text-grey mt-5 font-16">
        Terms of use | Privacy Policy
      </p>
    </div>
  );
};

export default ResponsivePage;
