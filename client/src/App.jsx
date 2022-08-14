import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import LandingPage from "./components/LandingPage";

import MapComponent from "./components/MapComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MapComponent />} />
        <Route path="/login" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
