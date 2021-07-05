import React from "react";

export default function SubPageComponent(props) {
  return (
    <div className="main-container all-item-container flex-wrap">
      <img src={props.imgSource} className="sub-page-img" alt={props.alt} />
      {props.children}
    </div>
  );
}
