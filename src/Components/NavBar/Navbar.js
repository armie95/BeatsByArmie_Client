import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.scss";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
      <Link to="/" className="navbar__logo">
        Beats By Armie
      </Link>
      <div className={"navbar__menu"}>
        <Link to="/" className="navbar__links" onClick={closeMobileMenu}>
          Home
        </Link>
      </div>
      {button && <Button className="navbar__btn">Listen Now</Button>}
    </nav>
  );
}

export default Navbar;
