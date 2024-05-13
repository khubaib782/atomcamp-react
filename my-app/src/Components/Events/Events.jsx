import React from "react";
import Navbar from "../Navbar";
import EventsBanner from "./EventsBanner";
import Carousel from "./Carousel";
import Footer from "../Footer/Footer";
import GreenLogo from "../../Assets/logo.png";

function Events() {
  return (
    <div>
      <Navbar logoSrc={GreenLogo} textColor="#4b4f58" />
      <EventsBanner />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Events;
