import React, { Fragment } from "react";
import "./PersonCards.css";
import img1 from "../../Assets/d1.png";
import img2 from "../../Assets/d2.png";
import img3 from "../../Assets/d3.png";
import img4 from "../../Assets/d4.png";
import img5 from "../../Assets/d5.png";
import img6 from "../../Assets/d6.png";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function PersonCards() {
  // Sample card data
  const cardData = [
    {
      id: 1,
      title: "Ahmad Anis: Exploring the Art & Science of Machine Learning",
      date: "4th July, 2023",
      image: img1,
    },
    {
      id: 2,
      title: "Mubashar Awan: Navigating the Data Science Landscape",
      date: "15th June, 2023",
      image: img2,
    },
    {
      id: 3,
      title: "Dr. Furqan Afzal: On Creating AI tools to study Neuroscience",
      date: "30th May, 2023",
      image: img3,
    },
    {
      id: 4,
      title: "Dr. Arjumand Younus: Leveraging AI to foster Social Good",
      date: "24th May, 2023",
      image: img4,
    },
    {
      id: 5,
      title:
        "Dr. Bushra Anjum: Breaking Barriers & Shaping Futures in Big Data",
      date: "17th May, 2023",
      image: img5,
    },
    {
      id: 6,
      title: "Fahad Mirza: On Unleashing your Curiosity to Decode your Data",
      date: "11th May, 2023",
      image: img6,
    },
  ];

  return (
    <Fragment>
      <div className="container card-container-two">
        <div className="row person-cards-row">
          {cardData.map((card) => (
            <div key={card.id} className="person-cards  ">
              <img src={card.image} alt={`Image for ${card.title}`} />
              <h3>{card.title}</h3>
              <p>{card.date}</p>
              {/* <button>{card.buttonText}</button> */}
              <div class="btn-wraper">
                <a href="/">
                  Read Article
                  {/* <i aria-hidden="true" class="fasicon icon-right-arrow2"></i> */}
                  <HiOutlineArrowLongRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div style={{ marginTop: "250px" }} className="col-12 gap"></div>
        </div>
      </div>
      <div className="container">
        <div style={{ marginBottom: "44px" }} className="row">
          <div className="col-12">
            <h1 className="atom-head">atom talk</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default PersonCards;
