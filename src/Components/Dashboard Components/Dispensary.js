import React from 'react'
import Seed1Image from '../../assets/Images/Seed1'
import DistanceIcon from '../../assets/Images/Distance'
import RatingIcon from '../../assets/Images/Rating'
import LocationIcon from '../../assets/Images/Location'
import SendMailIcon from '../../assets/Images/SendMail'
import DispensryProductIcon from '../../assets/Images/Dispensry1'
import dispensary1 from '../../assets/Images/dispensary1.svg'
import dispensary2 from '../../assets/Images/dispensary2.svg'
import dispensary3 from '../../assets/Images/dispensary3.svg'
import dispensary4 from '../../assets/Images/dispensary4.svg'

const dispensaryData = [
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: dispensary1,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: dispensary2,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: dispensary3,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: dispensary4,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: dispensary1,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: dispensary2,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: dispensary3,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 1,
        name: 'Toronto, Ontario     ',
        img: dispensary4,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: 'Super Store',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
]
const Dispensary = () => {
    return (
        <div className='seeds-card-main row m-0'>
            {dispensaryData.map((data, index) => {
                return (
                    <div className='col-xl-3 col-lg-4  col-md-6 mb-4 seed-card-col' key={index}>
                        <div className='seed-card'>
                            <img className='w-100 intro-img' src={data.img} alt='' />
                            <div className='ps-sm-0 ps-3'>
                                <p className='my-sm-4 mb-3 font-24 font-weight-700'>{data.name}</p>
                                <div className='d-flex justify-content-between align-items-center mb-sm-3 mb-2 flex-wrap gap-2'>
                                    <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                        <DistanceIcon />
                                        {data.distance}
                                    </span>
                                    <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                        <DispensryProductIcon />
                                        {data.count}</span>
                                </div>

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
    )
}

export default Dispensary