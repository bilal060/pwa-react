import React from 'react'
import seed1 from '../../assets/Images/seed1.svg'
import seed2 from '../../assets/Images/seed2.svg'
import seed3 from '../../assets/Images/seed3.svg'
import mapSeed1 from '../../assets/Images/mapSeed1.svg'

import { Link } from 'react-router-dom'
import DistanceIcon from '../../assets/Images/Distance'
import LocationIcon from '../../assets/Images/Location'
import RatingIcon from '../../assets/Images/Rating'
import FavouriteIcon from '../../assets/Images/FavouriteIcon'
import GoogleMapReact from 'google-map-react';
import SeedICon from '../../assets/Images/Seed'


const seedsDetail = [
    {
        id: 1,
        name: "Raza Awan",
    },
    {
        id: 2,
        name: "Raza Awan",
    },
    {
        id: 3,
        name: "Raza Awan",
    },
    // {
    //     id: 4,
    //     name: "Raza Awan",
    // },
    // {
    //     id: 5,
    //     name: "Raza Awan",
    // },
    // {
    //     id: 6,
    //     name: "Raza Awan",
    // },
];
const seedData = [
    {
        id: 1,
        name: 'Toronto, Ontario',
        img: seed1,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 2,
        name: 'Toronto, Ontario',
        img: seed2,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    {
        id: 3,
        name: 'Toronto, Ontario',
        img: seed3,
        distance: '3 km Away',
        location: 'Indica, White Rhino',
        count: '20 Seeds',
        rating: '5.0',
        totalReviews: '(56 Reviews)'
    },
    // {
    //     id: 4,
    //     name: 'Toronto, Ontario     ',
    //     img: seed4,
    //     distance: '3 km Away',
    //     location: 'Indica, White Rhino',
    //     count: '20 Seeds',
    //     rating: '5.0',
    //     totalReviews: '(56 Reviews)'
    // },
    // {
    //     id: 5,
    //     name: 'Toronto, Ontario     ',
    //     img: seed1,
    //     distance: '3 km Away',
    //     location: 'Indica, White Rhino',
    //     count: '20 Seeds',
    //     rating: '5.0',
    //     totalReviews: '(56 Reviews)'
    // },
    // {
    //     id: 6,
    //     name: 'Toronto, Ontario     ',
    //     img: seed2,
    //     distance: '3 km Away',
    //     location: 'Indica, White Rhino',
    //     count: '20 Seeds',
    //     rating: '5.0',
    //     totalReviews: '(56 Reviews)'
    // },
]
// const seedonMap = [
//     {
//         lat: -33.91721,
//         lng: 151.2263
//     },
//     {
//         lat: -33.91539,
//         lng: 151.2282
//     },
//     {
//         lat: -33.91747,
//         lng: 151.22912
//     },
//     {
//         lat: -33.9191,
//         lng: 151.22907
//     }
// ]
const defaultMapOptions = {
    fullscreenControl: false,
    zoomControl: false,
};
const AnyReactComponent = ({ text }) => <div>

    <div className="dropdown">
        <div className="p-0 map-dropbtn" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <SeedICon />
        </div>
        <div className="dropdown-menu map-comp-dropmenu" aria-labelledby="dropdownMenuButton">
            <img className='w-lg-40-100-40 h-100' src={mapSeed1} alt='' />

            <div className='p-3'>
                <p className='mb-3 font-18 font-weight-700'>Cannabis Name</p>
                <div className='d-flex gap-5 align-items-center mb-3 pb-1'>
                    <span className='d-flex gap-2 align-items-center font-13  font-weight-500 '>
                        <svg width={13} height={18} viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.4" d="M6.50284 0C4.08381 0 2.11719 1.91701 2.11719 4.27503C2.11719 6.58804 3.97301 8.46005 6.39205 8.54105C6.46591 8.53205 6.53977 8.53205 6.59517 8.54105C6.61364 8.54105 6.62287 8.54105 6.64133 8.54105C6.65057 8.54105 6.65057 8.54105 6.6598 8.54105C9.02344 8.46005 10.8793 6.58804 10.8885 4.27503C10.8885 1.91701 8.92187 0 6.50284 0Z" fill="#5D8B2F" />
                            <path d="M11.1903 10.9352C8.61435 9.26119 4.41335 9.26119 1.81889 10.9352C0.646307 11.7002 0 12.7352 0 13.8422C0 14.9492 0.646307 15.9752 1.80966 16.7312C3.10227 17.5772 4.80114 18.0002 6.5 18.0002C8.19886 18.0002 9.89773 17.5772 11.1903 16.7312C12.3537 15.9662 13 14.9402 13 13.8242C12.9908 12.7172 12.3537 11.6912 11.1903 10.9352Z" fill="#5D8B2F" />
                        </svg>
                        <span>Tony Stark</span>
                    </span>

                    <span className='d-flex gap-2 align-items-center font-13 font-weight-700'>
                        <RatingIcon />
                        <span>5.0</span>
                    </span>
                </div>
                <div className='d-flex gap-5 align-items-center mb-3 pb-1'>
                    <span className='d-flex gap-1 align-items-center font-13 font-weight-500'>
                        <DistanceIcon />
                        3 km Away
                    </span>
                    <span className='d-flex gap-1 align-items-center font-13 font-weight-500'>
                        <svg width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.603 0C9.62311 0 7.20508 2.35236 7.20508 5.25131C7.20508 8.15027 9.62311 10.5026 12.603 10.5026C15.5829 10.5026 18.0009 8.15027 18.0009 5.25131C18.0009 2.35236 15.5829 0 12.603 0Z" fill="#5D8B2F" />
                            <path opacity="0.6" d="M3.34108 11.0098C1.50498 11.0098 0 12.4641 0 14.2601C0 16.0561 1.49495 17.5105 3.34108 17.5105C5.17717 17.5105 6.68218 16.0561 6.68218 14.2601C6.68218 12.4641 5.17717 11.0098 3.34108 11.0098Z" fill="#5D8B2F" />
                            <path opacity="0.4" d="M13.6358 14.5146C12.0806 14.5146 10.8164 15.7445 10.8164 17.2574C10.8164 18.7704 12.0806 20.0002 13.6358 20.0002C15.1909 20.0002 16.4551 18.7704 16.4551 17.2574C16.4551 15.7445 15.1909 14.5146 13.6358 14.5146Z" fill="#5D8B2F" />
                        </svg>
                        20 Seeds
                    </span>
                </div>
                <span className='d-flex gap-2 align-items-center font-13 font-weight-500'>
                    <LocationIcon />
                    <span>789 Yonge St, Toronto, ON M4W 2G8, Canada</span>
                </span>
            </div>

        </div>
    </div>


</div>;

const SeedMap = () => {
    const defaultProps = {
        center: {
            lat: -33.91722,
            lng: 151.23064
        },
        zoom: 16
    };


    return (
        <div>
            <div className='row flex-md-row flex-column-reverse m-0 seed-card p-0 flex-row'>
                <div
                    className="col-md-6 p-0 nav flex-column nav-pills map-card-col"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                >
                    {seedData.map((data, index) => {
                        return (
                            <div
                                key={index}
                                className="nav-link w-100 map-link bg-white rounded-0 w-100 justify-content-start h-auto"
                                id={`v-pills-${data.id}-tab`}
                                data-toggle="pill"
                                href={`#v-pills-${data.id}`}
                                role="tab"
                                aria-controls={`v-pills-${data.id}`}
                                aria-selected="true"
                            >
                                <div className='flex-column'>
                                    <div className='position-relative text-black d-flex flex-lg-row flex-md-column justify-content-between gap-sm-4 ga-2'>
                                        <img className='w-lg-40-100-40 intro-img h-100' src={data.img} alt='' />
                                        <div className='ps-sm-0 ps-3 w-100 d-flex flex-column justify-content-between'>
                                            <div>
                                                <p className='mb-3 font-24 font-weight-700'>{data.name}</p>
                                                <div className='d-flex gap-2 align-items-sm-center flex-sm-row flex-column mb-sm-3 mb-2'>
                                                    <span className='d-flex gap-2 align-items-center font-18  font-weight-500 '>
                                                        <svg width={13} height={18} viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.4" d="M6.50284 0C4.08381 0 2.11719 1.91701 2.11719 4.27503C2.11719 6.58804 3.97301 8.46005 6.39205 8.54105C6.46591 8.53205 6.53977 8.53205 6.59517 8.54105C6.61364 8.54105 6.62287 8.54105 6.64133 8.54105C6.65057 8.54105 6.65057 8.54105 6.6598 8.54105C9.02344 8.46005 10.8793 6.58804 10.8885 4.27503C10.8885 1.91701 8.92187 0 6.50284 0Z" fill="#5D8B2F" />
                                                            <path d="M11.1903 10.9352C8.61435 9.26119 4.41335 9.26119 1.81889 10.9352C0.646307 11.7002 0 12.7352 0 13.8422C0 14.9492 0.646307 15.9752 1.80966 16.7312C3.10227 17.5772 4.80114 18.0002 6.5 18.0002C8.19886 18.0002 9.89773 17.5772 11.1903 16.7312C12.3537 15.9662 13 14.9402 13 13.8242C12.9908 12.7172 12.3537 11.6912 11.1903 10.9352Z" fill="#5D8B2F" />
                                                        </svg>
                                                        <span>Tony Stark</span>
                                                    </span>
                                                    <span className='d-flex gap-1 align-items-center font-18 font-weight-500'>
                                                        <DistanceIcon />
                                                        {data.distance}
                                                    </span>
                                                    <span className='d-flex gap-1 align-items-center font-18 font-weight-500'>
                                                        <svg width={18} height={20} viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.603 0C9.62311 0 7.20508 2.35236 7.20508 5.25131C7.20508 8.15027 9.62311 10.5026 12.603 10.5026C15.5829 10.5026 18.0009 8.15027 18.0009 5.25131C18.0009 2.35236 15.5829 0 12.603 0Z" fill="#5D8B2F" />
                                                            <path opacity="0.6" d="M3.34108 11.0098C1.50498 11.0098 0 12.4641 0 14.2601C0 16.0561 1.49495 17.5105 3.34108 17.5105C5.17717 17.5105 6.68218 16.0561 6.68218 14.2601C6.68218 12.4641 5.17717 11.0098 3.34108 11.0098Z" fill="#5D8B2F" />
                                                            <path opacity="0.4" d="M13.6358 14.5146C12.0806 14.5146 10.8164 15.7445 10.8164 17.2574C10.8164 18.7704 12.0806 20.0002 13.6358 20.0002C15.1909 20.0002 16.4551 18.7704 16.4551 17.2574C16.4551 15.7445 15.1909 14.5146 13.6358 14.5146Z" fill="#5D8B2F" />
                                                        </svg>
                                                        {data.count}
                                                    </span>
                                                </div>
                                                <span className='d-flex gap-2 align-items-center font-18 font-weight-500'>
                                                    <LocationIcon />
                                                    <span>789 Yonge St, Toronto, ON M4W 2G8, Canada</span>
                                                </span>
                                            </div>

                                            <div className='d-xl-flex d-none flex-xl-row flex-column justify-content-between align-items-end gap-xl-3 gap-2 mt-3 '>
                                                <div className='d-flex gap-2 align-items-center flex-wrap'>
                                                    <span className='d-flex gap-2 align-items-center font-18 font-weight-700'>
                                                        <RatingIcon />
                                                        <span>5.0</span>
                                                    </span>
                                                    <span className='font-14-100 text-grey font-weight-400'>
                                                        <span>(56 Reviews)</span>
                                                    </span>
                                                </div>
                                                <Link to={'/home/seed/seedinfo'} className='green-btn-outline bg-primary-green text-white ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2 w-max-content'> <span>View Profile </span> <span className='icon-green-bg bg-light-green'>
                                                    <FavouriteIcon />
                                                </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='d-xl-none d-flex flex-row justify-content-between align-items-end gap-xl-3 gap-2 mt-3 flex-wrap'>
                                        <div className='d-flex gap-2 align-items-center'>
                                            <span className='d-flex gap-2 align-items-center font-18 font-weight-700'>
                                                <RatingIcon />
                                                <span className='text-black'>5.0</span>
                                            </span>
                                            <span className='font-14-100 text-grey font-weight-400'>
                                                <span>(56 Reviews)</span>
                                            </span>
                                        </div>
                                        <Link to={'/favourite/userprofile'} className='green-btn-outline bg-primary-green text-white ps-3 pe-1 d-flex align-items-center justify-content-between font-18 py-sm-3 py-2 gap-2 w-max-content'> <span>View Profile </span> <span className='icon-green-bg bg-light-green'>
                                            <FavouriteIcon />
                                        </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
                <div className='col-md-6 p-0 mb-md-0 mb-4 p-3'>
                    {seedsDetail.map((chatsdetail, index) => {
                        return (
                            <div
                                key={index}
                                className="tab-pane h-100 w-100 fade active  chat-detail"
                                id={`v-pills-${chatsdetail.id}`}
                                role="tabpanel"
                                aria-labelledby={`v-pills-${chatsdetail.id}-tab`}
                            >
                                <div style={{ height: '100vh', width: '100%' }} className='custom-map'>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "" }}
                                        defaultCenter={defaultProps.center}
                                        defaultZoom={defaultProps.zoom}
                                        options={defaultMapOptions}

                                    >
                                        <AnyReactComponent
                                            lat={-33.91721}
                                            lng={151.2263}
                                            text="My name os raza"
                                        />
                                        <AnyReactComponent
                                            lat={-33.91539}
                                            lng={151.2282}
                                            text="My name os raza"
                                        />
                                        <AnyReactComponent
                                            lat={-33.91747}
                                            lng={151.22912}
                                            text="My name os raza"
                                        />
                                        <AnyReactComponent
                                            lat={-33.9191}
                                            lng={151.22907}
                                            text="My name os raza"
                                        />
                                    </GoogleMapReact>
                                    {/* <Map places={data} center={{ lat: -24.9923319, lng: 135.2252427 }} />; */}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default SeedMap