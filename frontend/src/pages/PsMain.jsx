import React from "react";
import MainPageComponent from "../components/MainPageComponent";
import AllItemComponent from "../components/AllItemComponent";
import {
  PsConsoles,
  PsAccessories,
  PsGames,
} from "../components/ApiComponents";
import useWindowSize from "../components/UseWindowSize";
import desktopImg from "../public/images/ps5_console_medium.jpg";
import mobileImg from "../public/images/ps5_console_mobile.jpg";

const SubComponents = () => {
  return (
    <div className="sub-component-container">
      <AllItemComponent componentTitle="Consoles" route="/playstation/consoles">
        <PsConsoles size={2} />
      </AllItemComponent>
      <AllItemComponent
        componentTitle="Accessories"
        route="/playstation/accessories"
      >
        <PsAccessories size={2} />
      </AllItemComponent>
      <div className="games">
        <AllItemComponent componentTitle="Games" route="/playstation/games">
          <PsGames size={2} />
        </AllItemComponent>
      </div>
    </div>
  );
};

export default function PsPage() {
  let isSmall = useWindowSize();

  if (isSmall) {
    return (
      <div className="main-container all-item-container item-border">
        <MainPageComponent
          imgSrc={mobileImg}
          alt="PlayStation 5"
          text="Play Has No Limits™ Step up your game with this sleek PS5™ console. The PlayStation 5 console will elevate your gaming experience like never before. With ultra-high speed SSD for faster load times, support for haptic feedback, adaptive triggers, and 3D Audio, your level of gameplay just got even better. Experience an all-new generation of incredible PlayStation® games on this PS5 console."
        />
        <SubComponents />
      </div>
    );
  } else {
    return (
      <div className="main-container all-item-container">
        <MainPageComponent
          imgSrc={desktopImg}
          alt="PlayStation 5"
          text="Play Has No Limits™ Step up your game with this sleek PS5™ console. The PlayStation 5 console will elevate your gaming experience like never before. With ultra-high speed SSD for faster load times, support for haptic feedback, adaptive triggers, and 3D Audio, your level of gameplay just got even better. Experience an all-new generation of incredible PlayStation® games on this PS5 console."
        />
        <SubComponents />
      </div>
    );
  }
}
