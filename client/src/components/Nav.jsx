import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  const padding = {
    padding: 5,
  };
  return (
    <div className='nav-container'>
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
  );
};

export default Nav;
