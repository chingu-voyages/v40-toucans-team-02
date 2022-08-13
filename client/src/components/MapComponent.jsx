import React from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Directions from "./Directions";

const libraries = ["places"];

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAx7PGtZydPCpD6wiCX36JdjUf6-5owhRA",
    libraries: libraries,
  });

  return isLoaded ? <Directions /> : <></>;
};

export default MapComponent;
