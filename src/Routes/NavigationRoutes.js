import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../utils/ProtectedRoutes";
import ShowAllProducts from "../Components/Dashboard Components/AllProducts";
import HomePage from "../Pages/Home";
import Seeds from "../Components/Dashboard Components/Seeds";
import SeedMap from "../Components/ViewMap/Seed";
import Buds from "../Components/Dashboard Components/Buds";
import BudsMap from "../Components/ViewMap/Buds";
import Dispensary from "../Components/Dashboard Components/Dispensary";
import DispensaryMap from "../Components/ViewMap/Dispensary";
import Cannabis from "../Components/Dashboard Components/Cannabis";
import CannabisMap from "../Components/ViewMap/Cannabis";
import HeadShopMap from "../Components/ViewMap/HeadShop";
import DispensaryProfileDetail from "../Pages/Dispensary User Profile";
import CannabisProfileDetail from "../Pages/Cannabis User Profile";
import HeadProfileDetail from "../Pages/Head User Profile";
import FavoriteProduct from "../Pages/Favorite Products";
import UserProfile from "../Pages/User Profile";
import EditProfile from "../Components/User Profile Detail Options/EditProfile";
import DeleteProfile from "../Components/User Profile Detail Options/DeleteAccount";
import AppLayout from "../Components/App Layout";
import HeadShop from "../Components/Dashboard Components/HeadShop";
import HeadShopRegister from "../Pages/Head Shop";

import LoginPage from "../Pages/Login Page";
import AgeVerifyPage from "../Pages/Age Verify";
import SignUpPage from "../Pages/Sign up";
import RetailerType from "../Pages/Retailer Type";
import DispensaryType from "../Pages/Dispensary";
import SeedStore from "../Pages/Seed Store";
import CannabisLounge from "../Pages/Cannabis Lounge";
import AddAddressPage from "../Pages/Add Adress";
import ResponsivePage from "../Pages/Response Page";
import BudSeedPage from "../Pages/Bud Seed";
import TermsConditionsPage from "../Pages/Terms and Conditions";
import NotFound from "../Pages/Not Found";
import RegistrationLayout from "../Components/Registration";
import AllProductMapView from "../Components/ViewMap/ShowAllProduct";
import SeedUserProfile from "../Pages/Seed User Profile";
import ProductUserProfile from "../Pages/Product User Profile";

const NavigationRoutes = () => {
  return (
    <div>
      <Routes>
        {/* Registration  */}

        <Route
          path="/"
          element={
            <RegistrationLayout>
              <LoginPage />
            </RegistrationLayout>
          }
        />
        <Route
          path="/login"
          element={
            <RegistrationLayout>
              <LoginPage />
            </RegistrationLayout>
          }
        />
        <Route
          path="/age"
          element={
            <RegistrationLayout>
              <AgeVerifyPage />
            </RegistrationLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <RegistrationLayout>
              <SignUpPage />
            </RegistrationLayout>
          }
        />
        <Route
          path="/retailer"
          element={
            <RegistrationLayout>
              <RetailerType />
            </RegistrationLayout>
          }
        />
        <Route
          path="/dispensary"
          element={
            <RegistrationLayout>
              <DispensaryType />
            </RegistrationLayout>
          }
        />
        <Route
          path="/headshop"
          element={
            <RegistrationLayout>
              <HeadShopRegister />
            </RegistrationLayout>
          }
        />
        <Route
          path="/seedstore"
          element={
            <RegistrationLayout>
              <SeedStore />
            </RegistrationLayout>
          }
        />
        <Route
          path="/cannabis"
          element={
            <RegistrationLayout>
              <CannabisLounge />
            </RegistrationLayout>
          }
        />
        <Route
          path="/address"
          element={
            <RegistrationLayout>
              <AddAddressPage />
            </RegistrationLayout>
          }
        />
        <Route
          path="/response"
          element={
            <RegistrationLayout>
              <ResponsivePage />
            </RegistrationLayout>
          }
        />
        <Route
          path="/budseed"
          element={
            <RegistrationLayout>
              <BudSeedPage />
            </RegistrationLayout>
          }
        />
        <Route
          path="/terms"
          element={
            <RegistrationLayout>
              <TermsConditionsPage />
            </RegistrationLayout>
          }
        />
        <Route path="*" element={<NotFound />} />
        <Route
          path="/home"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <ShowAllProducts />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/home/map"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <AllProductMapView />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/home/seed"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <Seeds />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />

        <Route
          path="/home/seed/map"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <SeedMap />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />

        <Route
          path="/home/buds"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <Buds />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />

        <Route
          path="/home/buds/map"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <BudsMap />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />

        <Route
          path="/home/dispensary"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <Dispensary />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/home/dispensary/map"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <DispensaryMap />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />

        <Route
          path="/home/cannabis"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <Cannabis />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/home/cannabis/map"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <CannabisMap />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />

        <Route
          path="/home/headshop"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <HeadShop />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/home/headshop/map"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HomePage>
                    <HeadShopMap />
                  </HomePage>
                </AppLayout>
              }
            />
          }
        />

        <Route
          exact
          path="/home/seed/:id"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <SeedUserProfile />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/home/dispensary/:id"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <DispensaryProfileDetail />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/home/cannabisLounge/:id"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <CannabisProfileDetail />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/home/headShop/:id"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <HeadProfileDetail />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/favourite"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <FavoriteProduct />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/myaccount"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <UserProfile />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/myaccount/edit"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <EditProfile />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/myaccount/delete"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <DeleteProfile />
                </AppLayout>
              }
            />
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoutes
              component={
                <AppLayout>
                  <ProductUserProfile />
                </AppLayout>
              }
            />
          }
        />
      </Routes>
    </div>
  );
};

export default NavigationRoutes;
