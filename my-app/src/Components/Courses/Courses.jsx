import React from "react";
import Navbar from "../Navbar";
import GreenLogo from "../../Assets/logo.png";
import OpenCourse from "./OpenCourse";
import Footer from "../Footer/Footer.jsx";

function Courses() {
  return (
    <div>
      <Navbar logoSrc={GreenLogo} textColor="#4b4f58" />
      <OpenCourse />
      <Footer />
    </div>
  );
}

export default Courses;
