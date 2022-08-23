import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Auth from "./components/Auth";
import MapComponent from "./components/MapComponent";
import { useState } from "react";

const padding = {
  padding: 5,
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          dashboard
        </Link>
        <Link style={padding} to="/landing">
          profile
        </Link>
        <Link style={padding} to="/auth">
          sign up
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<MapComponent />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;
