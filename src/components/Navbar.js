import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";


export default function Navbar(prop) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${prop.mode} bg-${prop.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {prop.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {prop.Home}
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/about">
                {prop.About}
              </a>
            </li> */}
            
           
         
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={prop.toggleMode}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  About: PropTypes.string,
  Home : PropTypes.string
};

Navbar.defaultProps = {
  title: " Set Title here",
  About: "About",
  Home : "Home"
};
