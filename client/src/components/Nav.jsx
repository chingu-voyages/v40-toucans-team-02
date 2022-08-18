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
      <Link style={padding} to="/login">
        login
      </Link>
      <Link style={padding} to="/register">
        register
      </Link>
    </div>
  );
};

export default Nav;
