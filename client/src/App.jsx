import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./components/LandingPage";
// import LandingPage from "./components/LandingPage";

import MapComponent from "./components/MapComponent";
import SignUp from "./components/SignUp";

function App() {
  const padding = {
    padding: 5,
  };
  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          dashboard
        </Link>
        <Link style={padding} to="/landing">
          landing page
        </Link>
        <Link style={padding} to="/signup">
          signup
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<MapComponent />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
