import React, { useState, useEffect, useCallback } from "react";
import { Image } from "react-bootstrap";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';
import DistanceIcon from '../../../assets/Images/Distance';
import SeedIcon from '../../../assets/Images/Seed';
import LocationIcon from '../../../assets/Images/Location';
import RatingIcon from '../../../assets/Images/Rating';
import CannbisIcon from '../../../assets/Images/Cannbis';
import DispensaryIcon from '../../../assets/Images/Dispensary';

const GoogleMapNew = ({ markersData }) => {

    const [activeMarker, setActiveMarker] = useState(null);
    const [center, setCenter] = useState(null);

    const containerStyle = {
        width: '100%',
        height: '80vh'
    };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBji3krLZlmFpDakJ1jadbsMuL_ZJfazfA"
    });

    const [map, setMap] = useState(null);

    const onLoad = useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [center]);

    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, []);

    const handleActiveMarker = (marker) => {
        if (marker === activeMarker) {
            return;
        }
        setActiveMarker(marker);
    };

    const successCallback = (position) => {
        setCenter({ lat: position.coords.latitude, lng: position.coords.longitude })
    };

    const errorCallback = (error) => {
        console.log(error);
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }, []);

    return (
        <div className=" bg-white rounded-4 p-3">
            {
                center !== null && isLoaded ? (
                    <GoogleMap
                        onLoad={onLoad}
                        onUnmount={onUnmount}
                        center={center}
                        zoom={4}
                        onClick={() => setActiveMarker(null)}
                        mapContainerStyle={containerStyle}
                    >
                        {markersData && markersData.length > 0 && markersData.map((data, index) => (
                            <MarkerF
                                key={index}
                                position={{ lat: data?.userId?.location?.coordinates[0], lng: data?.userId?.location?.coordinates[1] }}
                                onClick={() => handleActiveMarker(data._id)}
                                icon={{
                                    url: require('../../../assets/Images/seed-marker.svg').default,
                                    scaledSize: new window.google.maps.Size('100', '100'),
                                    scale: new window.google.maps.Size('100', '100'),
                                }}
                            >
                                {activeMarker === data._id ? (
                                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                                        <div className="info-container">
                                            <Image style={{ width: '100%', height: '130px' }} src={Array.isArray(data.photo) ? `${process.env.REACT_APP_PORT}/${data.photo[0]}` : `${process.env.REACT_APP_PORT}/${data.photo}`} />
                                            <div className="p-2">
                                                <p className="window-title">{data.brandName || data.strainName}</p>
                                                <div className="d-flex align-items-center justify-content-between mt-2">
                                                    <div className="d-flex">
                                                        <svg
                                                            width={13}
                                                            height={18}
                                                            viewBox="0 0 13 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                opacity="0.4"
                                                                d="M6.50284 0C4.08381 0 2.11719 1.91701 2.11719 4.27503C2.11719 6.58804 3.97301 8.46005 6.39205 8.54105C6.46591 8.53205 6.53977 8.53205 6.59517 8.54105C6.61364 8.54105 6.62287 8.54105 6.64133 8.54105C6.65057 8.54105 6.65057 8.54105 6.6598 8.54105C9.02344 8.46005 10.8793 6.58804 10.8885 4.27503C10.8885 1.91701 8.92187 0 6.50284 0Z"
                                                                fill="#5D8B2F"
                                                            />
                                                            <path
                                                                d="M11.1903 10.9352C8.61435 9.26119 4.41335 9.26119 1.81889 10.9352C0.646307 11.7002 0 12.7352 0 13.8422C0 14.9492 0.646307 15.9752 1.80966 16.7312C3.10227 17.5772 4.80114 18.0002 6.5 18.0002C8.19886 18.0002 9.89773 17.5772 11.1903 16.7312C12.3537 15.9662 13 14.9402 13 13.8242C12.9908 12.7172 12.3537 11.6912 11.1903 10.9352Z"
                                                                fill="#5D8B2F"
                                                            />
                                                        </svg>
                                                        <p className="info-detail">{data.userId.fullName}</p>
                                                    </div>
                                                    <div className="d-flex">
                                                        <RatingIcon />
                                                        <p className="info-detail">{data.userId.ratingsAverage}</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-between mt-2">
                                                    <div className="d-flex">
                                                        <DistanceIcon />
                                                        <p className="info-detail">{data.distance}</p>
                                                    </div>
                                                    <div className="d-flex">
                                                        {data.category === "cannabisLounge" && <CannbisIcon />}
                                                        {data.category === "dispensary" && <DispensaryIcon />}
                                                        {data.category === "seedStore" && <SeedIcon />}
                                                        <p className="info-detail">1/8 OZ</p>
                                                    </div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <LocationIcon />
                                                    <p className="info-detail">{data.userId.location.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </InfoWindowF>
                                ) : null}
                            </MarkerF>
                        ))}
                    </GoogleMap>
                ) : <p>Loading</p>
            }
        </div>
    )
}

export default GoogleMapNew