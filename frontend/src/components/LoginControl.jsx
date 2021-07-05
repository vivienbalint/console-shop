import React from "react";
import LoginButton from "./LoginButton";
import shoppingCart from "../public/images/shopping-cart.svg";

export default function LoginControl(props) {
  const isLoggedIn = props.isLoggedIn;
  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <LoginButton />
        <div className="link-wrapper">
          <span className="square">
            <a
              href="/register"
              className="link link-secondary before after primary-color focus"
            >
              Register
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="user-nav">
        <a
          href="/mysite"
          className="link link-secondary underline after primary-color focus"
        >
          Manage my Site
        </a>
        <a href="/mycart" className="btn-cart link primary-color focus">
          <img
            src={shoppingCart}
            alt="My shopping cart"
            className="icon shopping-cart secondary-icon"
          />
          <div className="counter-wrapper">
            <p id="counter">0</p>
          </div>
        </a>
      </div>
    );
  }
}
