import React from "react";
import { useState } from "react";
import MobSearchIcon from "../../assets/Images/MobSearch";
import User from "../../assets/Images/sidelink-user.svg";
import DashboardLogo from "../../assets/Images/DashboardLogo";
import SideLinkSettings from "../../assets/Images/sideLinkSettings";
import { Link, useNavigate, useParams } from "react-router-dom";
import CrossIcon from "../../assets/Images/Cross";
import selectafter from "../../assets/Images/select-after.svg";
import { useEffect } from "react";
import MenuBarIcon from "../../assets/Images/MenuBar";
import AppFooter from "../../Components/Footer";
import { toast } from "react-toastify";
import Hooks from "../../hooks";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { useRef } from "react";
import { PostMedia, PostMessage } from "../../Api";
import Socket from "../../Socket";
import GoBackIcon from "../../assets/Images/GoBack";
import ChatCameraIcon from "../../assets/Images/ChatCamera";
import SendMessageChatIcon from "../../assets/Images/SendMessage";
import Axios from "../../axios/Axios";

const chatsdetail = [
  {
    id: 1,
    name: "Raza Awan",
    active: true,
  },
];
const sideLinks = [
  {
    name: "Home",
    link: "/home",
  },
  {
    name: "Seed Store",
    link: "/home/seed",
  },
  // {
  //   name: "Buds",
  //   link: "/home/buds",
  // },
  {
    name: "Dispensary",
    link: "/home/dispensaries",
  },
  {
    name: "Cannabis Lounge",
    link: "/home/cannabis",
  },
  {
    name: "Head Store",
    link: "/home/headshops",
  },
  {
    name: "Favourites",
    link: "/favourite",
  },
];

