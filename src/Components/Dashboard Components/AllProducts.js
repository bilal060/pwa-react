import React from 'react'
import ScopeIcon from '../../assets/Images/Scope'
import { Link, useLocation } from 'react-router-dom'
import SeedICon from '../../assets/Images/Seed'
import BudsIcon from '../../assets/Images/Buds'
import CannbisIcon from '../../assets/Images/Cannbis'
import HeadShopIcon from '../../assets/Images/HeadShop'
import DispensaryIcon from '../../assets/Images/Dispensary'
import SearchButtonIcon from '../../assets/Images/Search'
import dispensary1 from '../../assets/Images/dispensary1.svg'
import dispensary2 from '../../assets/Images/dispensary2.svg'
import seed1 from '../../assets/Images/seed1.svg'
import seed2 from '../../assets/Images/seed2.svg'
import seed3 from '../../assets/Images/seed3.svg'
import seed4 from '../../assets/Images/seed4.svg'
import cannabis1 from '../../assets/Images/cannabis1.svg'
import cannabis2 from '../../assets/Images/cannabis2.svg'
import DistanceIcon from '../../assets/Images/Distance'
import DispensryProductIcon from '../../assets/Images/Dispensry1'
import LocationIcon from '../../assets/Images/Location'
import RatingIcon from '../../assets/Images/Rating'
import SendMailIcon from '../../assets/Images/SendMail'
import CountIcon from '../../assets/Images/Count'
import TimerIcon from '../../assets/Images/Timer'
import HeartIcon from '../../assets/Images/Heart'

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


const allProducts = [
    {
        type: 'seed',
        name: 'Toronto, Ontario     ',
        img: seed1,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        type: 'seed',
        name: 'Toronto, Ontario     ',
        img: seed2,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        type: 'bud',
        name: 'Toronto, Ontario     ',
        img: seed3,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Buds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        type: 'bud',
        name: 'Toronto, Ontario     ',
        img: seed4,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Buds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        type: 'dispensary',
        name: 'Cannabis Shop     ',
        img: dispensary1,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        type: 'dispensary',
        name: 'Cannabis Shop     ',
        img: dispensary2,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario',
        img: cannabis1,
        distance: '3 km Away',
        location: '789 Yonge St, Toronto, Canada',
        fees: 'Fees: $10:00',
        timing: 'Timings: 09:00  To  17:00 ',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario',
        img: cannabis2,
        distance: '3 km Away',
        location: '789 Yonge St, Toronto, Canada',
        fees: 'Fees: $10:00',
        timing: 'Timings: 09:00  To  17:00 ',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },

]
const AllProducts = (props) => {
    const { children } = props;
    const Location = useLocation();

    return (
        <div className='all-product-section'>
            <div className='allproduct-mob d-sm-block d-none'>
                <div className='container mx-auto'>
                    <div className='d-flex flex-sm-row flex-column-reverse align-items-sm-center justify-content-between gap-4'>
                        <h2 className='allproduct-heading'>All Products</h2>
                        <div className='d-flex  align-items-center gap-4'>
                            <div className='search-product d-sm-none d-flex'>
                                <input placeholder='Search Product' className='border-0 outline-0 bg-transparent' />
                                <SearchButtonIcon />
                            </div>
                            <div className='d-flex align-items-center gap-4'>
                                <button className='view-map-btn d-sm-flex d-none align-items-center gap-3'>
                                    View Map
                                    <span className='view-map-btn-scope d-flex align-items-center justify-content-center '>
                                        <ScopeIcon />
                                    </span>
                                </button>
                                <button className='border-0 outline-0 bg-transparent p-0'>
                                    <svg width={56} height={56} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.5" y="0.5" width={55} height={55} rx="15.5" fill="#5D8B2F" fillOpacity="0.2" stroke="#5D8B2F" />
                                        <path d="M41.9999 15.2328V18.7889C41.9999 20.0821 41.186 21.6985 40.372 22.5067L33.3721 28.649C32.3954 29.4572 31.7442 31.0736 31.7442 32.3668V39.3173C31.7442 40.2872 31.0931 41.5803 30.2791 42.0652L28.0001 43.52C25.8838 44.8131 22.9536 43.3584 22.9536 40.7721V32.2051C22.9536 31.0736 22.3025 29.6189 21.6513 28.8107L20.0234 27.1134L29.4977 12H38.7442C40.5348 12 41.9999 13.4548 41.9999 15.2328Z" fill="#5D8B2F" />
                                        <path opacity="0.4" d="M26.8603 12L18.4279 25.4324L15.4651 22.345C14.6512 21.5368 14 20.0821 14 19.1122V15.3945C14 13.4548 15.4651 12 17.2558 12H26.8603Z" fill="#5D8B2F" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-sm-5 mt-4 mb-5 pb-3 gap-4 d-flex align-items-start justify-content-between'>
                        <div className='search-product d-sm-flex d-none'>
                            <input placeholder='Search Product' className='border-0 outline-0 bg-transparent' />
                            <SearchButtonIcon />
                        </div>
                        <div className='d-flex gap-3 overflow-x-auto all-products-link'>
                            {products.map((data, index) => {
                                return (
                                    <Link key={index} to={data.link} className={`${data.link === Location.pathname ? 'product-item-active' : ''}  product-item`}>{data.icon} {data.name}</Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>

            <div className='container mx-auto '>
                {children}

                <div className='seeds-card-main row m-0'>
                    {allProducts.map((data, index) => {
                        return (
                            <div className='col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col' key={index}>
                                <div className='seed-card '>
                                    <img className='w-100 intro-img like-res' src={data.img} alt='' />

                                    <span className='position-relative like-post-main'>
                                        <img className='w-100 intro-img position-relative' src={data.img} alt='' />
                                        <span className='like-post'>
                                            <HeartIcon />
                                        </span>
                                    </span>
                                    <div className='ps-sm-0 ps-3'>
                                        <p className='my-sm-4 mb-3 font-24 font-weight-700'>{data.name}</p>
                                        <div className='d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2'>
                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                <DistanceIcon />
                                                {data.distance}
                                            </span>
                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                {data.type === 'dispensary' ?
                                                    <DispensryProductIcon />
                                                    :
                                                    <>
                                                        {data.type === 'seed' ?
                                                            <CountIcon />
                                                            :
                                                            <CountIcon />
                                                        }
                                                    </>

                                                }
                                                {data.count}</span>
                                        </div>
                                        {data.timing && <span className='d-flex gap-2 align-items-center font-18 font-weight-500  mb-sm-3 mb-2'>
                                            <TimerIcon />
                                            {data.timing}</span>}
                                        <span className='d-flex gap-2 align-items-center font-18 font-weight-500 mb-sm-4 pb-sm-1 mb-3'>
                                            <LocationIcon />
                                            {data.location}</span>
                                        <div className='d-flex justify-content-between align-items-center gap-2 flex-wrap'>
                                            <div className='d-flex gap-2 align-items-center flex-wrap'>
                                                <span className='d-flex gap-2 align-items-center font-24 font-weight-700'>
                                                    <RatingIcon />
                                                    {data.rating}
                                                </span>
                                                <span className='font-14-100 text-grey font-weight-400'>
                                                    {data.totalReviews}
                                                </span>
                                            </div>
                                            <button className='green-btn w-auto ps-3 pe-1 d-flex align-items-center font-18 py-sm-3 py-sm-2 '> <span>Message</span> <span className='send-message'><SendMailIcon /></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>




            </div>

        </div>
    )
}

export default AllProducts