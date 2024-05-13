import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../Navbar";
import WhiteLogo from "../../Assets/white-logo.png";
import "./HomePage.css";
import { FaArrowDown } from "react-icons/fa6";
import CountUp from "react-countup";

function HomePage() {
  const [dynamicText, setDynamicText] = useState("Engineers");
  const textVariations = [
    "Entrepreneurs",
    "Managers",
    "Marketeers",
    "Consultants",
    "Scientists",
    "Economists",
    "Strategists",
    "YOU",
  ];

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDynamicText(textVariations[currentIndex]);

      currentIndex = (currentIndex + 1) % textVariations.length;
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <div className="container-fluid main-banner">
        <div className="row">
          <Navbar
            logoSrc={WhiteLogo}
            textColor="white"
            marginLeft="90px"
            padding="5px"
          />
          <div className="col-12"></div>
        </div>
        <div className="row">
          <div className="col-7">
            <div className="data-div">
              <h1>
                Data Science & AI Upskilling for <span>{dynamicText}</span>
              </h1>
            </div>
            <div className="start-btn-div">
              <button className="start-btn">
                {" "}
                Start Learning <FaArrowDown />
              </button>
            </div>
          </div>
          <div className="col-5">
            <div className="countup-div mt-4">
              <div className="job-countup-div">
                <CountUp
                  style={{ color: "white" }}
                  start={0}
                  end={70}
                  duration={3}
                  decimals={0}
                  suffix="%"
                />
              </div>
              <div className="job-text">Job Placement</div>
              <div className="job-countup-div mt-4">
                <CountUp
                  style={{ color: "white" }}
                  start={0}
                  end={45}
                  duration={3}
                  decimals={0}
                  suffix="%"
                />
              </div>
              <div className="job-text">Women Participation</div>
              <div className="job-countup-div mt-4">
                <CountUp
                  style={{ color: "white" }}
                  start={0}
                  end={30}
                  duration={3}
                  decimals={0}
                />
              </div>
              <div className="job-text">Corporate Clients</div>
              <div className="job-countup-div mt-4">
                <CountUp
                  style={{ color: "white" }}
                  start={0}
                  end={2000}
                  duration={3}
                  decimals={0}
                  suffix="+"
                />
              </div>
              <div className="job-text">People Trained in Bootcamps</div>
              <div className="job-countup-div mt-4">
                <CountUp
                  style={{ color: "white" }}
                  start={0}
                  end={200}
                  duration={3}
                  decimals={0}
                  suffix="+"
                />
              </div>
              <div className="job-text">Soft Skills Trainings</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomePage;
