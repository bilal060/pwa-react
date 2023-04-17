import React from 'react'
import { useState } from 'react';
import MobSearchIcon from '../../assets/Images/MobSearch';
import User from '../../assets/Images/sidelink-user.svg';

const chats = [
    {
        name: "Raza Awan",
        id: 1,
        lastmessage: "okk",
    },
    {
        name: "Raza Awan",
        id: 2,
        lastmessage: "okk",
    },
    {
        name: "Raza Awan",
        id: 3,
        lastmessage: "okk",
    },
    {
        name: "Raza Awan",
        id: 4,
        lastmessage: "okk",
    },
    {
        name: "Raza Awan",
        id: 5,
        lastmessage: "okk",
    },
    {
        name: "Raza Awan",
        id: 6,
        lastmessage: "okk",
    },
    {
        name: "Raza Awan",
        id: 7,
        lastmessage: "okk",
    },
    {
        name: "Raza Awan",
        id: 8,
        lastmessage: "okk",
    },
    {
        name: "Raza Awan",
        id: 9,
        lastmessage: "okk",
    },
    {
        name: "Raza Awan",
        id: 10,
        lastmessage: "okk",
    },
];
const chatsdetail = [
    {
        id: 1,
        name: "Raza Awan",
    },
    {
        id: 2,
        name: "Raza Awan",
    },
    {
        id: 3,
        name: "Raza Awan",
    },
    {
        id: 4,
        name: "Raza Awan",
    },
    {
        id: 5,
        name: "Raza Awan",
    },
    {
        id: 6,
        name: "Raza Awan",
    },
    {
        id: 7,
        name: "Raza Awan",
    },
    {
        id: 8,
        name: "Raza Awan",
    },
    {
        id: 9,
        name: "Raza Awan",
    },
    {
        id: 10,
        name: "Raza Awan",
    },
];
const Chat = () => {
    const [responsiveChat, setResponsiveChat] = useState(false);

    const [fileName, setFileName] = useState('');
    const attachFile = (e) => {
        if (e.target.files) {
            setFileName(e.target.files[0]?.name)
            let imageFile = e.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(imageFile);
            reader.onloadend = function (e) {
                var myImage = new Image();
                myImage.src = e.target.result;
                return myImage
            }
        }
    }
    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className='product-user-profile'>
            <div className='container mx-auto'>
                <div className='ps-12 pe-12 position-relative'>
                    <div className='row m-0'>
                        {!responsiveChat && <div className='col-md-5 col-12'>
                            <div className='seed-card flex-column px-0'>
                                <div className='recent-chats-header mx-4 pb-4'>
                                    <div className='search-product'>
                                        <input placeholder='Search User ' className='w-75 border-0 outline-0 bg-transparent' />
                                        <span className='icon-green-bg'><MobSearchIcon /></span>
                                    </div>
                                </div>
                                {/* <Link to={`/chat#${hashId}`}></Link> */}
                                <div className='recent-chats-detail'>
                                    {/* <ul className=" nav nav-pills flex-column align-items-end m-0 h-100 flex-nowrap " id="pills-tab" role="tablist">
                                        <li className="nav-item w-100" role="presentation">
                                            <button className="nav-link product-item bg-white  rounded-0 w-100 justify-content-start h-auto active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                <div className='d-flex align-items-center w-100 gap-2' type="button">
                                                    <img src={User} alt='' className='side-link-user-img' />
                                                    <div className='py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start user-name'>
                                                        <div className='d-flex align-items-center justify-content-between w-100 gap-2'>
                                                            <h3 className='font-18 font-weight-700'>Tony Stark</h3>
                                                            <p className='font-12 font-weight-500'>March, 23 2023</p>
                                                        </div>
                                                        <p className='font-14 font-weight-500'>Retailer</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item w-100" role="presentation">
                                            <button className="nav-link product-item bg-white  rounded-0 w-100 justify-content-start h-auto" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                                <div className='d-flex align-items-center w-100 gap-2' type="button">
                                                    <img src={User} alt='' className='side-link-user-img' />
                                                    <div className='user-name py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start'>
                                                        <div className='d-flex align-items-center justify-content-between w-100 gap-2'>
                                                            <h3 className='font-18 font-weight-700'>Tony Stark</h3>
                                                            <p className='font-12 font-weight-500'>March, 23 2023</p>
                                                        </div>
                                                        <p className='font-14 font-weight-500'>Retailer</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item w-100" role="presentation">
                                            <button className="nav-link product-item bg-white  rounded-0 w-100 justify-content-start h-auto" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                                <div className='d-flex align-items-center w-100 gap-2' type="button">
                                                    <img src={User} alt='' className='side-link-user-img' />
                                                    <div className='user-name py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start'>
                                                        <div className='d-flex align-items-center justify-content-between w-100 gap-2'>
                                                            <h3 className='font-18 font-weight-700'>Tony Stark</h3>
                                                            <p className='font-12 font-weight-500'>March, 23 2023</p>
                                                        </div>
                                                        <p className='font-14 font-weight-500'>Retailer</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item w-100" role="presentation">
                                            <button className="nav-link product-item bg-white  rounded-0 w-100 justify-content-start h-auto" id="pills-rig-tab" data-bs-toggle="pill" data-bs-target="#pills-rig" type="button" role="tab" aria-controls="pills-rig" aria-selected="false">
                                                <div className='d-flex align-items-center w-100 gap-2' type="button">
                                                    <img src={User} alt='' className='side-link-user-img' />
                                                    <div className='user-name py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start'>
                                                        <div className='d-flex align-items-center justify-content-between w-100 gap-2'>
                                                            <h3 className='font-18 font-weight-700'>Tony Stark</h3>
                                                            <p className='font-12 font-weight-500'>March, 23 2023</p>
                                                        </div>
                                                        <p className='font-14 font-weight-500'>Retailer</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item w-100" role="presentation">
                                            <button className="nav-link product-item bg-white  rounded-0 w-100 justify-content-start h-auto" id="pills-rig-tab" data-bs-toggle="pill" data-bs-target="#pills-rig" type="button" role="tab" aria-controls="pills-rig" aria-selected="false">
                                                <div className='d-flex align-items-center w-100 gap-2' type="button">
                                                    <img src={User} alt='' className='side-link-user-img' />
                                                    <div className=' user-name py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start'>
                                                        <div className='d-flex align-items-center justify-content-between w-100 gap-2'>
                                                            <h3 className='font-18 font-weight-700'>Tony Stark</h3>
                                                            <p className='font-12 font-weight-500'>March, 23 2023</p>
                                                        </div>
                                                        <p className='font-14 font-weight-500'>Retailer</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                        <li className="nav-item w-100" role="presentation">
                                            <button className="nav-link product-item bg-white  rounded-0 w-100 justify-content-start h-auto" id="pills-rig-tab" data-bs-toggle="pill" data-bs-target="#pills-rig" type="button" role="tab" aria-controls="pills-rig" aria-selected="false">
                                                <div className='d-flex align-items-center w-100 gap-2' type="button">
                                                    <img src={User} alt='' className='side-link-user-img' />
                                                    <div className='border-bottom py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start'>
                                                        <div className='d-flex align-items-center justify-content-between w-100 gap-2'>
                                                            <h3 className='font-18 font-weight-700'>Tony Stark</h3>
                                                            <p className='font-12 font-weight-500'>March, 23 2023</p>
                                                        </div>
                                                        <p className='font-14 font-weight-500'>Retailer</p>
                                                    </div>
                                                </div>
                                            </button>
                                        </li>
                                    </ul> */}
                                    <div
                                        className="nav flex-column nav-pills "
                                        id="v-pills-tab"
                                        role="tablist"
                                        aria-orientation="vertical"
                                    >
                                        {chats.map((data, index) => {
                                            return (
                                                <>
                                                    <button
                                                        key={data.id}
                                                        className="nav-link w-100  product-item bg-white  rounded-0 w-100 justify-content-start h-auto d-md-flex d-none"
                                                        id={`v-pills-${data.id}-tab`}
                                                        data-toggle="pill"
                                                        href={`#v-pills-${data.id}`}
                                                        role="tab"
                                                        aria-controls={`v-pills-${data.id}`}
                                                        aria-selected="true"
                                                    >
                                                        <div className='d-flex align-items-center w-100 gap-2' type="button">
                                                            <img src={User} alt='' className='side-link-user-img' />
                                                            <div className='user-name py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start'>
                                                                <div className='d-flex align-items-center justify-content-between w-100 gap-2'>
                                                                    <h3 className='font-18 font-weight-700'>{data.name}</h3>
                                                                    <p className='font-12 font-weight-500'>{time}</p>
                                                                </div>
                                                                <p className='font-14 font-weight-500'>Retailer</p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button
                                                        key={index}
                                                        className="nav-link w-100  product-item bg-white  rounded-0 w-100 justify-content-start h-auto d-md-none d-flex"
                                                        id={`v-pills-${data.id}-tab`}
                                                        data-toggle="pill"
                                                        href={`#v-pills-${data.id}`}
                                                        role="tab"
                                                        aria-controls={`v-pills-${data.id}`}
                                                        aria-selected="true"
                                                        onClick={() => setResponsiveChat(!responsiveChat)}
                                                    >
                                                        <div className='d-flex align-items-center w-100 gap-2' type="button">
                                                            <img src={User} alt='' className='side-link-user-img' />
                                                            <div className='user-name py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start'>
                                                                <div className='d-flex align-items-center justify-content-between w-100 gap-2'>
                                                                    <h3 className='font-18 font-weight-700'>{data.name}</h3>
                                                                    <p className='font-12 font-weight-500'>{time}</p>
                                                                </div>
                                                                <p className='font-14 font-weight-500'>Retailer</p>
                                                            </div>
                                                        </div>
                                                    </button>
                                                </>
                                            );
                                        })}
                                    </div>

                                </div>
                            </div>
                        </div>}
                        <div className='col-md-7 col-12'>
                            {<div className='seed-card h-100 d-sm-flex d-none'>
                                {/* <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active h-100" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div>
                                            <div className='d-flex align-items-center justify-content-enduser-name pb-4 mb-4 chat-detail-header' type="button">
                                                <img src={User} alt='' className='side-link-user-img' />
                                                <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                                                    <h3 className='font-18 font-weight-700'>Tony Stark</h3>
                                                    <p className='font-14 font-weight-500 text-grey'>Available</p>
                                                </div>
                                            </div>
                                            <div className='chat-detail-body'>

                                                <div className='new-msg d-flex flex-column gap-3 '>
                                                    <div className='send-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='rcv-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='send-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='rcv-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-center chatbox-footer'>
                                                <div className='bg-primary-green w-max-content p-3 rounded-4'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M5.55604 24H18.444C21.8381 24 23.1908 21.972 23.3507 19.5L23.9902 9.588C24.1624 6.996 22.0472 4.8 19.3786 4.8C18.6284 4.8 17.9398 4.38 17.5954 3.732L16.71 1.992C16.1443 0.9 14.6686 0 13.4142 0H10.5981C9.33141 0 7.8557 0.9 7.29001 1.992L6.40458 3.732C6.06025 4.38 5.37158 4.8 4.62142 4.8C1.95284 4.8 -0.162353 6.996 0.00981355 9.588L0.64929 19.5C0.796862 21.972 2.1619 24 5.55604 24Z" fill="white" />
                                                        <path d="M13.8421 8.10078H10.1528C9.64859 8.10078 9.23047 7.69278 9.23047 7.20078C9.23047 6.70878 9.64859 6.30078 10.1528 6.30078H13.8421C14.3463 6.30078 14.7644 6.70878 14.7644 7.20078C14.7644 7.69278 14.3463 8.10078 13.8421 8.10078Z" fill="white" />
                                                        <path d="M11.9964 19.3571C14.2921 19.3571 16.153 17.5412 16.153 15.3011C16.153 13.0611 14.2921 11.2451 11.9964 11.2451C9.70082 11.2451 7.83984 13.0611 7.83984 15.3011C7.83984 17.5412 9.70082 19.3571 11.9964 19.3571Z" fill="white" />
                                                    </svg>

                                                </div>
                                                <div className='send-message-box w-100'>
                                                    <textarea
                                                        placeholder="Type a message"
                                                        className="chatbox w-100"
                                                        name="chatbox"
                                                        minLength="2"
                                                    ></textarea>
                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.9785 3.01565C20.4397 2.47605 19.2341 2.10917 17.108 2.81784L6.79979 6.25393C6.79952 6.25402 6.80006 6.25384 6.79979 6.25393C5.14436 6.80775 3.99685 7.41951 3.28792 8.00537C2.57466 8.59481 2.42862 9.04571 2.42862 9.3084C2.42862 9.57071 2.57428 10.0206 3.28694 10.6083C3.99559 11.1927 5.1422 11.8022 6.79797 12.3532L9.85863 13.3734C10.2212 13.4942 10.5058 13.7788 10.6266 14.1414L11.6466 17.2014C12.1975 18.8568 12.8078 20.0039 13.3929 20.7124C13.9812 21.425 14.4324 21.5714 14.6962 21.5714C14.9599 21.5714 15.4111 21.425 15.9995 20.7124C16.5846 20.0039 17.1946 18.8574 17.7455 17.202L21.1813 6.89468C21.1811 6.89501 21.1814 6.89434 21.1813 6.89468C21.8842 4.76825 21.5188 3.55671 20.9785 3.01565ZM22.6971 1.29964C24.1877 2.79245 24.3136 5.15776 23.487 7.65722L20.0499 17.9688C20.0498 17.969 20.0499 17.9686 20.0499 17.9688C19.4471 19.78 18.7183 21.2341 17.8721 22.2588C17.0292 23.2797 15.9564 24 14.6962 24C13.436 24 12.3632 23.2797 11.5202 22.2588C10.674 21.2341 9.94537 19.7806 9.34266 17.9694C9.34259 17.9692 9.34273 17.9696 9.34266 17.9694L8.51464 15.4854L6.03119 14.6575C6.03099 14.6575 6.03139 14.6576 6.03119 14.6575C4.22039 14.0549 2.76647 13.327 1.74181 12.482C0.721051 11.6403 0 10.5685 0 9.3084C0 8.04865 0.720665 6.97635 1.74083 6.13329C2.76521 5.28674 4.21839 4.55652 6.02937 3.95075L16.3401 0.513856C18.8406 -0.319646 21.205 -0.194728 22.6971 1.29964Z" fill="#5D8B2F" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.9112 8.78415C15.386 9.25771 15.3871 10.0266 14.9136 10.5014L10.5663 14.8608C10.0928 15.3357 9.32393 15.3368 8.84905 14.8632C8.37417 14.3896 8.3731 13.6208 8.84665 13.1459L13.1939 8.78655C13.6674 8.31167 14.4363 8.3106 14.9112 8.78415Z" fill="#5D8B2F" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                                    </div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                                    </div>
                                    <div className="tab-pane fade" id="pills-rig" role="tabpanel" aria-labelledby="pills-rig-tab">
                                    </div>
                                </div> */}
                                {chatsdetail.map((chatsdetail, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="tab-pane fade  chat-detail"
                                            id={`v-pills-${chatsdetail.id}`}
                                            role="tabpanel"
                                            aria-labelledby={`v-pills-${chatsdetail.id}-tab`}
                                        >
                                            <div className='d-flex align-items-center justify-content-enduser-name pb-4 mb-4 chat-detail-header' type="button">
                                                <img src={User} alt='' className='side-link-user-img' />
                                                <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                                                    <h3 className='font-18 font-weight-700'>Tony Stark</h3>
                                                    <p className='font-14 font-weight-500 text-grey'>Available</p>
                                                </div>
                                            </div>
                                            <div className='chat-detail-body'>

                                                <div className='new-msg d-flex flex-column gap-3 '>
                                                    <div className='send-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='rcv-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='send-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='rcv-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-center chatbox-footer'>
                                                <div className='bg-primary-green w-max-content p-3 rounded-4'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M5.55604 24H18.444C21.8381 24 23.1908 21.972 23.3507 19.5L23.9902 9.588C24.1624 6.996 22.0472 4.8 19.3786 4.8C18.6284 4.8 17.9398 4.38 17.5954 3.732L16.71 1.992C16.1443 0.9 14.6686 0 13.4142 0H10.5981C9.33141 0 7.8557 0.9 7.29001 1.992L6.40458 3.732C6.06025 4.38 5.37158 4.8 4.62142 4.8C1.95284 4.8 -0.162353 6.996 0.00981355 9.588L0.64929 19.5C0.796862 21.972 2.1619 24 5.55604 24Z" fill="white" />
                                                        <path d="M13.8421 8.10078H10.1528C9.64859 8.10078 9.23047 7.69278 9.23047 7.20078C9.23047 6.70878 9.64859 6.30078 10.1528 6.30078H13.8421C14.3463 6.30078 14.7644 6.70878 14.7644 7.20078C14.7644 7.69278 14.3463 8.10078 13.8421 8.10078Z" fill="white" />
                                                        <path d="M11.9964 19.3571C14.2921 19.3571 16.153 17.5412 16.153 15.3011C16.153 13.0611 14.2921 11.2451 11.9964 11.2451C9.70082 11.2451 7.83984 13.0611 7.83984 15.3011C7.83984 17.5412 9.70082 19.3571 11.9964 19.3571Z" fill="white" />
                                                    </svg>

                                                </div>
                                                <div className='send-message-box w-100'>
                                                    <textarea
                                                        placeholder="Type a message"
                                                        className="chatbox w-100"
                                                        name="chatbox"
                                                        minLength="2"
                                                    ></textarea>
                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.9785 3.01565C20.4397 2.47605 19.2341 2.10917 17.108 2.81784L6.79979 6.25393C6.79952 6.25402 6.80006 6.25384 6.79979 6.25393C5.14436 6.80775 3.99685 7.41951 3.28792 8.00537C2.57466 8.59481 2.42862 9.04571 2.42862 9.3084C2.42862 9.57071 2.57428 10.0206 3.28694 10.6083C3.99559 11.1927 5.1422 11.8022 6.79797 12.3532L9.85863 13.3734C10.2212 13.4942 10.5058 13.7788 10.6266 14.1414L11.6466 17.2014C12.1975 18.8568 12.8078 20.0039 13.3929 20.7124C13.9812 21.425 14.4324 21.5714 14.6962 21.5714C14.9599 21.5714 15.4111 21.425 15.9995 20.7124C16.5846 20.0039 17.1946 18.8574 17.7455 17.202L21.1813 6.89468C21.1811 6.89501 21.1814 6.89434 21.1813 6.89468C21.8842 4.76825 21.5188 3.55671 20.9785 3.01565ZM22.6971 1.29964C24.1877 2.79245 24.3136 5.15776 23.487 7.65722L20.0499 17.9688C20.0498 17.969 20.0499 17.9686 20.0499 17.9688C19.4471 19.78 18.7183 21.2341 17.8721 22.2588C17.0292 23.2797 15.9564 24 14.6962 24C13.436 24 12.3632 23.2797 11.5202 22.2588C10.674 21.2341 9.94537 19.7806 9.34266 17.9694C9.34259 17.9692 9.34273 17.9696 9.34266 17.9694L8.51464 15.4854L6.03119 14.6575C6.03099 14.6575 6.03139 14.6576 6.03119 14.6575C4.22039 14.0549 2.76647 13.327 1.74181 12.482C0.721051 11.6403 0 10.5685 0 9.3084C0 8.04865 0.720665 6.97635 1.74083 6.13329C2.76521 5.28674 4.21839 4.55652 6.02937 3.95075L16.3401 0.513856C18.8406 -0.319646 21.205 -0.194728 22.6971 1.29964Z" fill="#5D8B2F" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.9112 8.78415C15.386 9.25771 15.3871 10.0266 14.9136 10.5014L10.5663 14.8608C10.0928 15.3357 9.32393 15.3368 8.84905 14.8632C8.37417 14.3896 8.3731 13.6208 8.84665 13.1459L13.1939 8.78655C13.6674 8.31167 14.4363 8.3106 14.9112 8.78415Z" fill="#5D8B2F" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                    );
                                })}
                            </div>}
                            { !responsiveChat && <div className='seed-card h-100 d-sm-none d-flex'>
                                {/* <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active h-100" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                        <div>
                                            <div className='d-flex align-items-center justify-content-enduser-name pb-4 mb-4 chat-detail-header' type="button">
                                                <img src={User} alt='' className='side-link-user-img' />
                                                <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                                                    <h3 className='font-18 font-weight-700'>Tony Stark</h3>
                                                    <p className='font-14 font-weight-500 text-grey'>Available</p>
                                                </div>
                                            </div>
                                            <div className='chat-detail-body'>

                                                <div className='new-msg d-flex flex-column gap-3 '>
                                                    <div className='send-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='rcv-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='send-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='rcv-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-center chatbox-footer'>
                                                <div className='bg-primary-green w-max-content p-3 rounded-4'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M5.55604 24H18.444C21.8381 24 23.1908 21.972 23.3507 19.5L23.9902 9.588C24.1624 6.996 22.0472 4.8 19.3786 4.8C18.6284 4.8 17.9398 4.38 17.5954 3.732L16.71 1.992C16.1443 0.9 14.6686 0 13.4142 0H10.5981C9.33141 0 7.8557 0.9 7.29001 1.992L6.40458 3.732C6.06025 4.38 5.37158 4.8 4.62142 4.8C1.95284 4.8 -0.162353 6.996 0.00981355 9.588L0.64929 19.5C0.796862 21.972 2.1619 24 5.55604 24Z" fill="white" />
                                                        <path d="M13.8421 8.10078H10.1528C9.64859 8.10078 9.23047 7.69278 9.23047 7.20078C9.23047 6.70878 9.64859 6.30078 10.1528 6.30078H13.8421C14.3463 6.30078 14.7644 6.70878 14.7644 7.20078C14.7644 7.69278 14.3463 8.10078 13.8421 8.10078Z" fill="white" />
                                                        <path d="M11.9964 19.3571C14.2921 19.3571 16.153 17.5412 16.153 15.3011C16.153 13.0611 14.2921 11.2451 11.9964 11.2451C9.70082 11.2451 7.83984 13.0611 7.83984 15.3011C7.83984 17.5412 9.70082 19.3571 11.9964 19.3571Z" fill="white" />
                                                    </svg>

                                                </div>
                                                <div className='send-message-box w-100'>
                                                    <textarea
                                                        placeholder="Type a message"
                                                        className="chatbox w-100"
                                                        name="chatbox"
                                                        minLength="2"
                                                    ></textarea>
                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.9785 3.01565C20.4397 2.47605 19.2341 2.10917 17.108 2.81784L6.79979 6.25393C6.79952 6.25402 6.80006 6.25384 6.79979 6.25393C5.14436 6.80775 3.99685 7.41951 3.28792 8.00537C2.57466 8.59481 2.42862 9.04571 2.42862 9.3084C2.42862 9.57071 2.57428 10.0206 3.28694 10.6083C3.99559 11.1927 5.1422 11.8022 6.79797 12.3532L9.85863 13.3734C10.2212 13.4942 10.5058 13.7788 10.6266 14.1414L11.6466 17.2014C12.1975 18.8568 12.8078 20.0039 13.3929 20.7124C13.9812 21.425 14.4324 21.5714 14.6962 21.5714C14.9599 21.5714 15.4111 21.425 15.9995 20.7124C16.5846 20.0039 17.1946 18.8574 17.7455 17.202L21.1813 6.89468C21.1811 6.89501 21.1814 6.89434 21.1813 6.89468C21.8842 4.76825 21.5188 3.55671 20.9785 3.01565ZM22.6971 1.29964C24.1877 2.79245 24.3136 5.15776 23.487 7.65722L20.0499 17.9688C20.0498 17.969 20.0499 17.9686 20.0499 17.9688C19.4471 19.78 18.7183 21.2341 17.8721 22.2588C17.0292 23.2797 15.9564 24 14.6962 24C13.436 24 12.3632 23.2797 11.5202 22.2588C10.674 21.2341 9.94537 19.7806 9.34266 17.9694C9.34259 17.9692 9.34273 17.9696 9.34266 17.9694L8.51464 15.4854L6.03119 14.6575C6.03099 14.6575 6.03139 14.6576 6.03119 14.6575C4.22039 14.0549 2.76647 13.327 1.74181 12.482C0.721051 11.6403 0 10.5685 0 9.3084C0 8.04865 0.720665 6.97635 1.74083 6.13329C2.76521 5.28674 4.21839 4.55652 6.02937 3.95075L16.3401 0.513856C18.8406 -0.319646 21.205 -0.194728 22.6971 1.29964Z" fill="#5D8B2F" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.9112 8.78415C15.386 9.25771 15.3871 10.0266 14.9136 10.5014L10.5663 14.8608C10.0928 15.3357 9.32393 15.3368 8.84905 14.8632C8.37417 14.3896 8.3731 13.6208 8.84665 13.1459L13.1939 8.78655C13.6674 8.31167 14.4363 8.3106 14.9112 8.78415Z" fill="#5D8B2F" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                                    </div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

                                    </div>
                                    <div className="tab-pane fade" id="pills-rig" role="tabpanel" aria-labelledby="pills-rig-tab">
                                    </div>
                                </div> */}
                                {chatsdetail.map((chatsdetail, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="tab-pane fade  chat-detail"
                                            id={`v-pills-${chatsdetail.id}`}
                                            role="tabpanel"
                                            aria-labelledby={`v-pills-${chatsdetail.id}-tab`}
                                        >
                                            <div className='d-flex align-items-center justify-content-enduser-name pb-4 mb-4 chat-detail-header' type="button">
                                                <img src={User} alt='' className='side-link-user-img' />
                                                <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                                                    <h3 className='font-18 font-weight-700'>Tony Stark</h3>
                                                    <p className='font-14 font-weight-500 text-grey'>Available</p>
                                                </div>
                                            </div>
                                            <div className='chat-detail-body'>

                                                <div className='new-msg d-flex flex-column gap-3 '>
                                                    <div className='send-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='rcv-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='send-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                    <div className='rcv-msg'>
                                                        <div className='msg'>
                                                            Lorem ipsum dolor sit amet consectetur.
                                                            <span className='d-flex justify-content-end font-12 pt-1 text-grey'>{time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='d-flex align-items-center chatbox-footer'>
                                                <div className='bg-primary-green w-max-content p-3 rounded-4'>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path opacity="0.4" d="M5.55604 24H18.444C21.8381 24 23.1908 21.972 23.3507 19.5L23.9902 9.588C24.1624 6.996 22.0472 4.8 19.3786 4.8C18.6284 4.8 17.9398 4.38 17.5954 3.732L16.71 1.992C16.1443 0.9 14.6686 0 13.4142 0H10.5981C9.33141 0 7.8557 0.9 7.29001 1.992L6.40458 3.732C6.06025 4.38 5.37158 4.8 4.62142 4.8C1.95284 4.8 -0.162353 6.996 0.00981355 9.588L0.64929 19.5C0.796862 21.972 2.1619 24 5.55604 24Z" fill="white" />
                                                        <path d="M13.8421 8.10078H10.1528C9.64859 8.10078 9.23047 7.69278 9.23047 7.20078C9.23047 6.70878 9.64859 6.30078 10.1528 6.30078H13.8421C14.3463 6.30078 14.7644 6.70878 14.7644 7.20078C14.7644 7.69278 14.3463 8.10078 13.8421 8.10078Z" fill="white" />
                                                        <path d="M11.9964 19.3571C14.2921 19.3571 16.153 17.5412 16.153 15.3011C16.153 13.0611 14.2921 11.2451 11.9964 11.2451C9.70082 11.2451 7.83984 13.0611 7.83984 15.3011C7.83984 17.5412 9.70082 19.3571 11.9964 19.3571Z" fill="white" />
                                                    </svg>

                                                </div>
                                                <div className='send-message-box w-100'>
                                                    <textarea
                                                        placeholder="Type a message"
                                                        className="chatbox w-100"
                                                        name="chatbox"
                                                        minLength="2"
                                                    ></textarea>
                                                    <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M20.9785 3.01565C20.4397 2.47605 19.2341 2.10917 17.108 2.81784L6.79979 6.25393C6.79952 6.25402 6.80006 6.25384 6.79979 6.25393C5.14436 6.80775 3.99685 7.41951 3.28792 8.00537C2.57466 8.59481 2.42862 9.04571 2.42862 9.3084C2.42862 9.57071 2.57428 10.0206 3.28694 10.6083C3.99559 11.1927 5.1422 11.8022 6.79797 12.3532L9.85863 13.3734C10.2212 13.4942 10.5058 13.7788 10.6266 14.1414L11.6466 17.2014C12.1975 18.8568 12.8078 20.0039 13.3929 20.7124C13.9812 21.425 14.4324 21.5714 14.6962 21.5714C14.9599 21.5714 15.4111 21.425 15.9995 20.7124C16.5846 20.0039 17.1946 18.8574 17.7455 17.202L21.1813 6.89468C21.1811 6.89501 21.1814 6.89434 21.1813 6.89468C21.8842 4.76825 21.5188 3.55671 20.9785 3.01565ZM22.6971 1.29964C24.1877 2.79245 24.3136 5.15776 23.487 7.65722L20.0499 17.9688C20.0498 17.969 20.0499 17.9686 20.0499 17.9688C19.4471 19.78 18.7183 21.2341 17.8721 22.2588C17.0292 23.2797 15.9564 24 14.6962 24C13.436 24 12.3632 23.2797 11.5202 22.2588C10.674 21.2341 9.94537 19.7806 9.34266 17.9694C9.34259 17.9692 9.34273 17.9696 9.34266 17.9694L8.51464 15.4854L6.03119 14.6575C6.03099 14.6575 6.03139 14.6576 6.03119 14.6575C4.22039 14.0549 2.76647 13.327 1.74181 12.482C0.721051 11.6403 0 10.5685 0 9.3084C0 8.04865 0.720665 6.97635 1.74083 6.13329C2.76521 5.28674 4.21839 4.55652 6.02937 3.95075L16.3401 0.513856C18.8406 -0.319646 21.205 -0.194728 22.6971 1.29964Z" fill="#5D8B2F" />
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.9112 8.78415C15.386 9.25771 15.3871 10.0266 14.9136 10.5014L10.5663 14.8608C10.0928 15.3357 9.32393 15.3368 8.84905 14.8632C8.37417 14.3896 8.3731 13.6208 8.84665 13.1459L13.1939 8.78655C13.6674 8.31167 14.4363 8.3106 14.9112 8.78415Z" fill="#5D8B2F" />
                                                    </svg>
                                                </div>
                                            </div>

                                        </div>
                                    );
                                })}
                            </div>}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Chat
