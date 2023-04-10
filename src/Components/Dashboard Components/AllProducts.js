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
const ShowAllProducts = () => {

    return (
        <div className='container mx-auto '>
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
                                    <div className='d-flex justify-content-between align-items-center gap-2 flex-sm-nowrap flex-wrap'>
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
    )
}

export default ShowAllProducts