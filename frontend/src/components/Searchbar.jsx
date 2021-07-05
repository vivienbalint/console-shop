import React from "react";
import searchIcon from "../public/images/magnifying-glass.svg";

function Searchbar() {
  return (
    <form action="" className="search-bar flexbox">
      <input
        type="search"
        placeholder="Search..."
        name="search input"
        id="search-input"
        className="input-primary secondary-color"
        aria-label="Search through site content"
      />
      <input
        type="image"
        className="icon searchbar-btn secondary-icon focus"
        src={searchIcon}
        alt="Search button"
      />
    </form>
  );
}

export default Searchbar;
