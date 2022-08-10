import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

import MapComponent from "./components/MapComponent";

function App() {
  return (
    <div className="App">
      <h1>Commuter Pal</h1>
      <MapComponent />
    </div>
  );
}

export default App;
