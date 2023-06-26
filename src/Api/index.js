import { toast } from "react-toastify";
import Axios from "../axios/Axios";
const VerifyAgeUrl = `${process.env.REACT_APP_API_URI}users/ageVerify`;
const SignUpUrl = `${process.env.REACT_APP_API_URI}users/signup`;
const LoginUrl = `${process.env.REACT_APP_API_URI}users/login`;
const PostResponseUrl = `${process.env.REACT_APP_API_URI}userItem`;
const PostDispensaryUrl = `${process.env.REACT_APP_API_URI}dispensary`;
const PostCannabisUrl = `${process.env.REACT_APP_API_URI}cannabisLounge`;
const PostHeadShopUrl = `${process.env.REACT_APP_API_URI}headShop`;
const PostSeedStoreUrl = `${process.env.REACT_APP_API_URI}seedStore`;
const FavouriteUrl = `${process.env.REACT_APP_API_URI}users/markFavourite`;
const PostReviewUrl = `${process.env.REACT_APP_API_URI}users/createReview`;
const CreateChatUrl = `${process.env.REACT_APP_API_URI}conversations`;
const PostMessageUrl = `${process.env.REACT_APP_API_URI}messages`;

export const VerifyAge = async (data) => {
  try {
    const postData = await Axios.post(VerifyAgeUrl, data);
    sessionStorage.setItem("remember-age", JSON.stringify(postData.data));
    setTimeout(() => {
      window.location.href = "/signup";
    }, 1000);
    toast.success("Age Verified Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};

export const PostLoginData = async (loginDetails, rememberCheck) => {
  try {
    const fetchData = await Axios.post(LoginUrl, loginDetails);
    localStorage.clear();

    if (rememberCheck) {
      sessionStorage.setItem(
        "remember-user",
        rememberCheck ? JSON.stringify(fetchData.data.data.user) : ""
      );
    } else {
      sessionStorage.removeItem("remember-user");
    }

    localStorage.setItem("user-token", fetchData.data.token);
    localStorage.setItem("userdata", JSON.stringify(fetchData.data.data.user));
    toast.success("Welcome");
    setTimeout(() => {
      window.location.href = "/home";
    }, 1000);
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};
export const PostSignUp = async (signInDetails) => {
  try {
    const fetchData = await Axios.post(SignUpUrl, signInDetails);
    localStorage.clear();
    localStorage.setItem("user-token", fetchData.data.token);
    localStorage.setItem("userdata", JSON.stringify(fetchData?.data.data.user));
    if (signInDetails.userType === "Retailer") {
      setTimeout(() => {
        window.location.href = "/retailer";
      }, 1000);
    } else {
      setTimeout(() => {
        window.location.href = "/address";
      }, 1000);
    }
    toast.success("  Sign up Successful");
    sessionStorage.removeItem("remember-age");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
    localStorage.clear();
  }
};

export const PostRetailerType = async (RetailerTypeUrl, retailerType) => {
  try {
    const fetchData = await Axios.patch(RetailerTypeUrl, retailerType);
    localStorage.setItem("userdata", JSON.stringify(fetchData?.data?.user));
    setTimeout(() => {
      window.location.href = `/${retailerType.retailerType}`;
    }, 1000);
    toast.success("Retailer Type Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};

export const PostAddress = async (adressUrl, address) => {
  try {
    const fetchData = await Axios.patch(adressUrl, address);
    localStorage.setItem("userdata", JSON.stringify(fetchData?.data?.user));
    setTimeout(() => {
      window.location.href = "/response";
    }, 1000);
    toast.success("Address Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};

export const PostResponse = async (newArray) => {
  try {
    await Axios.post(PostResponseUrl, newArray);
    setTimeout(() => {
      window.location.href = "/terms";
    }, 1000);
    toast.success("Response Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};

export const PostSeedStore = async (data) => {
  try {
    await Axios.post(PostSeedStoreUrl, data);
    setTimeout(() => {
      window.location.href = "/address";
    }, 1000);
    toast.success("Seed Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};

export const PostDispensary = async (data) => {
  try {
    await Axios.post(PostDispensaryUrl, data);
    // setTimeout(() => {
    //   window.location.href = "/address";
    // }, 1000);
    toast.success("Dispensary Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};
export const PostHeadShop = async (data) => {
  try {
    await Axios.post(PostHeadShopUrl, data);
    setTimeout(() => {
      window.location.href = "/address";
    }, 1000);
    toast.success("Head Shop Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};
export const PostCannabis = async (data) => {
  try {
    await Axios.post(PostCannabisUrl, data);
    setTimeout(() => {
      window.location.href = "/address";
    }, 1000);
    toast.success("Cannabis Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};

export const EditUser = async (EditProfileUrl, editedData) => {
  try {
    const fetchData = await Axios.patch(EditProfileUrl, editedData);
    localStorage.setItem(
      "userdata",
      JSON.stringify(fetchData?.data?.updateUser)
    );
    toast.success("User Edited Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};

export const MarkFavourite = async (userId, pId, category) => {
  try {
    // console.log(userId, pId, category);
    const data = {
      userId: userId,
      pId: pId,
      category: category,
    };
    await Axios.post(FavouriteUrl, data);
    toast.success("Added to Favourite");
  } catch (error) {
    toast.error(error?.response.data.message);
    console.log(error);
  }
};

export const PostReview = async (ratingData) => {
  try {
    await Axios.post(PostReviewUrl, ratingData);
    toast.success("Review Posted Successfully");
  } catch (error) {
    toast.error(error?.response.data.message);
    console.log(error);
  }
};
export const CreateChat = async (senderId, receiverId) => {
  try {
    const data = {
      senderId: senderId,
      receiverId: receiverId,
    };
    await Axios.post(CreateChatUrl, data);
    toast.success("Chat Posted Successfully");
    setTimeout(() => {
      window.location.href = `/chat/${senderId}`;
    }, 1000);
  } catch (error) {
    toast.error(error?.response.data.message);
    console.log(error);
  }
};

export const PostMessage = async (sendMessage) => {
  try {
    console.log(sendMessage);
    await Axios.post(PostMessageUrl, sendMessage);
  } catch (error) {
    toast.error(error?.response.data.message);
    console.log(error);
  }
};
