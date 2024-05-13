import React, { Fragment } from "react";
import "./EventsBanner.css";
import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import icon3 from "../../Assets/icon3.png";
import icon4 from "../../Assets/icon4.png";
import overlayImage from "../../Assets/popup-img.png";

function EventsBanner() {
  return (
    <Fragment>
      <div className="container-fluid events-background mb-5">
        <div className="row">
          <div className="col-12">
            <div className="text-div ">
              <h1>Why Choose atomcamp's Gatherings?</h1>
            </div>
            <div className="row">
              <div className="main-container col-md-7">
                <div className="icontext-container">
                  <div className="icon1-div mr-3">
                    <img src={icon1} alt="" />
                  </div>
                  <div className="icon-heading-div">
                    <h3 className="icon-heading">
                      Expert Speaker Lineup: Discover from the Best
                    </h3>
                  </div>
                </div>
                <div className="icontext-container">
                  <div className="icon1-div mr-3">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="icon-heading-div">
                    <h3 className="icon-heading">
                      Hands-On Workshops: Learning by Doing
                    </h3>
                  </div>
                </div>
                <div className="icontext-container">
                  <div className="icon1-div mr-3">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="icon-heading-div">
                    <h3 className="icon-heading">
                      Diverse Community: Connect with Data Enthusiasts
                    </h3>
                  </div>
                </div>
                <div className="icontext-container">
                  <div className="icon1-div mr-3">
                    <img src={icon4} alt="" />
                  </div>
                  <div className="icon-heading-div">
                    <h3 className="icon-heading">
                      Networking Opportunities: Build Valuable Connections
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb-5">
                <img style={{ width: "85%" }} src={overlayImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div style={{ marginBottom: "44px" }} className="row">
          <div className="col-12">
            <h1 className="past-head">Past Events</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default EventsBanner;
