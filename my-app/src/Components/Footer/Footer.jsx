import React from "react";
import "./Footer.css";
import Logo from "../../Assets/logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid pr-0">
      <div className="row footer-row">
        <div className="col-md-4 cols-adj">
          <div className="div-adj">
            <img src={Logo} alt="logo" style={{ width: "70%" }} />
          </div>
          <div className="div-adj">
            <p>
              <span>
                atomcamp is a continuous learning platform{" "}
                <span> unlocking opportunities with </span>
                <span>Data Science.</span>
              </span>
            </p>
          </div>
          <div className="div-adj">
            <p>
              <span>
                For general inquiries:
                <br />
                <span style={{ color: "#99d930" }}>team@atomcamp.com</span>
              </span>
            </p>
          </div>
        </div>
        <div className="col-md-4 cols-adj">
          <div className="nav-div">
            <nav className="navbar">
              <ul className="ul-adj">
                <li>
                  <a href="https://www.atomcamp.com/" class="">
                    Home
                  </a>
                </li>
                <li class="">
                  <a href="https://www.atomcamp.com/about-us/" class="">
                    About
                  </a>
                </li>
                <li class="">
                  <a href="https://www.atomcamp.com/course/" class="">
                    Course
                  </a>
                </li>
                <li class="">
                  <a href="https://www.atomcamp.com/publications/" class="">
                    Publications
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="col-md-4 last-col-adj">
          <div className="last-div">
            <p>
              Don’t miss our future updates! <br />
              Get Subscribed Today!
            </p>
          </div>
          <div className="email-div">
            <form>
              <label htmlFor="exampleInputEmail1"></label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter your email..."
              />
            </form>
            <button type="submit" className="btn sub-btn">
              Subscribe
            </button>
          </div>
        </div>
        <div className="container">
          <div className="row footer-row">
            <div class="divider mb-5">
              {/* <span class="divider-separator"></span> */}
            </div>
          </div>
          <div className="row footer-row">
            <div className="col-md-6">
              <ul class="contact-list">
                <li class="">
                  <span class="">
                    <i
                      aria-hidden="true"
                      style={{ marginRight: "8px" }}
                      class="fas fa-phone-alt"
                    ></i>
                  </span>
                  <span class=""> For Admissions: +92-302-2278385</span>
                </li>
                <li class="">
                  <span class="">
                    <i
                      aria-hidden="true"
                      style={{ marginRight: "8px" }}
                      class="fas fa-envelope-open"
                    ></i>
                  </span>
                  <span class="">
                    For Events &amp; Partnerships: fizza@atomcamp.com
                  </span>
                </li>
                <li class="">
                  <span class="">
                    <i
                      aria-hidden="true"
                      style={{ marginRight: "13px" }}
                      class="fas fa-map-marker-alt"
                    ></i>
                  </span>
                  <span class="">15-E Rehmat Center, Blue Area, Islamabad</span>
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul className="social-icons">
                <li className="social-li">
                  <a href="">
                    <i
                      className="fab fa-twitter"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </a>
                </li>
                <li className="social-li">
                  <a href="">
                    <FaFacebookF style={{ color: "#ffffff" }} />
                  </a>
                </li>
                <li className="social-li">
                  <a href="">
                    <FaInstagram style={{ color: "#ffffff" }} />
                  </a>
                </li>
                <li className="social-li">
                  <a href="">
                    <FaLinkedin style={{ color: "#ffffff" }} />
                  </a>
                </li>
                <li className="social-li">
                  <a href="">
                    <FaYoutube style={{ color: "#ffffff" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
