import React from "react";
import AllItemComponent from "../components/AllItemComponent";
import {
  PsConsoles,
  PsAccessories,
  PsGames,
} from "../components/ApiComponents";

export default function PsPage() {
  return (
    <div className="main-container all-item-container">
      <AllItemComponent componentTitle="Consoles" route="/playstation/consoles">
        <PsConsoles size={2} />
      </AllItemComponent>
      <AllItemComponent
        componentTitle="Accessories"
        route="/playstation/accessories"
      >
        <PsAccessories size={2} />
      </AllItemComponent>
      <AllItemComponent componentTitle="Games" route="/playstation/games">
        <PsGames size={2} />
      </AllItemComponent>
    </div>
  );
}
