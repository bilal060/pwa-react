import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socialuser from "../../assets/Images/social-user.svg";
import Axios from "../../axios/Axios";
import { toast } from "react-toastify";
const SocialUploadPicture = () => {
  const navigate = useNavigate();
  const [mediaFile, setMediaFile] = useState(null);
  const [userData, setuserData] = useState();

  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let userData = JSON.parse(currentUser);
    setuserData(JSON.parse(currentUser));
    setMediaFile(userData?.photo);
  }, [mediaFile]);

  const EditProfileUrl = `${process.env.REACT_APP_API_URI}users/profileUpdate/${userData?._id}`;

  const UploadImage = async (imageData) => {
    try {
      const fetchData = await Axios.patch(EditProfileUrl, imageData);
      localStorage.setItem(
        "userdata",
        JSON.stringify(fetchData?.data?.updateUser)
      );
      toast.success("Image Added Successfully");
      const currentUser = localStorage.getItem("userdata");
      let userData = JSON.parse(currentUser);
      setuserData(JSON.parse(currentUser));
      setMediaFile(userData?.photo);
      navigate("/social/profile");
    } catch (error) {
      toast.error(error?.message);
      console.log(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (mediaFile !== null) {
      setMediaFile(e.target.files[0]);
      const imageData = new FormData();
      imageData.append("photo", e.target.files[0]);
      UploadImage(imageData);
    } else navigate("/social/profile");
  };

  return (
    <div className="py-4 px-4">
      <h3 className="font-24-social font-weight-700 text-center text-white mb-4 pb-3">
        Notice
      </h3>
      <p className="font-14 font-weight-400 text-primary-red mb-3">
        <span className="font-weight-700">Warning:</span> The Following
        inappropriate photos are strictly prohibited and will be removed.
      </p>

      <div className="text-white p-0 font-14 font-weight-400 pt-3">
        <p>1. The person in the photo is nude or minimally clothed.</p>
        <p>2, Photos that contain sexually suggestive poses.</p>
        <p>3, Photos that contain minors, sexual aids, or illegalfetishes.</p>
        <p>4, Photos that contain lewd or profane content.</p>
        <p>
          5, Any other inappropriate content/photos defined in our Terms of
          Service.
        </p>
      </div>

      <div className="d-flex justify-content-center align-items-center my-5">
        <img
          className="h-50 w-50 rounded-3"
          src={
            userData?.photo
              ? `${process.env.REACT_APP_PORT}/${userData.photo}`
              : socialuser
          }
          alt="social-user-img"
        />
      </div>
      <button className="green-btn my-4">User camera</button>
      <label className="green-btn w-100 height-56 cr-p d-flex justify-content-center align-items-center">
        <input
          className="d-none"
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          onChange={(e) => submitHandler(e)}
        />
        <span>Upload Pick from gallery</span>
      </label>
    </div>
  );
};

export default SocialUploadPicture;
