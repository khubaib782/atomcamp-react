import React, { Fragment } from "react";
import "./LastCards.css";
import pic1 from "../../Assets/a1.png";
import pic2 from "../../Assets/a2.png";
import pic3 from "../../Assets/a3.jpg";

const cardDataArray = [
  {
    image: pic1,
    alt: "Image 1",
    heading: "Best Marketing Tools in 2024",
    text1: "Rida Mughees",
    text2: "5 MIN READ",
  },
  {
    image: pic2,
    alt: "Image 2",
    heading: "Augmented Reality for Heritage Conservation",
    text1: "Komal Salman",
    text2: "3 MIN READ.",
  },
  {
    image: pic3,
    alt: "Image 3",
    heading: "Bard: A Magic Of AI",
    text1: "Rabail Inshra Cheema",
    text2: "5 MIN READ",
  },
];

function LastCards() {
  return (
    <Fragment>
      <div className="container-fluid mb-3">
        <div className="row last-cards-row">
          {cardDataArray.map((card) => (
            <div key={card.id} className="last-cards col-md-4">
              <img src={card.image} alt={`Image for ${card.heading}`} />
              <h3>{card.heading}</h3>
              <p>{card.text1}</p>
              <h5>{card.text2}</h5>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default LastCards;
