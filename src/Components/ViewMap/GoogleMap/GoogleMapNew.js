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

const GoogleMapNew = compose(
  withProps({
    googleMapURL:
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (

  <GoogleMap defaultZoom={8} defaultCenter={{ lat: 43.653908, lng: -79.384293 }} onClick={() => props.setActiveMarker(null)}>
    {props.isMarkerShown && props.markersData && props.markersData.length > 0 && props.markersData.map((data, index) => (
      <Marker
        position={{ lat: data?.userId?.location?.coordinates[1], lng: data?.userId?.location?.coordinates[0] }}
        onClick={() => props.handleActiveMarker(data._id)}
        icon={{
          url:
            data.category === "seedStore"
              ? require("../../../assets/Images/seed-marker.svg")
                .default
              : data.category === "dispensary"
                ? require("../../../assets/Images/Disp White.svg").default
                : data.category === "cannabisLounge"
                  ? require("../../../assets/Images/Canabies white.svg")
                    .default
                  : data.category === "headShop"
                    ? require("../../../assets/Images/Head Shop White.svg")
                      .default
                    : require("../../../assets/Images/seed-marker.svg")
                      .default
        }}
      >
        {props.activeMarker && props.activeMarker === data._id && <InfoWindow onCloseClick={() => props.setActiveMarker(null)} >
          <div className="info-container">
            <Image
              style={{ width: "100%", height: "180px" }}
              className="img-fluid"
              src={
                Array.isArray(data.photo)
                  ? `${process.env.REACT_APP_PORT}/${data.photo[0]}`
                  : `${process.env.REACT_APP_PORT}/${data.photo}`
              }
            />
            <div className="p-3">
              <p
                className="mb-3 font-18 font-weight-700 map-link-nav"
              >
                {data?.strainName}
              </p>
              <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start flex-wrap mb-2 pb-1 gap-2">
                <span className="d-flex gap-2 align-items-center font-13  font-weight-500 ">
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
                  <span className="cut-text">
                    {data.userId?.fullName}
                  </span>
                </span>

                <span className="d-flex gap-2 align-items-center font-13 font-weight-700">
                  <RatingIcon />
                  <span>5.0</span>
                </span>
              </div>
              <div className="row mx-0 mb-2 gap-lg-0 gap-2">
                <div className="col-lg-6 col-12 p-0">
                  <span className="d-flex gap-1 align-items-center font-13 font-weight-500 w-100">
                    <DistanceIcon />
                    <span className="cut-text">
                      {data.distance} Away
                    </span>
                  </span>
                </div>
                <div className="col-lg-6 col-12 p-0">
                  <span className="d-flex justify-content-lg-end gap-1 align-items-center font-13 font-weight-500 w-100">
                    {data.quantity ? (
                      <CountIcon />
                    ) : (
                      <>{data.cost ? <PriceIcon /> : <PriceIcon />}</>
                    )}
                    {data.quantity ? (
                      `Seeds: ${data.quantity}`
                    ) : (
                      <>
                        {data.cost
                          ? `Fees: $${data.cost}`
                          : `Entry Fee: $${data.entryFee}`}
                      </>
                    )}
                  </span>
                </div>
              </div>

              <span className="d-flex gap-2 align-items-center font-13 font-weight-500">
                <LocationIcon />
                <span
                  style={{ lineHeight: "18px" }}
                  className="cut-text"
                >
                  {data.userId?.location.address}
                </span>
              </span>
            </div>
          </div>
        </InfoWindow>}
      </Marker>
    ))
    }
  </GoogleMap >
));

export default GoogleMapNew;
