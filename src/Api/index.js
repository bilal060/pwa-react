import axios from "axios";
import { toast } from "react-toastify";
const VerifyAgeUrl = `${process.env.REACT_APP_API_URI}users/ageVerify`;
const SignUpUrl = `${process.env.REACT_APP_API_URI}users/signup`;
const LoginUrl = `${process.env.REACT_APP_API_URI}users/login`;
const PostResponseUrl = `${process.env.REACT_APP_API_URI}userItem`;
const PostDispensaryUrl = `${process.env.REACT_APP_API_URI}dispensary`;
const PostCannabisUrl = `${process.env.REACT_APP_API_URI}cannabisLoung`;
const PostHeadShopUrl = `${process.env.REACT_APP_API_URI}headShop`;
const PostSeedStoreUrl = `${process.env.REACT_APP_API_URI}seedStore`;
const GetDispensaryUrl = `${process.env.REACT_APP_API_URI}dispensary`;

export const VerifyAge = async (data) => {
  try {
    const postData = await axios.post(VerifyAgeUrl, data);
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
    const fetchData = await axios.post(LoginUrl, loginDetails);
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
    const fetchData = await axios.post(SignUpUrl, signInDetails);
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
    const fetchData = await axios.patch(RetailerTypeUrl, retailerType);
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
    await axios.patch(adressUrl, address);
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
    await axios.post(PostResponseUrl, newArray);
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
    await axios.post(PostSeedStoreUrl, data);
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
    await axios.post(PostDispensaryUrl, data);
    setTimeout(() => {
      window.location.href = "/address";
    }, 1000);
    toast.success("Dispensary Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};
export const PostHeadShop = async (data) => {
  try {
    await axios.post(PostHeadShopUrl, data);
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
    await axios.post(PostCannabisUrl, data);
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
    await axios.patch(EditProfileUrl, editedData);
    toast.success("User Edited Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};
