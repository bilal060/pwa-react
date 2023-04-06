import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../../Pages/Login Page'
import AgeVerifyPage from '../../Pages/Age Verify'
import SignUpPage from '../../Pages/Sign up'
import RetailerType from '../../Pages/Retailer Type'
import DispensaryType from '../../Pages/Dispensary'
import HeadShop from '../../Pages/Head Shop'
import CannabisLounge from '../../Pages/Cannabis Lounge'
import ResponsivePage from '../../Pages/Response Page'
import BudSeedPage from '../../Pages/Bud Seed'
import TermsConditionsPage from '../../Pages/Terms and Conditions'
import AddAddressPage from '../../Pages/Add Adress'

const RegistrationRoutes = () => {
    return (
        <div className='auth-model'>
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
            </Routes>

        </div>
    )
}

export default RegistrationRoutes