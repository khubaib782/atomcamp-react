import React from "react";
import HomePage from "./Home/HomePage";
import LogoPage from "./Home/LogoPage";
import Courses from "./Home/Courses";
import Peoples from "./Home/Peoples";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
      <HomePage />
      <LogoPage />
      <Courses />
      <Peoples />
      <Footer />
    </div>
  );
}

export default Home;
