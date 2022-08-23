import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import MapComponent from "./components/MapComponent";



function App() {
  return (
    <Router>
      <div>
        <Link style={padding} to="/">
          dashboard
        </Link>
        <Link style={padding} to="/landing">
          profile
        </Link>
       
        <Link style = {padding} to = "/signin">
          sign in
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<MapComponent />} />
        {/* <Route path="/landing" element={<Welcome />} /> */}
        <Route path="/signin" element={<SignUp/>} />
        <Route path = "/signin" element = {<Login />} />

      </Routes>
    </Router>
  );
}

export default App;
