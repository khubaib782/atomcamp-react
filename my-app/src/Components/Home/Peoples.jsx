import React, { Fragment, useState } from "react";
import "./Peoples.css";
import { FaLinkedin } from "react-icons/fa";

function Peoples() {
  const headingColors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00"];
  const imageData = [
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2024/01/Naveed-Iftikhar-300x300.jpeg",
      name: "Naveed Iftikhar",
    },
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2023/09/Sidra-cheema-Trainer-300x300.png",
      name: "Sidra Cheema",
    },
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2023/12/husain-khawaja-300x300.png",
      name: "Hussain Shahbaz",
    },
  ];

  const whiteCards = [
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2023/12/Hajra-Anwar.jpg",
      name: "Hajra Anwar",
      job: "Data Science Trainee",
      heading: "From Aerospace to AI",
      description:
        "During my 3rd month in the bootcamp, I got a job as an AI Engineer at Polix.ai, developing real-world innovative solutions for multiple markets with a core focus on LLMs and NLPs.",
    },
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2024/01/Rabab-Hussain.png",
      name: "Rebab Hussain",
      job: "Data Science Trainee",
      heading: "From Aerospace to AI",
      description:
        "I got a job as a Data Steward at Zones IT Solutions in the 3rd month of my training at atomcamp’s Data Engineering bootcamp.",
    },
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2023/12/Haris-Dilawar.jpg",
      name: "Haris Dilawar",
      job: "Data Science Trainee",
      heading: "From Aerospace to AI",
      description:
        "I got a job as a Data Steward at Zones IT Solutions in the 3rd month of my training at atomcamp’s Data Engineering bootcamp.",
    },
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2023/12/Hajra-Anwar.jpg",
      name: "Hajra Anwar",
      job: "Data Science Trainee",
      heading: "From Aerospace to AI",
      description:
        "During my 3rd month in the bootcamp, I got a job as an AI Engineer at Polix.ai, developing real-world innovative solutions for multiple markets with a core focus on LLMs and NLPs.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Fragment>
      <div className="container-fluid background-theme">
        <div className="row">
          <div className="col-4">
            <div className="div-left-text">
              <h2 class="learn-text">
                Learn from the <span style={{ color: "#99f930" }}>best</span>,
                become the best<span style={{ color: "#99f930" }}>.</span>
              </h2>
              <p>
                <span style={{ fontWeight: "400" }}>
                  Chat and network with{" "}
                </span>
                <span style={{ color: "#99f930" }}>
                  <b>industry leaders</b>
                </span>
                <span style={{ fontWeight: "400" }}>
                  <span style={{ color: "#99f930" }}>.</span> Discover{" "}
                </span>
                <span style={{ color: "#99f930" }}>
                  <b>emerging technologies</b>
                </span>
                <span style={{ fontWeight: "400" }}> in Data and AI. </span>
              </p>
            </div>
          </div>

          <div className="col-8 people-pics">
            <div className="people-container">
              {imageData.map((item, index) => (
                <div key={index} className="main-pics-div">
                  <div className="image-container">
                    <div className="image-div">
                      <img
                        style={{ width: "150px" }}
                        src={item.imageUrl}
                        alt={`Product ${index + 1}`}
                      />
                    </div>
                    <div className="name-div mt-3">
                      <h4>{item.name}</h4>
                    </div>
                    <div className="linkedin-div">
                      <FaLinkedin />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid background-people">
        <div className="row">
          <div className="col-12">
            <div className="word-div">
              <h2 style={{ color: "white" }}>
                <span style={{ color: "#99f930" }}>Words are cool,</span>
                <br />
                but have you met our incredible results?
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="white-cards-container">
              {whiteCards.map((item, index) => (
                <div key={index} className="white-div col-md-3">
                  <div className="candidate-div">
                    <img src={item.imageUrl} alt={`Slide ${index + 1}`} />
                    <div className="pt-2">
                      <h5>{item.name}</h5>
                      <p>{item.job}</p>
                    </div>
                  </div>
                  <div className="title-div">
                    <h4
                      style={{
                        color: headingColors[index % headingColors.length],
                      }}
                    >
                      {item.heading}
                    </h4>
                  </div>
                  <div className="p-card-div">
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Peoples;
