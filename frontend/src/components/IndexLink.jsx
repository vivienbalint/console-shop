import React from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

function IndexLink(props) {
  return (
    <ul id={props.id} className="expandable">
      <SlideDown closed={props.closed}>
        <li>
          <a href={props.link1} className="index-link-item">
            Consoles
          </a>
        </li>
        <li>
          <a href={props.link2} className="index-link-item">
            Accessories
          </a>
        </li>
        <li>
          <a href={props.link3} className="index-link-item">
            Games
          </a>
        </li>
      </SlideDown>
    </ul>
  );
}

export default IndexLink;
