import React from "react";
import MapComponent from "./MapComponent";
import jwt_decode from "jwt-decode";

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
      <button onClick={handleLogout}>logout</button>
      <MapComponent />
    </div>
  );
};

export default LandingPage;
