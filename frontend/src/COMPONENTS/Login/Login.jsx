import React, { useState } from "react";
import "../Login/Login.css";
import "../Login/loginmedia.css";
import Loginimag from "./imgs/images.jpg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!emailOrNumber) {
      errors.emailOrNumber = "Email/Number is required";
      isValid = false;
    } else if (
      !/\S+@\S+\.\S+/.test(emailOrNumber) &&
      !/^\d{10}$/.test(emailOrNumber)
    ) {
      errors.emailOrNumber = "Email/Number is invalid";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("http://localhost:5000/login", {
          emailOrNumber,
          password,
        });
        console.log("Form submitted successfully", response.data);
        if (response.data.user && response.data.user.usertype === "Admin") {
          alert("Admin Login Successfully");
          navigate("/adminpanel"); // Navigate to admin page
        } else {
          alert("Login Successfully");
          navigate("/navbar/mainpart");
        }
      } catch (error) {
        console.error("Error logging in", error.response.data);
        alert("Login Failed: " + error.response.data.message);
      }
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="log_ful">
      <div className="log_img">
        <img
          width="500px"
          height="400px"
          src={Loginimag}
          alt=""
          className="bankei"
        />
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="log_head">
            <h2>Login</h2>
          </div>
          <div className="log_all_inputs">
            <div className="mb-3">
              <label htmlFor="emailOrNumber" className="lb_form">
                Email/Number
              </label>
              <input
                type="text"
                className={`form-control ${
                  errors.emailOrNumber && "is-invalid"
                }`}
                id="emailOrNumber"
                value={emailOrNumber}
                onChange={(e) => setEmailOrNumber(e.target.value)}
                aria-describedby="inputHelp"
              />
              {errors.emailOrNumber && (
                <div className="invalid-feedback">{errors.emailOrNumber}</div>
              )}
              <small id="inputHelp" className="form-text text-muted">
                Please enter an email address or a number.
              </small>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="lb_form">
                Password
              </label>
              <input
                type="password"
                className={`form-control ${errors.password && "is-invalid"}`}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>
          </div>
          <p>
            Don't have an Account? <Link to="/register">register</Link>
          </p>
          <button type="submit" className="btn_login btn-primary">
            Login
          </button>
        </form>
      </div>
      <Outlet />
    </div>
  );
}

export default Login;
