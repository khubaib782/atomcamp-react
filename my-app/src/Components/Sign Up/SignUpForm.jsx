import React from "react";
import "./SignUpForm.css";

function SignUpForm() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 sign-col-adj">
          <form className="signup-form-adj">
            <div className="form-group">
              <p class="registration-login-link">
                Already have an account? <a href="#login">Log In</a>
              </p>
              <label htmlFor="exampleInputEmail1">
                Username
                <span className="dot"> *</span>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">First Name</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Last Name</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Email</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" className="btn register-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
