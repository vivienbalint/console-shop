import React from "react";

export default function FooterLink(props) {
  return (
    <div className="list-container">
      <ul className="list primary-color">
        <li className="list-item link link-secondary underline after primary-color focus">
          {props.item1}
        </li>
        <li className="list-item link link-secondary underline after primary-color focus">
          {props.item2}
        </li>
        <li className="list-item link link-secondary underline after primary-color focus">
          {props.item3}
        </li>
        <li className="list-item link link-secondary underline after primary-color focus">
          {props.item4}
        </li>
      </ul>
    </div>
  );
}
