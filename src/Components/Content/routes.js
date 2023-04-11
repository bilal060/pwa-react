import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../Pages/Home'
import Seeds from '../Dashboard Components/Seeds'
import Buds from '../Dashboard Components/Buds'
import Dispensary from '../Dashboard Components/Dispensary'
import Cannabis from '../Dashboard Components/Cannabis'
import HeadShop from '../Dashboard Components/HeadShop'
import ShowAllProducts from '../Dashboard Components/AllProducts'
import ProductUserProfile from '../../Pages/Product User Profile'


const ContentRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<HomePage><ShowAllProducts /></HomePage>} />
                <Route path="/home/seed" element={<HomePage><Seeds /></HomePage>} />
                <Route path="/home/buds" element={<HomePage><Buds /></HomePage>} />
                <Route path="/home/dispensary" element={<HomePage><Dispensary /></HomePage>} />
                <Route path="/home/cannabis" element={<HomePage><Cannabis /></HomePage>} />
                <Route path="/home/headshop" element={<HomePage><HeadShop /></HomePage>} />
                <Route path="/home/seed/seedinfo" element={<ProductUserProfile/>} />

                
                {/* <Route path="/likes" element={<HomePage><HeadShop /></HomePage>} /> */}


            </Routes>
        </>
    )
}

export default ContentRoutes