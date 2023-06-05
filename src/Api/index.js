import axios from "axios";
import { toast } from "react-toastify";
const SignUpUrl = `${process.env.REACT_APP_API_URI}users/signup`;
const LoginUrl = `${process.env.REACT_APP_API_URI}users/login`;
const PostAddressUrl = `${process.env.REACT_APP_API_URI}address`;

export const PostLoginData = async (loginDetails, rememberCheck) => {
  try {
    const fetchData = await axios.post(LoginUrl, loginDetails);
    localStorage.clear();

    if (rememberCheck) {
      // sessionStorage.setItem("rememberMe", rememberCheck);
      sessionStorage.setItem(
        "remember-user",
        rememberCheck ? JSON.stringify(fetchData.data.data.user) : ""
      );
    } else {
      sessionStorage.clear();
    }

    localStorage.setItem("user-token", fetchData.data.token);
    localStorage.setItem("userdata", JSON.stringify(fetchData.data.data.user));
    toast.success("Welcome");
    window.location.href = "/home";
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
    alert("Unable to login. Please try after some time.");
  }
};
export const PostSignUp = async (signInDetails) => {
  try {
    const fetchData = await axios.post(SignUpUrl, signInDetails);
    console.log(fetchData);
    localStorage.clear();
    localStorage.setItem("user-token", fetchData.data.token);
    localStorage.setItem("userdata", JSON.stringify(fetchData?.data.data.user));
    if (signInDetails.userType === "Retailer") {
      window.location.href = "/retailer";
    } else {
      window.location.href = "/address";
    }
    toast.success("  Sign up Successful");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
    localStorage.clear();
  }
};

export const PostRetailerType = async (RetailerTypeUrl, retailerType) => {
  try {
    const fetchData = await axios.patch(RetailerTypeUrl, retailerType);
    console.log(fetchData);
    localStorage.setItem("userdata", JSON.stringify(fetchData?.data?.user));
    window.location.href = "/address";
    toast.success("Retailer Type Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};

export const PostAddress = async (address) => {
  try {
    const fetchData = await axios.post(PostAddressUrl, address);
    console.log(fetchData);
    window.location.href = "/response";
    toast.success("Address Added Successfully");
  } catch (error) {
    toast.error(error?.message);
    console.log(error);
  }
};
