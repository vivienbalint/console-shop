import React, { useState } from "react";
import { Link } from "react-router-dom";
import IndexLink from "../components/IndexLink";
import useWindowSize from "../components/UseWindowSize";

const ClickedComponent = (props) => {
  if (!props.clicked) {
    return null;
  }
  return (
    <IndexLink
      closed={props.closed}
      id={props.id2}
      link1={props.link1}
      link2={props.link2}
      link3={props.link3}
    />
  );
};

const IndexComponent = (props) => {
  const [isClicked, setClicked] = useState(false);
  const [isOpen, setOpen] = useState(true);
  function click() {
    setClicked(!isClicked);
    setOpen(!isOpen);
  }
  let isSmall = useWindowSize();
  if (isSmall) {
    return (
      <div className="index-link-container" id={props.id}>
        <button
          onClick={() => click()}
          id={props.id}
          className="btn-secondary focus-secondary"
        >
          {props.name}
        </button>

        <ClickedComponent
          clicked={isClicked}
          closed={isOpen}
          id={props.id}
          name={props.name}
          id2={props.id2}
          link1={props.link1}
          link2={props.link2}
          link3={props.link3}
        />
      </div>
    );
  } else {
    return (
      <div className="index-link-container" id={props.id}>
        <Link to={props.mainLink} className="btn-secondary focus-secondary">
          {props.name}
        </Link>
        <IndexLink
          id={props.id2}
          link1={props.link1}
          link2={props.link2}
          link3={props.link3}
        />
      </div>
    );
  }
};

export default IndexComponent;
