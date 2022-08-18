import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login';

import MapComponent from "./components/MapComponent";
import Nav from './components/Nav';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<MapComponent />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
