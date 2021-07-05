import React from "react";
import { Link } from "react-router-dom";
import logo from "../public/images/game-control.svg";

function Logo() {
  return (
    <Link to="/" className="logo focus">
      <div className="logo">
        <h1 className="logo-name title primary-color">
          Console<span className="secondary-color">Shop</span>
        </h1>
        <img
          src={logo}
          alt="The logo of the website"
          className="logo-img primary-icon"
        />
      </div>
    </Link>
  );
}

export default Logo;
