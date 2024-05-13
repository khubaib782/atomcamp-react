// Card.js
import React from "react";
import "./Cards.css";

function Card({ title, image }) {
  return (
    <div className="big-cards">
      <img src={image} alt={title} className="card-image" />
      <div className="card-title-div">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Card;
