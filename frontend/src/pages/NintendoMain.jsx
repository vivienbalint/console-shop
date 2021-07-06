import React from "react";
import AllItemComponent from "../components/AllItemComponent";
import {
  NintendoConsoles,
  NintendoAccessories,
  NintendoGames,
} from "../components/ApiComponents";

export default function NintendoPage() {
  return (
    <div className="main-container all-item-container">
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
}
