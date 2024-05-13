import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import SignUp from "./Components/Sign Up/SignUp.jsx";
import Publication from "./Components/Publications/Publication.jsx";
import Events from "./Components/Events/Events.jsx";
import Courses from "./Components/Courses/Courses.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/publication" element={<Publication />} />
      <Route path="/events" element={<Events />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;
