import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../../Pages/Login Page'
import AgeVerifyPage from '../../Pages/Age Verify'
import SignUpPage from '../../Pages/Sign up'
import RetailerType from '../../Pages/Retailer Type'
import DispensaryType from '../../Pages/Dispensary'

const RegistrationRoutes = () => {
    return (
        <div className='auth-model'>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/ageverification" element={<AgeVerifyPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/retailertype" element={<RetailerType />} />
                <Route path="/dispensaryType" element={<DispensaryType />} />

            </Routes>

        </div>
    )
}

export default RegistrationRoutes