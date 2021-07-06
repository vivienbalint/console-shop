import React from "react";
import MainPageComponent from "../components/MainPageComponent";
import AllItemComponent from "../components/AllItemComponent";
import {
  XboxConsoles,
  XboxAccessories,
  XboxGames,
} from "../components/ApiComponents";
import useWindowSize from "../components/UseWindowSize";
import desktopImg from "../public/images/xbox-medium.png";
import mobileImg from "../public/images/xbox-mobile.png";

const SubComponents = () => {
  return (
    <div className="main-container all-item-container">
      <AllItemComponent componentTitle="Consoles" route="/xbox/consoles">
        <XboxConsoles size={2} />
      </AllItemComponent>
      <AllItemComponent componentTitle="Accessories" route="/xbox/accessories">
        <XboxAccessories size={2} />
      </AllItemComponent>
      <div className="games">
        <AllItemComponent componentTitle="Games" route="/xbox/games">
          <XboxGames size={2} />
        </AllItemComponent>
      </div>
    </div>
  );
};

export default function XboxPage() {
  let isSmall = useWindowSize();

  if (isSmall) {
    return (
      <div>
        <MainPageComponent
          imgSrc={mobileImg}
          alt="Xbox Series S"
          text="Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price point. Get started with an instant library of 100+ high quality games, including all new Xbox Game Studios titles like Halo Infinite the day they release, when you add Xbox Game Pass Ultimate (membership sold separately). Seamlessly move between multiple games in a flash with Quick Resume. At the heart of Series S is the Xbox Velocity Architecture, which pairs a custom-SSD with integrated software for faster, streamlined gameplay with significantly reduced load times."
        />
        <SubComponents />
      </div>
    );
  } else {
    return (
      <div className="main-container all-item-container">
        <MainPageComponent
          imgSrc={desktopImg}
          alt="Xbox Series S"
          text="Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price point. Get started with an instant library of 100+ high quality games, including all new Xbox Game Studios titles like Halo Infinite the day they release, when you add Xbox Game Pass Ultimate (membership sold separately). Seamlessly move between multiple games in a flash with Quick Resume. At the heart of Series S is the Xbox Velocity Architecture, which pairs a custom-SSD with integrated software for faster, streamlined gameplay with significantly reduced load times."
        />
        <SubComponents />
      </div>
    );
  }
}
