import React, { Fragment } from "react";
import Logo from "../Assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ logoSrc, textColor, marginLeft, padding }) {
  const buttonStyle = { color: textColor };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 navbar-col">
          <nav className="navbar navbar-expand-lg bg-transparent  navbar-light">
            <Link to="/" style={buttonStyle} className="nav-link">
              <img
                src={logoSrc}
                alt="logo"
                style={{ width: "175px", marginLeft, padding }}
              />
            </Link>
            {/* <a className="navbar-brand" href="#"></a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to="/about-us" style={buttonStyle} className="nav-link">
                    About Us
                  </Link>
                  {/* <a
                    className="nav-link nav-color"
                    style={buttonStyle}
                    href="#"
                  >
                    About Us <span className="sr-only">(current)</span>
                  </a> */}
                </li>
                <li className="nav-item">
                  <Link to="/courses" style={buttonStyle} className="nav-link">
                    Courses
                  </Link>
                  {/* <a style={buttonStyle} className="nav-link" href="#">
                    Courses
                  </a> */}
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#rev">
                    Events
                  </a> */}
                  <Link to="/events" style={buttonStyle} className="nav-link">
                    Events
                  </Link>
                  {/* <ScrollLink
                      className="nav-link"
                      to="rev"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-90}
                      style={{ cursor: "pointer" }}
                    >
                      Reviews
                    </ScrollLink> */}
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link" href="#">
                    Publications
                  </a> */}
                  <Link
                    to="/publication"
                    style={buttonStyle}
                    className="nav-link"
                  >
                    Publications
                  </Link>
                  {/* <Link to="/contact" className="nav-link">
                      Contact Us
                    </Link> */}
                </li>
                <li className="nav-item pr-0">
                  {/* <a className="nav-link" href="#">
                      Sign Up
                    </a> */}
                  <Link to="/sign-up" style={buttonStyle} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
