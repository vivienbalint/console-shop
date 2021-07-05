import React from "react";

export default function MainPageComponent(props) {
  return (
    <div className="component-wrapper">
      <img className="main-component-img" src={props.imgSrc} alt={props.alt} />
      <div className="main-component-text-wrapper">
        <p className="main-component-text text-color">{props.text}</p>
      </div>
    </div>
  );
}
