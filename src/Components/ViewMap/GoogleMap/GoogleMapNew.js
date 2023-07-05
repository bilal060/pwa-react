import React, { useState, useEffect, useCallback } from "react";
import { Image } from "react-bootstrap";
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindowF } from '@react-google-maps/api';

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
                                        <div style={{ width: '250px' }}>
                                            <Image style={{ width: '100%', height: '150px' }} src={Array.isArray(data.photo) ? `${process.env.REACT_APP_PORT}/${data.photo[0]}` : `${process.env.REACT_APP_PORT}/${data.photo}`} />
                                            <p className="window-title">{data.brandName || data.strainName}</p>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p>{data.userId.fullName}</p>
                                                <p>{data.userId.ratingsAverage}</p>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p>{data.distance}</p>
                                                <p>{data.userId.ratingsAverage}</p>
                                            </div>
                                            <p>{data.userId.location.address}</p>
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