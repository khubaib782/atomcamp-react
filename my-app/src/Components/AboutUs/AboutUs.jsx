import React, { Fragment } from "react";
import Navbar from "../Navbar";
import WhiteLogo from "../../Assets/white-logo.png";
import "./AboutUs.css";
import Footer from "../Footer/Footer";

function AboutUs() {
  const images = [
    "https://www.atomcamp.com/wp-content/uploads/2024/01/Naveed-Iftikhar.jpeg",
    "https://www.atomcamp.com/wp-content/uploads/2023/12/Nida-Mahmood-scaled-1-1024x1024.jpg",
    "https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/1-1-qfrujv5jhywhx1s5ndgsyz8paas1h0chbmhxf1ky38.jpg",
  ];

  return (
    <Fragment>
      <div className="container-fluid background">
        <div className="row">
          <div className="col-12">
            <Navbar
              logoSrc={WhiteLogo}
              textColor="white"
              marginLeft="90px"
              padding="5px"
            />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-7">
            <div className="first-div">
              <h1>
                What is <span style={{ color: "#99d930" }}> atomcamp</span>?
              </h1>
              <div className="second-div">
                <p>
                  We are a young ed-tech platform focused on Data Science and
                  AI. We commenced operations in 2021. Since then, we have
                  experienced a continuous upward trajectory, both within the
                  ed-tech ecosystem and within our own team.{" "}
                </p>
                <p>
                  Two years down the lane, we are proud to have a team of 35
                  employees, with the distinction of 75% of them being women.
                  This remarkable achievement reflects the efforts of our
                  founders, Dr. Naveed Iftikhar and Nida Mehmood, who have
                  carefully curated this team with dedication.
                </p>
                <p>
                  Our mission, focused on providing accessible and all-inclusive
                  education in the fields of Data Science and AI, has witnessed
                  exponential growth with each successive cohort of bootcamps.{" "}
                </p>
                <p>
                  Through these training initiatives, we have nurtured a
                  community of lifelong learners who not only contribute to the
                  Data and AI ecosystem but have also honed the art of effective
                  collaboration between diverse entities.
                </p>
                <p>
                  Through these training initiatives, we have nurtured a
                  community of lifelong learners who not only contribute to the
                  Data and AI ecosystem but have also honed the art of effective
                  collaboration between diverse entities.
                </p>
              </div>
            </div>
          </div>
          <div className="col-5">
            <div className="img-container">
              <div className="img-one">
                <img src={images[0]} alt="" />
                <h5>Dr Naveed Iftikhar</h5>
                <p>Co-founder</p>
              </div>
              <div className="img-one">
                <img src={images[1]} alt="" />
                <h5>Nida Mahmood</h5>
                <p>Co-founder</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="big-text">
              <h2>
                A gateway to unlocking{" "}
                <span style={{ color: "#fc8c03" }}>opportunities</span> with{" "}
                <span style={{ color: "#99f930" }}>
                  Artificial Intelligence
                </span>{" "}
                &amp; <span style={{ color: "#99f930" }}>Data Science</span>.
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default AboutUs;
