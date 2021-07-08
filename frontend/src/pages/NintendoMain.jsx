import React from "react";
import MainPageComponent from "../components/MainPageComponent";
import AllItemComponent from "../components/AllItemComponent";
import {
  NintendoConsoles,
  NintendoAccessories,
  NintendoGames,
} from "../components/ApiComponents";
import useWindowSize from "../components/UseWindowSize";
import desktopImg from "../public/images/ns.png";
import mobileImg from "../public/images/ns-mobile.png";

const SubComponents = () => {
  return (
    <div className="sub-component-container">
      <AllItemComponent componentTitle="Consoles" route="/nintendo/consoles">
        <NintendoConsoles size={2} />
      </AllItemComponent>
      <AllItemComponent
        componentTitle="Accessories"
        route="/nintendo/accessories"
      >
        <NintendoAccessories size={2} />
      </AllItemComponent>
      <div className="games">
        <AllItemComponent componentTitle="Games" route="/nintendo/games">
          <NintendoGames size={2} />
        </AllItemComponent>
      </div>
    </div>
  );
};

export default function NintendoPage() {
  let isSmall = useWindowSize();

  if (isSmall) {
    return (
      <div className="main-container all-item-container item-border">
        <MainPageComponent
          imgSrc={mobileImg}
          alt="Nintendo Switch"
          text="Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home Nintendo Switch console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Nintendo Switch Joy-Con controllers."
        />
        <SubComponents />
      </div>
    );
  } else {
    return (
      <div className="main-container all-item-container">
        <MainPageComponent
          imgSrc={desktopImg}
          alt="Nintendo Switch"
          text="Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home Nintendo Switch console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Nintendo Switch Joy-Con controllers."
        />
        <SubComponents />
      </div>
    );
  }
}
