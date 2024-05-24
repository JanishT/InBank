import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../register/Register.css";
import "../register/registermedia.css";
import image from "./imgs/images.jpg";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!accountNo || !/^\d{15}$/.test(accountNo)) {
      errors.accountNo = "Valid Account No. is required";
      isValid = false;
    }

    if (!mobileNo || !/^\d{10}$/.test(mobileNo)) {
      errors.mobileNo = "Valid Mobile No. is required";
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
        const response = await axios.post('http://localhost:5000/register', {
          name,
          email,
          accountNo,
          mobileNo,
          password,
          usertype:"user",
          date:Date.now()
        });
        console.log("Form submitted successfully", response.data);
        navigate("/");
      } catch (error) {
        console.error("There was an error registering the user!", error);
      }
    } else {
      console.log("Form validation failed");
    }
  };

  return (
    <div className="log_ful_r">
      <div className="log_img_r">
        <img width="500px" height="400px" src={image} alt="" className="bankei"/>
        <form className="login_form" onSubmit={handleSubmit}>
          <div className="log_head_r">
            <h2>Register</h2>
          </div>
          <div className="log_all_inputs_r">
            <div className="mb-3">
              <label htmlFor="name" className="lb_form">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${errors.name && "is-invalid"}`}
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}

              <label htmlFor="email" className="lb_form">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${errors.email && "is-invalid"}`}
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}

              <label htmlFor="accountNo" className="lb_form">
                Account No.
              </label>
              <input
                type="number"
                className={`form-control ${errors.accountNo && "is-invalid"}`}
                id="accountNo"
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
              />
              {errors.accountNo && <div className="invalid-feedback">{errors.accountNo}</div>}

              <label htmlFor="mobileNo" className="lb_form">
                Mobile No.
              </label>
              <input
                type="number"
                className={`form-control ${errors.mobileNo && "is-invalid"}`}
                id="mobileNo"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
              />
              {errors.mobileNo && <div className="invalid-feedback">{errors.mobileNo}</div>}
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
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
            </div>

          </div>
          <button type="submit" className="btn_login btn-primary">
            Register
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default Register;
