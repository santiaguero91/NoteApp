import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-color.png";
import { MainBox, Validation } from "./LoginStyle";
import { validateLoginForm } from "./validate";

const LogIn = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setValidationErrors({
      ...validationErrors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const errors = validateLoginForm(formData);
    setValidationErrors(errors);
  
    if (!errors.username.flat().length && !errors.password.flat().length) {
      navigate("/home");
    }
  };



  return (
    <MainBox>
      <div>
        <img width="350px" src={logo} alt="logo" />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        {validationErrors.username && (
        <Validation>
          {validationErrors.username.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </Validation>
      )}

        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {validationErrors.password && (
        <Validation>
          {validationErrors.password.map((error, index) => (
            <div key={index}>{error}</div>
          ))}
        </Validation>
      )}

        <br />
        <button type="submit">Log In</button>
      </form>
    </MainBox>
  );
};

export default LogIn;
