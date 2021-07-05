import React from "react";
import { Link } from "react-router-dom";

function NavLink() {
  return (
    <div className="flexbox link-container">
      <Link to="/consoles" className="link nav-link primary-color focus">
        <p>Consoles</p>
      </Link>
      <Link to="/accessories" className="link nav-link primary-color focus">
        <p>Accessories</p>
      </Link>
      <Link to="/games" className="link nav-link primary-color focus">
        <p>Games</p>
      </Link>
      <Link to="/shipping" className="link nav-link primary-color focus">
        <p>Shipping</p>
      </Link>
    </div>
  );
}

export default NavLink;
