import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.scss";
import logo from "../../assets/logos/logo.png";

function Navbar() {
  const navigates = useNavigate();
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar__logo-container">
        <img src={logo} alt="Logo" className="navbar__logo" />
      </Link>
      <Link to="/Login" className="navbar__log-container"></Link>
      <div className="navbar__login-main" onClick={() => navigates("/login")}>
        <button className="login__button">Log in</button>
      </div>
    </nav>
  );
}

export default Navbar;
