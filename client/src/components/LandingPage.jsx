import React from "react";
import MapComponent from "./MapComponent";
import jwt_decode from "jwt-decode";
import { Button } from "react-bootstrap";
import FaveRoutes from './FaveRoutes';

const LandingPage = ({ setIsLoggedIn }) => {
  const authToken = localStorage.getItem("CommuterPalAuthToken");
  const { username } = jwt_decode(authToken);

  const handleLogout = () => {
    localStorage.removeItem("CommuterPalAuthToken");
    setIsLoggedIn(false);
  };
  return (
    <div>
      <h1>{`Welcome ${username}`}</h1>
      <Button var="primary" onClick={handleLogout}>logout</Button>
      <MapComponent />
      <FaveRoutes />
    </div>
  );
};

export default LandingPage;
