import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../Pages/Home'


const ContentRoutes = () => {
    return (
        <>
            <Routes>
                {/* <Route path="/home" element={<HomePage></HomePage>} /> */}
                <Route path="/home/seed" element={<HomePage></HomePage>} />
                <Route path="/home/buds" element={<HomePage></HomePage>} />
                <Route path="/home/dispensary" element={<HomePage></HomePage>} />
                <Route path="/home/cannabis" element={<HomePage></HomePage>} />
                <Route path="/home/headshop" element={<HomePage></HomePage>} />

            </Routes>
        </>
    )
}

export default ContentRoutes