import React from "react";
import { Link } from "react-router-dom";

export default function AllItemComponent(props) {
  return (
    <div className="all-item-wrapper">
      <Link
        to={props.route}
        className="link-big focus primary-color component-title"
      >
        <h2 className="focus">{props.componentTitle}</h2>
      </Link>
      <div className="item-grid-wrapper">{props.children}</div>
      <Link to={props.route} className=" link-big focus primary-color">
        <h2 className="component-link link-secondary link-secondary-big-link underline after">
          I Want More...
        </h2>
      </Link>
    </div>
  );
}
