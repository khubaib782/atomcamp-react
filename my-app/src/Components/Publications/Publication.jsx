import React from "react";
import Navbar from "../Navbar";
import Background from "./Background";
import BigCards from "./BigCards";
import Footer from "../Footer/Footer";
import PersonCards from "./PersonCards";
import LastCards from "./LastCards";
import GreenLogo from "../../Assets/logo.png";

function Publication() {
  return (
    <div>
      <Navbar logoSrc={GreenLogo} textColor="#4b4f58" />
      <Background />
      <BigCards />
      <PersonCards />
      <LastCards />
      <Footer />
    </div>
  );
}

export default Publication;
