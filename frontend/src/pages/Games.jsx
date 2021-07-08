import React from "react";
import AllItemComponent from "../components/AllItemComponent";
import { XboxGames, NintendoGames, PsGames } from "../components/ApiComponents";

export default function Games() {
  return (
    <div className="main-container all-item-container item-border games">
      <AllItemComponent componentTitle="Xbox Series Games" route="/xbox/games">
        <XboxGames size={2} />
      </AllItemComponent>
      <AllItemComponent
        componentTitle="Nintendo Switch Games"
        route="/nintendo/games"
      >
        <NintendoGames size={2} />
      </AllItemComponent>
      <AllItemComponent
        componentTitle="PlayStation 5 Games"
        route="/playstation/games"
      >
        <PsGames size={2} />
      </AllItemComponent>
    </div>
  );
}
