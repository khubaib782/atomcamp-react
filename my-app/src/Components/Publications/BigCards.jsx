import React, { Fragment } from "react";
import Card from "./Cards";
import image1 from "../../Assets/c1.png";
import image2 from "../../Assets/c2.png";
import image3 from "../../Assets/c3.png";
import image4 from "../../Assets/c4.png";
import image5 from "../../Assets/c5.png";

function BigCards() {
  const cardData = [
    {
      id: 1,
      title: "Artificial Intelligence Ecosystem In Pakistan",
      image: image1,
    },
    { id: 2, title: "Data Science Ecosystem In Pakistan", image: image2 },
    { id: 3, title: "The Future of Learning", image: image3 },
    { id: 4, title: "Smart Cities: Global Outlook", image: image4 },
    { id: 5, title: "Healthcare Analytics", image: image5 },
  ];
  return (
    <Fragment>
      <div className="container mt-4">
        <div className="row">
          {cardData.map((card) => (
            <div key={card.id} className="col-md-4">
              <Card
                title={card.title}
                //   content={card.content}
                image={card.image}
              />
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
            <h1 className="atom-head">atom conversations</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default BigCards;
