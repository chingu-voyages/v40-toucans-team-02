import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const containerStyle = {
  height: "60vh",
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

const libraries = ["places"];

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAx7PGtZydPCpD6wiCX36JdjUf6-5owhRA",
    libraries: libraries,
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <Autocomplete>
        <input
          type="text"
          placeholder="Origin"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "absolute",
            top: `5px`,
            left: "50%",
            marginLeft: "-120px",
          }}
        />
      </Autocomplete>
      <Autocomplete>
        <input
          type="text"
          placeholder="Destination"
          style={{
            boxSizing: `border-box`,
            border: `1px solid transparent`,
            width: `240px`,
            height: `32px`,
            padding: `0 12px`,
            borderRadius: `3px`,
            boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
            fontSize: `14px`,
            outline: `none`,
            textOverflow: `ellipses`,
            position: "absolute",
            left: "50%",
            top: `42px`,
            marginLeft: "-120px",
          }}
        />
      </Autocomplete>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapComponent;
