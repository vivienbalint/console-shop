import React from "react";

export default function MainPageComponent(props) {
  return (
    <div className="component-wrapper">
      <img className="main-component-img" src={props.imgSrc} alt={props.alt} />
      <p className="main-component-text text-color">{props.text}</p>
    </div>
  );
}
