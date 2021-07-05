import React, { useState } from "react";
import Logo from "./Logo";
import LoginControl from "./LoginControl";
import Searchbar from "./Searchbar";
import NavLink from "./NavLink";

function Header() {
  const [isToggled, setToggled] = useState(false);

  const toggle = () => setToggled(!isToggled);

  return (
    <header>
      <div
        className={
          isToggled === true
            ? "header-container full-height"
            : "header-container flexbox"
        }
      >
        <div className="hamburger-menu">
          <Logo />
          <button
            className={
              isToggled === true
                ? "hamburger hamburger--squeeze is-active"
                : "hamburger hamburger--squeeze"
            }
            type="button"
            onClick={toggle}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <nav
          className={
            isToggled === true ? "nav full-height nav-mobile" : "nav flexbox"
          }
        >
          <NavLink />
          <Searchbar />
          <LoginControl isLoggedIn={false} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
