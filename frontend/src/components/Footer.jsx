import React from "react";
import FooterLink from "./FooterLink";

function Footer() {
  return (
    <footer id="footer">
      <div className="list-container">
        <h3 className="title-small secondary-color">Contact Us</h3>
        <div className="footer-item-container">
          <i className="fas fa-phone-alt icon secondary-color" />
          <p className="text-small primary-color">+123-456-7890</p>
        </div>
        <div className="footer-item-container">
          <i className="fas fa-envelope icon secondary-color"></i>
          <p className="text-small primary-color">consoleshop@shop.com</p>
        </div>
        <div className="footer-item-container">
          <i className="fas fa-map-marker-alt icon secondary-color"></i>
          <p className="text-small primary-color">1234 Budapest Fő utca 1.</p>
        </div>
      </div>
      <FooterLink item1="Blog" item2="About Us" item3="Career" item4="Help" />
      <FooterLink
        item1="Shipping"
        item2="Returns and Replacements"
        item3="Conditions of Use"
        item4="Company Policy"
      />
      <div className="list-container">
        <div className="icon-container">
          <i className="fab fa-facebook-f icon secondary-color"></i>
          <i className="fab fa-instagram icon secondary-color"></i>
          <i className="fab fa-youtube icon secondary-color"></i>
          <i className="fab fa-twitter icon secondary-color"></i>
        </div>
        <p className="text-small primary-color">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu
          ultrices mi. Cras mauris ligula, imperdiet a nunc non, ornare gravida
          nibh.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
