import React from "react";
import "./Courses.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Courses() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const carouselData = [
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2024/01/DS6-Poster.png",
      heading1: "Data Science",
      heading2: "Bootcamp",
      listItems: ["19 January", "4 Weeks", "Live Classes"],
      price: "PKR 100,000",
    },
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2023/12/safas-course-posters.png",
      heading1: "Master Financial",
      heading2: "Modeling",
      listItems: ["15 January", "4 Months", "Live Classes"],
      price: "FREE",
    },
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2024/01/DS6-Poster.png",
      heading1: "Data Science",
      heading2: "Bootcamp",
      listItems: ["19 January", "4 Weeks", "Live Classes"],
      price: "PKR 100,000",
    },
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2023/12/safas-course-posters.png",
      heading1: "Master Financial",
      heading2: "Modeling",
      listItems: ["15 January", "4 Months", "Live Classes"],
      price: "FREE",
    },
  ];
  const coursesData = [
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2023/12/Diversity-and-Inclusion.png",
      heading1: "Diversity and inclusion",
      listItems: ["19 January", "4 Weeks", "Live Classes"],
      price: "FREE",
    },
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2023/12/Python-.png",
      heading1: "Python for beginners",
      listItems: ["15 January", "4 Months", "Live Classes"],
      price: "FREE",
    },
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2023/12/LinkedIn.png",
      heading1: "LinkedIn for professional development",
      listItems: ["19 January", "4 Weeks", "Live Classes"],
      price: "FREE",
    },
    {
      imageUrl:
        "https://www.atomcamp.com/wp-content/uploads/2023/12/Career-Development.png",
      heading1: "Career Development",
      listItems: ["15 January", "4 Months", "Live Classes"],
      price: "FREE",
    },
  ];
  return (
    <div style={{ backgroundColor: "#F0F0F0" }} className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="deliver-div">
            <h2>
              Learning <span style={{ color: "#fc8c03" }}> Begins </span>here
              <span style={{ color: "#fc8c03" }}>.</span>
            </h2>
          </div>
          <div className="scaleup-div">
            <p>Scale up and stay ahead!</p>
          </div>
        </div>
      </div>
      <div className="row" style={{ padding: "10px 50px 0px 50px" }}>
        <div className="col-12">
          <Slider {...settings}>
            {carouselData.map((item, index) => (
              <div key={index} className="carousel-card">
                <div className="card-img-div">
                  <img
                    style={{ width: "100%", padding: "12px" }}
                    src={item.imageUrl}
                    alt={`Product ${index + 1}`}
                  />
                </div>
                <div className="card-head-div">
                  <h2>
                    {item.heading1} <br />
                    {item.heading2}
                  </h2>
                </div>
                <div className="date-div">
                  <ul>
                    {item.listItems.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                  <p className="price">{item.price}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="deliver-div">
            <h2>
              Recommended for <span style={{ color: "#fc8c03" }}> YOU</span>.
            </h2>
          </div>
          <div className="scaleup-div">
            <p>
              To kickstart your learning, check out these free recorded courses
            </p>
          </div>
        </div>
      </div>
      <div className="row pb-5">
        <div className="col-12 carousel-two">
          {coursesData.map((item, index) => (
            <div key={index} className="carousel-card">
              <div className="card-img-div">
                <img
                  style={{ width: "100%", padding: "12px" }}
                  src={item.imageUrl}
                  alt={`Product ${index + 1}`}
                />
              </div>
              <div className="card-head-div">
                <h2>
                  {item.heading1} <br />
                  {item.heading2}
                </h2>
              </div>
              <div className="date-div">
                <ul>
                  {item.listItems.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
                <p className="price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
