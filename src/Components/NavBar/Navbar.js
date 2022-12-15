import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.scss";
import logo from "../../assets/logos/logo.png";

function Navbar() {
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
      {button && <Button>Listen Now</Button>}
    </nav>
  );
}

export default Navbar;
