"use client";
import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Maps = () => {
  const containerStyle = {
    width: "100%",
    height: "440px",
  };

  const center = {
    lat: 9.06146,
    lng: 7.50064,
  };
  return (
    <div style={{ width: "100%" }} className=" md:w-3/5">
      <LoadScript googleMapsApiKey="AIzaSyDvNPIgcSsfaoat_dtLmm3DSKaIm3gTOPo">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Maps;
