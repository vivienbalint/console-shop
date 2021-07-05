import React from "react";
import IndexComponent from "./IndexComponent";

function Index() {
  return (
    <div className="main-container">
      <div className="bg-image" />
      <div className="welcome-container">
        <h1 className="title secondary-color">Welcome</h1>
        <h2 className="secondary-title primary-color">
          What are you looking for?
        </h2>
        <div className="btn-container">
          <IndexComponent
            id="xbox-menu"
            name="Xbox"
            id2="expandable-xbox"
            link1="/xbox/consoles"
            link2="/xbox/accessories"
            link3="/xbox/games"
            mainLink="/xbox"
          />
          <IndexComponent
            id="nintendo-menu"
            name="Nintendo"
            id2="expandable-nintendo"
            link1="/nintendo/consoles"
            link2="/nintendo/accessories"
            link3="/nintendo/games"
            mainLink="/nintendo"
          />
          <IndexComponent
            id="ps-menu"
            name="PlayStation"
            id2="expandable-ps"
            link1="/playstation/consoles"
            link2="/playstation/accessories"
            link3="/playstation/games"
            mainLink="/playstation"
          />
        </div>
      </div>
    </div>
  );
}

export default Index;
