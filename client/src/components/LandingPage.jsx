import React from "react";
import MapComponent from "./MapComponent";

const LandingPage = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem("CommuterPalAuthToken");
    setIsLoggedIn(false);
  };
  return (
    <div>
      <h1>Commuter Pal</h1>
      <nav>
        <a href="#" onClick={handleLogout}>
          logout
        </a>
      </nav>
      <MapComponent />
    </div>
  );
};

export default LandingPage;