const Chat = () => {
  const [responsiveChat, setResponsiveChat] = useState(false);
  const [recentChats, setrecentChats] = useState(true);
  const [recentChatsData, setrecentChatsData] = useState([]);
  const [selectedChatData, setSelectedChatData] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [currentUserData, setcurrentUserData] = useState([]);
  const [message, setMessage] = useState("");
  const [mediaFile, setMediaFile] = useState(null);
  const params = useParams();
  const { Logout } = Hooks();
  TimeAgo.addLocale(en);
  const timeAgo = new TimeAgo("en-US");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  const [sendMessage, setSendMessage] = useState({
    conversationId: "",
    sender: "",
    message: "",
  });
  console.log(sendMessage?.conversationId);
  const [currentChat, setCurrentChat] = useState(null);
  const scrollRef = useRef(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChatData]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    if (windowSize[0] >= 768) {
      setResponsiveChat(true);
      setrecentChats(true);
    }
    if (windowSize[0] <= 767 && recentChats) {
      setResponsiveChat(false);
    }
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize, recentChats]);

  useEffect(() => {
    Socket.on("getMessage", (data) => {
      const newmessage = {
        receiverId: data.receiverId,
        sender: data.senderId,
        message: data.message,
      };
      setArrivalMessage(newmessage);
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      selectedChatData !== undefined &&
      selectedChatData[0].conversationId.members.includes(
        arrivalMessage.sender
      ) &&
      setSelectedChatData((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, selectedChatData]);

  const GetRecentChats = async (GetRecentChatsUrl) => {
    try {
      const fetchData = await Axios.get(GetRecentChatsUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setrecentChatsData(fetchData.data.userConversations);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  const GetSelectedChat = async (GetSelectedChatUrl) => {
    try {
      const fetchData = await Axios.get(GetSelectedChatUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSelectedChatData(fetchData?.data.messages);
      // console.log(fetchData.data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  // onload handler
  useEffect(() => {
    const currentUser = localStorage.getItem("userdata");
    let data = JSON.parse(currentUser);
    setcurrentUserData(data);

    const currentUserToken = localStorage.getItem("user-token");
    setToken(currentUserToken);

    let GetRecentChatsUrl = `${process.env.REACT_APP_API_URI}conversations/${params.id}`;
    setSendMessage((prevState) => ({
      ...prevState,
      sender: data._id,
    }));
    GetRecentChats(GetRecentChatsUrl);
  }, [params.id]);

  const GetChatData = (id) => {
    let GetSelectedChatUrl = `${process.env.REACT_APP_API_URI}messages/${id}`;
    GetSelectedChat(GetSelectedChatUrl);
  };

  // send message handler
  const SendMessageHandler = async () => {
    // setSendMessage((prevState) => ({
    //   ...prevState,
    //   conversationId: selectedChatData._id,
    // }));

    if (currentChat !== null) {
      if (message !== "") {
        const messageData = {
          conversationId: sendMessage?.conversationId,
          sender: sendMessage?.sender,
          message: sendMessage?.message,
          createdAt: new Date(),
        };
        setSendMessage((prevState) => ({
          ...prevState,
          message: "",
        }));
        PostMessage(messageData, token);

        setSelectedChatData((pre) => [...pre, messageData]);
        setMessage("");

        const receiverId =
          (await selectedChatData) !== undefined &&
          selectedChatData[0].conversationId.members.find(
            (member) => member !== currentUserData._id
          );
        Socket.emit("sendMessage", {
          senderId: sendMessage?.sender,
          receiverId: receiverId,
          message: message,
          createdAt: new Date(),
        });
      }
    } else {
      toast.error("Please select a chat");
    }
  };

  const SendMediaHandler = async () => {
    // setSendMessage((prevState) => ({
    //   ...prevState,
    //   conversationId: selectedChatData._id,
    // }));
    if (currentChat !== null) {
      if (mediaFile !== null) {
        var objectUrl = URL.createObjectURL(mediaFile);
        const messageData = {
          conversationId: sendMessage?.conversationId,
          sender: sendMessage?.sender,
          message: objectUrl,
          createdAt: new Date(),
        };
        const sendMedia = new FormData();
        sendMedia.append("chat_img", mediaFile);
        sendMedia.append("conversationId", sendMessage?.conversationId);
        sendMedia.append("sender", sendMessage?.sender);
        PostMedia(sendMedia, token);

        setSelectedChatData((pre) => [...pre, messageData]);

        const receiverId =
          (await selectedChatData) !== undefined &&
          selectedChatData[0].conversationId.members.find(
            (member) => member !== currentUserData._id
          );
        Socket.emit("sendMessage", {
          senderId: sendMessage?.sender,
          receiverId: receiverId,
          message: objectUrl,
          createdAt: new Date(),
        });
        setMediaFile(null);
        console.log(messageData);
      }
    } else {
      toast.error("Please select a chat");
    }
  };
  // console.log(recentChatsData);

  return (
    <>
      <div className={`app-header ${!recentChats ? "d-none" : ""}`}>
        <div className="container px-4 mx-auto d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            {true && (
              <div
                onClick={() => {
                  navigate(-1);
                }}
                className="d-md-none d-block"
              >
                <GoBackIcon />
              </div>
            )}
            <DashboardLogo />
            <h3 className="app-heading">GROW AND SHARE</h3>
          </div>
          <span onClick={() => setIsOpen(!isOpen)} className="cr-p">
            <MenuBarIcon />
          </span>
        </div>
      </div>
      {isOpen && (
        <div className={`app-menu`}>
          <div>
            <div className="section-1">
              <div className="d-flex justify-content-end align-items-center">
                <span onClick={() => setIsOpen(!isOpen)} className="cr-p mb-4">
                  <CrossIcon />
                </span>
              </div>
              <div className="d-flex align-items-center gap-2  mb-4 pb-3">
                <DashboardLogo />
                <div>
                  <h3 className="font-18 font-weight-700">GROW AND SHARE</h3>
                  <p className="font-10">Diversity Your Supply</p>
                </div>
              </div>
              <div className="search-product mb-4">
                <input
                  placeholder="Search Product"
                  className="border-0 outline-0 bg-transparent"
                />
                <span className="icon-green-bg">
                  <MobSearchIcon />
                </span>
              </div>
            </div>
            <div className="d-flex flex-column  side-links-main">
              {sideLinks.map((data, index) => {
                return (
                  <Link
                    onClick={() => setIsOpen(!isOpen)}
                    key={index}
                    to={data.link}
                    className={`${
                      data.link === Location.pathname ? "side-link-active" : ""
                    }  side-link`}
                  >
                    {data.icon} {data.name}
                  </Link>
                );
              })}
              <p className="side-link border-0 cr-p" onClick={() => Logout()}>
                Logout
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 pt-4 section-2">
            <div className="dropdown">
              <div className="d-flex align-items-center gap-2" type="button">
                <img
                  src={currentUserData.photo ? currentUserData.photo : User}
                  alt=""
                  className="side-link-user-img"
                />
                <div>
                  <h3 className="font-18 font-weight-700">
                    {currentUserData.fullName}
                  </h3>
                  <p className="font-10">Retailer</p>
                </div>
                <img src={selectafter} alt="" />
              </div>
            </div>

            <Link to={"/myaccount"}>
              <SideLinkSettings />
            </Link>
          </div>
        </div>
      )}

      <div
        className={`${
          !recentChats ? "chat-screen-content" : "chat-screen-content-footer"
        }`}
      >
        <div className={`${!recentChats ? "h-100" : ""} chat-screen `}>
          <div
            className={`${!recentChats ? "h-100" : ""} container mx-auto px-12`}
          >
            <div className={`${!recentChats ? "h-100" : ""}`}>
              <div className="row m-0 h-100">
                {recentChats && (
                  <div className="col-md-5 col-12 px-12">
                    <div className="seed-card flex-column px-0">
                      <div className="recent-chats-header mx-4 pb-4">
                        <div className="search-product">
                          <input
                            placeholder="Search User "
                            className="w-75 border-0 outline-0 bg-transparent"
                          />
                          <span className="icon-green-bg">
                            <MobSearchIcon />
                          </span>
                        </div>
                      </div>
                      <div className="recent-chats-detail">
                        <div
                          className="nav flex-column nav-pills"
                          id="v-pills-tab"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          {(recentChatsData || [])?.map((data, index) => {
                            return (
                              <>
                                <button
                                  onClick={() => {
                                    GetChatData(data._id);
                                    setSendMessage((prevState) => ({
                                      ...prevState,
                                      conversationId: data._id,
                                    }));
                                    setCurrentChat(data);
                                  }}
                                  key={index}
                                  className={`nav-link w-100  product-item   w-100 justify-content-start h-auto`}
                                  id={`v-pills-${data._id}-tab`}
                                  data-toggle="pill"
                                  href={`#v-pills-${data._id}`}
                                  role="tab"
                                  aria-controls={`v-pills-${data._id}`}
                                  aria-selected="true"
                                >
                                  <div
                                    className="d-md-flex d-none align-items-center w-100 gap-2"
                                    type="button"
                                  >
                                    <img
                                      src={User}
                                      alt=""
                                      className=" rounded-circle"
                                    />
                                    <div className="user-name py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start">
                                      <div className="d-flex align-items-center justify-content-between w-100 gap-2">
                                        <h3 className="font-18 font-weight-700">
                                          {data.members.map((user, index) => {
                                            if (
                                              user._id !== currentUserData._id
                                            ) {
                                              return (
                                                <p key={index}>
                                                  {user.fullName}
                                                </p>
                                              );
                                            }
                                          })}
                                        </h3>
                                        <p className="font-12 font-weight-500">
                                          {timeAgo.format(
                                            new Date(data.createdAt)
                                          )}
                                        </p>
                                      </div>
                                      <p className="font-14 font-weight-500">
                                        Retailer
                                      </p>
                                    </div>
                                  </div>
                                  <div
                                    className="d-md-none d-flex align-items-center w-100 gap-2"
                                    type="button"
                                    onClick={() => {
                                      setResponsiveChat(true);
                                      setrecentChats(false);
                                    }}
                                  >
                                    <img
                                      src={User}
                                      alt=""
                                      className="side-link-user-img"
                                    />
                                    <div className="user-name py-4 w-100 d-flex flex-column gap-2 justify-content-start align-items-start">
                                      <div className="d-flex align-items-center justify-content-between w-100 gap-2">
                                        <h3 className="font-18 font-weight-700">
                                          {data.members.map((user) => {
                                            if (
                                              user._id !== currentUserData._id
                                            ) {
                                              return (
                                                <p key={index}>
                                                  {user.fullName}
                                                </p>
                                              );
                                            }
                                          })}
                                        </h3>
                                        <p className="font-12 font-weight-500">
                                          {timeAgo.format(
                                            new Date(data.createdAt)
                                          )}
                                        </p>
                                      </div>
                                      <p className="font-14 font-weight-500">
                                        Retailer
                                      </p>
                                    </div>
                                  </div>
                                </button>
                              </>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {responsiveChat && (
                  <div className="col-md-7 col-12 px-12">
                    <div className="seed-card h-100 px-0">
                      {chatsdetail.map((chatsdetail, index) => {
                        return (
                          <div
                            key={index}
                            className={`${
                              chatsdetail.active ? "active show" : ""
                            } tab-pane w-100 fade  chat-detail`}
                            id={`v-pills-${chatsdetail.id}`}
                            role="tabpanel"
                            aria-labelledby={`v-pills-${chatsdetail.id}-tab`}
                          >
                            <div
                              className="d-flex align-items-center justify-content-enduser-name pb-4 mb-4 chat-detail-header pt-sm-0 pt-4 px-4"
                              type="button"
                            >
                              <div
                                onClick={() => {
                                  setResponsiveChat(false);
                                  setrecentChats(true);
                                }}
                                className="d-md-none d-block"
                              >
                                <svg
                                  width={9}
                                  height={18}
                                  viewBox="0 0 9 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.71025 0.29552C9.09658 0.689547 9.09658 1.32839 8.71025 1.72242L2.26012 8.30089C1.88471 8.68377 1.88471 9.31623 2.26012 9.69911L8.71025 16.2776C9.09658 16.6716 9.09658 17.3105 8.71025 17.7045C8.32391 18.0985 7.69753 18.0985 7.31119 17.7045L0.861065 11.126C-0.287021 9.95507 -0.287021 8.04493 0.861066 6.874L7.31119 0.29552C7.69753 -0.0985068 8.32391 -0.0985067 8.71025 0.29552Z"
                                    fill="#0F8140"
                                  />
                                </svg>
                              </div>
                              <img
                                src={User}
                                alt=""
                                className=" rounded-circle"
                              />
                              <div className="w-100 d-flex flex-column justify-content-start align-items-start">
                                <h3 className="font-18 font-weight-700">
                                  {currentChat
                                    ? currentChat?.members.map((user) => {
                                        if (user._id !== currentUserData._id) {
                                          return (
                                            <p key={index}>{user.fullName}</p>
                                          );
                                        }
                                      })
                                    : "Username"}
                                </h3>

                                <div className="d-flex justify-content-start align-items-center gap-2">
                                  <svg
                                    width="9"
                                    height="9"
                                    viewBox="0 0 9 9"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <circle
                                      cx="4.29825"
                                      cy="4.29825"
                                      r="4.29825"
                                      fill="#5D8B2F"
                                    />
                                  </svg>
                                  <p className="font-14 font-weight-400 text-grey">
                                    {" "}
                                    Available
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="chat-detail-body px-4">
                              <div className="new-msg d-flex flex-column gap-3 ">
                                {selectedChatData?.length > 0 &&
                                  (selectedChatData || [])?.map(
                                    (chat, index) => {
                                      return (
                                        <div
                                          ref={scrollRef}
                                          key={index}
                                          className={`${
                                            chat.sender === currentUserData._id
                                              ? "send-msg"
                                              : "rcv-msg"
                                          }`}
                                        >
                                          <div className="msg h-100">
                                            {chat.message.includes(
                                              "uploads\\chat\\"
                                            ) ||
                                            chat.message.includes("blob") ? (
                                              <img
                                                className="w-100 chat-image mb-2 rounded-3"
                                                src={`${
                                                  chat.message.includes("blob")
                                                    ? ""
                                                    : `${process.env.REACT_APP_PORT}/`
                                                }${
                                                  Array.isArray(chat.message)
                                                    ? chat.message[0]
                                                    : chat.message
                                                }`}
                                                alt=""
                                              />
                                            ) : (
                                              chat.message
                                            )}

                                            <span className="d-flex justify-content-end font-12 pt-1 text-grey">
                                              {timeAgo.format(
                                                new Date(chat.createdAt)
                                              )}
                                            </span>
                                          </div>
                                        </div>
                                      );
                                    }
                                  )}
                              </div>
                            </div>
                            <div className="d-flex align-items-center chatbox-footer px-4">
                              <label className="bg-primary-green w-max-content p-3 rounded-4 cr-p">
                                <ChatCameraIcon />
                                <input
                                  className="d-none"
                                  type="file"
                                  accept="image/png, image/jpg, image/jpeg"
                                  onChange={(e) =>
                                    setMediaFile(e.target.files[0])
                                  }
                                />
                              </label>

                              <div className="send-message-box w-100">
                                {mediaFile === null && (
                                  <>
                                    <textarea
                                      onChange={(e) => {
                                        setSendMessage((prevState) => ({
                                          ...prevState,
                                          message: e.target.value,
                                        }));
                                        setMessage(e.target.value);
                                      }}
                                      value={sendMessage.message}
                                      onKeyDown={(e) => {
                                        if (e.keyCode === 13) {
                                          SendMessageHandler();
                                          e.preventDefault();
                                          e.stopPropagation();
                                        }
                                      }}
                                      placeholder="Type a message"
                                      className="chatbox w-100"
                                      name="chatbox"
                                      minLength="2"
                                    ></textarea>
                                    <span
                                      onClick={() => SendMessageHandler()}
                                      className="cr-p"
                                    >
                                      <SendMessageChatIcon />
                                    </span>
                                  </>
                                )}
                                {mediaFile && (
                                  <div className="send-message-box w-100 py-2 my-1">
                                    <p className="m-0 p-0">{mediaFile.name}</p>
                                    {mediaFile && (
                                      <span
                                        onClick={() => SendMediaHandler()}
                                        className="cr-p"
                                      >
                                        <SendMessageChatIcon />
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="d-md-block d-none">
          <AppFooter />
        </div>
      </div>
    </>
  );
};

export default Chat;
