import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '../../Pages/Login Page'

const RegistrationRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </>
    )
}

export default RegistrationRoutes