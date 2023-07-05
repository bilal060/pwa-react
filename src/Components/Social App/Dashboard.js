import React, { useEffect, useState } from "react";

import AddSocialUserIcon from "./AddSocialUser";
import SocialChatIcon from "./SocialChatIcon";
import Axios from "../../axios/Axios";

const SocialDashboard = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const currentUser = localStorage.getItem("social-preferences");
    let data = JSON.parse(currentUser);
    Axios.get(
      `${process.env.REACT_APP_API_URI}users/getUserByfilter${
        data
          ? `?${data.looking !== "" ? `&looking=${data?.looking}` : ""}${
              data.age !== "" ? `&age=${data?.age}` : ""
            }${data.address !== "" ? `&address=${data?.address}` : ""}${
              data.sort !== "" ? `&sort=${data?.sort}` : ""
            }`
          : ""
      }`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("user-token")}`,
        },
      }
    )
      .then((response) => {
        console.log(response.data);
        setAllUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }, []);

  return (
    <div className="container">
      <div className="row m-0 px-1">
        {allUsers.length > 0 &&
          allUsers.map((data, index) => {
            return (
              <div className="col-6 px-2 mb-4" key={index}>
                <div className="social-card text-center">
                  <img
                    src={`${process.env.REACT_APP_API_URI}${data.photo}`}
                    alt=""
                    className="w-100 mb-3"
                  />
                  <h3 className="font-16-social font-weight-700 text-dark-black mb-2">
                    {data.fullName}
                  </h3>
                  <p className="font-12 font-weight-500 mt-1 cut-text">
                    <span>{data.location.age}</span>
                    <span>{data.location.gender}</span>
                    <span>{data.location.address}</span>
                  </p>
                  <div className="d-flex justify-content-around align-items-center mt-2 pt-1">
                    <span>
                      <SocialChatIcon />
                    </span>
                    <span
                      data-bs-toggle="modal"
                      href="#exampleModalToggle"
                      role="button"
                    >
                      <AddSocialUserIcon />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content mx-4">
            {/* <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                Modal 1
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div> */}
            <div className="modal-body text-center">
              <h3 className="font-20-social font-weight-900 mb-4 text-dark-black">
                Enable Pust Notification
              </h3>
              <p className="font-16-25 font-weight-500 text-dark-black">
                Looks like your push notifications are disabled! You might be
                missing out a lot! turn notifications back on?
              </p>
              <div className="d-flex gap-3 mt-4 pt-3">
                <button
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  className="green-btn-outline text-primary-green"
                >
                  No Thanks
                </button>
                <button className="green-btn">Yes, Please</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialDashboard;
