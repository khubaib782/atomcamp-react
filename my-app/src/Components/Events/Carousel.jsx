import React, { Fragment, useState } from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const images = [
    "https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-16-at-12.12.51_26c4ae4f-qffphdspiideyx5kdyxtmll6uw90s4r9wyo67hqf0c.webp",
    "https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-16-at-12.12.51_30eb4648-qffphfodw6fzm52u2zr2rl441nzr7iyql7z561nmnw.webp",
    "https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-16-at-12.12.52_0ddd8fe4-qffphhk29uik9d03s0kbwkn18fqhmx679ha44lkubg.webp",
    "https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-16-at-12.12.52_11246b5b-qffphjfqnil4wkxdh1dl1k5yf7h82bdnxql335i1z0.webp",
    "https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-11-16-at-12.12.53_8ae4319e-qffphkdkucmf86w0bjs7m1xf0lcla0he9v8kkfgnss.webp",
  ];

  const img = [
    "https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/1-qf5g5ktpl9f2261wjsad6qzmehkvpjc18u7wajk0os.jpg",
    "https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/2-qf5g6c313ggdeuyb4m2jp23zmnuiwrc90l4z7kfloc.jpg",
    "https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/7-qf5g6mf96muiykjag8jfyhi25wfk9fhaq0bbhm09rw.jpg",
    "https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/9-qf5g6s2abn28w8b3jaz7dg2tq7nrjm3oqs88d9rwqk.jpg",
    "https://www.atomcamp.com/wp-content/uploads/elementor/thumbs/1-qf5g5ktpl9f2261wjsad6qzmehkvpjc18u7wajk0os.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row ml-1">
          <div className="col-md-6">
            <Slider {...settings} className="slider-container">
              {images.map((image, index) => (
                <div key={index} className="car-div">
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-6">
            <div className="nust-div">
              <h4>NUST, ISLAMABAD</h4>
            </div>
            <div className="ai-div">
              <h4>AI Summit Islamabad</h4>
            </div>
            <div className="p-div">
              <p>
                The AI Summit 2023 featured a panel of industry experts and top
                academics. They discussed how AI is opening opportunities for
                youth and businesses.
              </p>
              <p>
                Many startups joined the event. They showcased how they have
                applied AI to solve many issues faced by businesses and society.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "100px" }} className="container-fluid mb-5">
        <div className="row">
          <div className="col-6">
            <div className="nust-div">
              <h4>The HIVE Karachi</h4>
            </div>
            <div className="ai-div">
              <h4>AI Panel Discussion</h4>
            </div>
            <div className="p-div">
              <p>
                Industry experts and students joined the event. They shared why
                Pakistan’s education system and businesses need to adopt AI.
                They also discussed that job opportunities are increasing
                globally for AI professionals.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <Slider {...settings} className="slider-container">
              {img.map((image, index) => (
                <div key={index} className="car-div">
                  <img src={image} alt={`Slide ${index + 1}`} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Carousel;
