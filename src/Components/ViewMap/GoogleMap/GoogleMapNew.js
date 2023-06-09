import React, { useState, useCallback, useEffect } from "react";
import { Image } from "react-bootstrap";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import DistanceIcon from "../../../assets/Images/Distance";
import LocationIcon from "../../../assets/Images/Location";
import RatingIcon from "../../../assets/Images/Rating";
import CountIcon from "../../../assets/Images/Count";
import PriceIcon from "../../../assets/Images/Price";
import { useNavigate } from "react-router-dom";
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMapNew = ({ markersData }) => {
  const navigate = useNavigate();

  const [activeMarker, setActiveMarker] = useState(null);
  const [center, setCenter] = useState(null);
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  const containerStyle = {
    width: "100%",
    height: "80vh",
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBji3krLZlmFpDakJ1jadbsMuL_ZJfazfA",
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(
    function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);

      map.fitBounds(bounds);

      setMap(map);
    },
    [center]
  );

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const successCallback = (position) => {
    setCenter({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  };

  const errorCallback = (error) => {
    console.log(error);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);
  console.log(markersData);
  return (
    <div className=" bg-white rounded-4 p-3">
      {center !== null && isLoaded ? (
        // <GoogleMap
        //   onLoad={onLoad}
        //   onUnmount={onUnmount}
        //   center={center}
        //   zoom={4}
        //   onClick={() => setActiveMarker(null)}
        //   mapContainerStyle={containerStyle}
        // >
        //   {markersData &&
        //     markersData.length > 0 &&
        //     markersData.map((data, index) => (
        //       <MarkerF
        //         key={index}
        //         position={{
        //           lat: data?.userId?.location?.coordinates[0],
        //           lng: data?.userId?.location?.coordinates[1],
        //         }}
        //         onClick={() => handleActiveMarker(data._id)}
        //         icon={{
        //           url:
        //             data.category === "seedStore"
        //               ? require("../../../assets/Images/seed-marker.svg")
        //                   .default
        //               : data.category === "dispensary"
        //               ? require("../../../assets/Images/Disp White.svg").default
        //               : data.category === "cannabisLounge"
        //               ? require("../../../assets/Images/Canabies white.svg")
        //                   .default
        //               : data.category === "headShop"
        //               ? require("../../../assets/Images/Head Shop White.svg")
        //                   .default
        //               : require("../../../assets/Images/seed-marker.svg")
        //                   .default,
        //
        //           // url: require("../../../assets/Images/seed-marker.svg")
        //           //   .default,
        //           scaledSize: new window.google.maps.Size("100", "100"),
        //           scale: new window.google.maps.Size("100", "100"),
        //         }}
        //       >
        //         {activeMarker === data._id ? (
        //           <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
        //             <div className="info-container">
        //               <Image
        //                 style={{ width: "100%", height: "180px" }}
        //                 className="img-fluid"
        //                 src={
        //                   Array.isArray(data.photo)
        //                     ? `${process.env.REACT_APP_PORT}/${data.photo[0]}`
        //                     : `${process.env.REACT_APP_PORT}/${data.photo}`
        //                 }
        //               />
        //               <div className="p-3">
        //                 <p
        //                   className="mb-3 font-18 font-weight-700 map-link-nav"
        //                   onClick={() =>
        //                     navigate(`/home/${data.category}/${data._id}`)
        //                   }
        //                 >
        //                   {data?.strainName}
        //                 </p>
        //                 <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start flex-wrap mb-2 pb-1 gap-2">
        //                   <span className="d-flex gap-2 align-items-center font-13  font-weight-500 ">
        //                     <svg
        //                       width={13}
        //                       height={18}
        //                       viewBox="0 0 13 18"
        //                       fill="none"
        //                       xmlns="http://www.w3.org/2000/svg"
        //                     >
        //                       <path
        //                         opacity="0.4"
        //                         d="M6.50284 0C4.08381 0 2.11719 1.91701 2.11719 4.27503C2.11719 6.58804 3.97301 8.46005 6.39205 8.54105C6.46591 8.53205 6.53977 8.53205 6.59517 8.54105C6.61364 8.54105 6.62287 8.54105 6.64133 8.54105C6.65057 8.54105 6.65057 8.54105 6.6598 8.54105C9.02344 8.46005 10.8793 6.58804 10.8885 4.27503C10.8885 1.91701 8.92187 0 6.50284 0Z"
        //                         fill="#5D8B2F"
        //                       />
        //                       <path
        //                         d="M11.1903 10.9352C8.61435 9.26119 4.41335 9.26119 1.81889 10.9352C0.646307 11.7002 0 12.7352 0 13.8422C0 14.9492 0.646307 15.9752 1.80966 16.7312C3.10227 17.5772 4.80114 18.0002 6.5 18.0002C8.19886 18.0002 9.89773 17.5772 11.1903 16.7312C12.3537 15.9662 13 14.9402 13 13.8242C12.9908 12.7172 12.3537 11.6912 11.1903 10.9352Z"
        //                         fill="#5D8B2F"
        //                       />
        //                     </svg>
        //                     <span className="cut-text">
        //                       {data.userId?.fullName}
        //                     </span>
        //                   </span>
        //
        //                   <span className="d-flex gap-2 align-items-center font-13 font-weight-700">
        //                     <RatingIcon />
        //                     <span>5.0</span>
        //                   </span>
        //                 </div>
        //                 <div className="row mx-0 mb-2 gap-lg-0 gap-2">
        //                   <div className="col-lg-6 col-12 p-0">
        //                     <span className="d-flex gap-1 align-items-center font-13 font-weight-500 w-100">
        //                       <DistanceIcon />
        //                       <span className="cut-text">
        //                         {data.distance} Away
        //                       </span>
        //                     </span>
        //                   </div>
        //                   <div className="col-lg-6 col-12 p-0">
        //                     <span className="d-flex justify-content-lg-end gap-1 align-items-center font-13 font-weight-500 w-100">
        //                       {data.quantity ? (
        //                         <CountIcon />
        //                       ) : (
        //                         <>{data.cost ? <PriceIcon /> : <PriceIcon />}</>
        //                       )}
        //                       {data.quantity ? (
        //                         `Seeds: ${data.quantity}`
        //                       ) : (
        //                         <>
        //                           {data.cost
        //                             ? `Fees: $${data.cost}`
        //                             : `Entry Fee: $${data.entryFee}`}
        //                         </>
        //                       )}
        //                     </span>
        //                   </div>
        //                 </div>
        //
        //                 <span className="d-flex gap-2 align-items-center font-13 font-weight-500">
        //                   <LocationIcon />
        //                   <span
        //                     style={{ lineHeight: "18px" }}
        //                     className="cut-text"
        //                   >
        //                     {data.userId?.location.address}
        //                   </span>
        //                 </span>
        //               </div>
        //             </div>
        //           </InfoWindowF>
        //         ) : null}
        //       </MarkerF>
        //     ))}
        // </GoogleMap>
          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key:'AIzaSyBji3krLZlmFpDakJ1jadbsMuL_ZJfazfA' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
              />
            </GoogleMapReact>
          </div>
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default GoogleMapNew;
