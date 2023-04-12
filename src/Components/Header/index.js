import React from 'react'
import DashboardLogo from '../../assets/Images/DashboardLogo'
import SeedICon from '../../assets/Images/Seed'
import DispensaryIcon from '../../assets/Images/Dispensary'
import CannbisIcon from '../../assets/Images/Cannbis'
import HeadShopIcon from '../../assets/Images/HeadShop'
import { Link, useLocation } from 'react-router-dom'
import BudsIcon from '../../assets/Images/Buds'
import MobSearchIcon from '../../assets/Images/MobSearch'
import MenuBarIcon from '../../assets/Images/MenuBar'

const products = [
    {
        name: 'Seeds',
        icon: <SeedICon />,
        link: '/home/seed'
    },
    {
        name: 'Buds',
        icon: <BudsIcon />,
        link: '/home/buds'
    },
    {
        name: 'Dispensary',
        icon: <DispensaryIcon />,
        link: '/home/dispensary'
    },
    {
        name: 'Cannabis Lounge',
        icon: <CannbisIcon />,
        link: '/home/cannabis'
    },
    {
        name: 'Head Shop',
        icon: <HeadShopIcon />,
        link: '/home/headshop'
    },
]
const AppHeader = (props) => {
    const Location = useLocation();
    const { isOpen, setIsOpen } = props;

    const head = ['/home', '/aboutus', '/home/seed', '/home/buds', '/home/dispensary', '/home/cannabis', '/home/headshop']

    return (
        <div className={`app-header  flex-column justify-content-center ${head.includes(Location.pathname) ? 'mob-app-header' : ''}`}>
            <div className='container px-4 mx-auto d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center gap-2'>
                    <DashboardLogo />
                    <h3 className='app-heading'>GROW AND SHARE</h3>
                </div>
                <span onClick={() => setIsOpen(!isOpen)} className='cr-p'><MenuBarIcon /></span>
            </div>
            {head.includes(Location.pathname) && <div className='allproduct-mob d-sm-none d-block mt-5'>
                <div className='container mx-auto'>
                    <div className='d-flex flex-sm-row flex-column-reverse align-items-sm-center justify-content-between gap-4'>
                        <h2 className='allproduct-heading m ms-12 me-12'>All Products</h2>
                        <div className='d-flex ps-12 pe-12 align-items-center gap-4'>
                            <div className='search-product  d-sm-none d-flex'>
                                <input placeholder='Search Product' className='border-0 outline-0 bg-transparent' />
                                <span className='icon-green-bg'><MobSearchIcon /></span>
                            </div>
                            <div className='d-flex align-items-center gap-4'>
                                <button className='border-0 outline-0 bg-transparent p-0 height-56'>
                                    <svg className=' h-100' width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width={55} height={55} rx="15.5" fill="#5D8B2F" fillOpacity="0.2" stroke="#5D8B2F" />
                                        <path d="M41.9999 15.2328V18.7889C41.9999 20.0821 41.186 21.6985 40.372 22.5067L33.3721 28.649C32.3954 29.4572 31.7442 31.0736 31.7442 32.3668V39.3173C31.7442 40.2872 31.0931 41.5803 30.2791 42.0652L28.0001 43.52C25.8838 44.8131 22.9536 43.3584 22.9536 40.7721V32.2051C22.9536 31.0736 22.3025 29.6189 21.6513 28.8107L20.0234 27.1134L29.4977 12H38.7442C40.5348 12 41.9999 13.4548 41.9999 15.2328Z" fill="#5D8B2F" />
                                        <path opacity="0.4" d="M26.8603 12L18.4279 25.4324L15.4651 22.345C14.6512 21.5368 14 20.0821 14 19.1122V15.3945C14 13.4548 15.4651 12 17.2558 12H26.8603Z" fill="#5D8B2F" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-sm-5 mt-4 mb-sm-5 pb-3 gap-4 d-flex align-items-start justify-content-between'>
                    <div className='d-flex gap-3 overflow-x-auto all-products-link px-4'>
                        {products.map((data, index) => {
                            return (
                                <Link key={index} to={data.link} className={`${data.link === Location.pathname ? 'product-item-active' : ''}  product-item`}>{data.icon} {data.name}</Link>
                            )
                        })}
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default AppHeader