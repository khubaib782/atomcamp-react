import React from "react";
import Navbar from "../Navbar";
import Header from "./Header";
import SignUpForm from "./SignUpForm";
import Footer from "../Footer/Footer";
import GreenLogo from "../../Assets/logo.png";

function SignUp() {
  return (
    <div>
      <Navbar logoSrc={GreenLogo} textColor="#4b4f58" />
      <Header />
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default SignUp;
