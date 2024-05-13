import React from "react";
import "./LogoPage.css";

const images = [
  "https://www.atomcamp.com/wp-content/uploads/2023/12/careem-logo.webp",
  "https://www.atomcamp.com/wp-content/uploads/2023/12/arca-01.png",
  "https://www.atomcamp.com/wp-content/uploads/2023/12/interloop-logo.webp",
  "https://www.atomcamp.com/wp-content/uploads/2023/12/adam-smith-logo-removebg-preview.png",
];

function LogoPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-5">
          <div className="deliver-div">
            <h2>
              Delivering <span style={{ color: "#fc8c03" }}>trainings</span> for
              tech, government, startups
              <span style={{ color: "#fc8c03" }}>.</span>
            </h2>
          </div>
        </div>
        <div className="col-7 logos-col">
          <div className="careem-div">
            <img style={{ width: "140px" }} src={images[0]} alt="" />
          </div>
          <div className="careem-div">
            <img style={{ width: "140px" }} src={images[1]} alt="" />
          </div>
          <div className="careem-div">
            <img style={{ width: "140px" }} src={images[2]} alt="" />
          </div>
          <div className="careem-div">
            <img style={{ width: "140px" }} src={images[3]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoPage;
