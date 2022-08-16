import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import LandingPage from "./components/LandingPage";

import MapComponent from "./components/MapComponent";
import Nav from './components/Nav';
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MapComponent />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
