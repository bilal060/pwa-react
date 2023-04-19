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
import DispensaryProfileDetail from '../../Pages/Dispensary User Profile'
import CannabisProfileDetail from '../../Pages/Cannabis User Profile'
import HeadProfileDetail from '../../Pages/Head User Profile'
import FavoriteProduct from '../../Pages/Favorite Products'
import UserProfile from '../../Pages/User Profile'
import EditProfile from '../User Profile Detail Options/EditProfile'
import DeleteProfile from '../User Profile Detail Options/DeleteAccount'
import SeedMap from '../ViewMap/Seed'


const ContentRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<HomePage><ShowAllProducts /></HomePage>} />
                <Route path="/home/seed" element={<HomePage><Seeds /></HomePage>} />
                <Route path="/home/seed/map" element={<HomePage><SeedMap /></HomePage>} />
                <Route path="/home/buds" element={<HomePage><Buds /></HomePage>} />
                <Route path="/home/buds/map" element={<HomePage><SeedMap /></HomePage>} />
                <Route path="/home/dispensary" element={<HomePage><Dispensary /></HomePage>} />
                <Route path="/home/dispensary/map" element={<HomePage><SeedMap /></HomePage>} />
                <Route path="/home/cannabis" element={<HomePage><Cannabis /></HomePage>} />
                <Route path="/home/cannabis/map" element={<HomePage><SeedMap /></HomePage>} />
                <Route path="/home/headshop" element={<HomePage><HeadShop /></HomePage>} />
                <Route path="/home/headshop/map" element={<HomePage><SeedMap /></HomePage>} />

                <Route path="/home/seed/seedinfo" element={<ProductUserProfile />} />
                <Route path="/home/dispensary/detail" element={<DispensaryProfileDetail />} />
                <Route path="/home/cannabis/detail" element={<CannabisProfileDetail />} />
                <Route path="/home/headshop/detail" element={<HeadProfileDetail />} />
                <Route path="/favourite" element={<FavoriteProduct />} />
                <Route path="/favourite/userprofile" element={<UserProfile />} />
                <Route path="/favourite/userprofile/edit" element={<EditProfile />} />
                <Route path="/favourite/userprofile/delete" element={<DeleteProfile />} />
            </Routes>
        </>
    )
}

export default ContentRoutes