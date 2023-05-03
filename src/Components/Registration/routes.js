import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "../../Pages/Login Page";
import AgeVerifyPage from "../../Pages/Age Verify";
import SignUpPage from "../../Pages/Sign up";
import RetailerType from "../../Pages/Retailer Type";
import DispensaryType from "../../Pages/Dispensary";
import HeadShop from "../../Pages/Head Shop";
import CannabisLounge from "../../Pages/Cannabis Lounge";
import ResponsivePage from "../../Pages/Response Page";
import BudSeedPage from "../../Pages/Bud Seed";
import TermsConditionsPage from "../../Pages/Terms and Conditions";
import AddAddressPage from "../../Pages/Add Adress";
import NotFound from "../../Pages/Not Found";
import SocialSignUp from "../Social App/SocialSignup";
import SocialSummary from "../Social App/Summary";
import SocialUserDetail from "../Social App/UserDetail";
import SocialUserBio from "../Social App/UserBio";
import SocialSubscription from "../Social App/SocialSubscription";
import SocialNotice from "../Social App/Notice";
import SocialUploadPicture from "../Social App/UploadPicture";
import SocialProfile from "../Social App/SocialProfile";
import LookingFor from "../Social App/LookingFor";

const RegistrationRoutes = () => {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const location = useLocation();

  return (
    <div
      className={`${
        !location.pathname.includes("/social") ? "auth-model" : ""
      } `}
    >
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/age" element={<AgeVerifyPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/retailer" element={<RetailerType />} />
        <Route path="/dispensary" element={<DispensaryType />} />
        <Route path="/headshop" element={<HeadShop />} />
        <Route path="/cannabis" element={<CannabisLounge />} />
        <Route path="/address" element={<AddAddressPage />} />
        <Route path="/response" element={<ResponsivePage />} />
        <Route path="/budseed" element={<BudSeedPage />} />
        <Route path="/terms" element={<TermsConditionsPage />} />
        <Route path="*" element={<NotFound />} />

        {windowSize[0] <= 576 ? (
          <>
            <Route path="/socialsignup" element={<SocialSignUp />} />
            <Route path="/socialsummary" element={<SocialSummary />} />
            <Route path="/socialuserdetail" element={<SocialUserDetail />} />
            <Route path="/socialuserbio" element={<SocialUserBio />} />
            <Route path="/socialnotice" element={<SocialNotice />} />
            <Route
              path="/socialsubscription"
              element={<SocialSubscription />}
            />
            <Route
              path="/socialuploadpicture"
              element={<SocialUploadPicture />}
            />
            <Route path="/socialprofile" element={<SocialProfile />} />
            <Route path="/socialcatch" element={<LookingFor />} />
          </>
        ) : (
          ""
        )}
      </Routes>
    </div>
  );
};

export default RegistrationRoutes;
