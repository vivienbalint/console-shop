import React from "react";
import AllItemComponent from "../components/AllItemComponent";
import {
  XboxConsoles,
  NintendoConsoles,
  PsConsoles,
} from "../components/ApiComponents";

export default function Consoles() {
  return (
    <div className="main-container all-item-container item-border">
      <AllItemComponent
        componentTitle="Xbox Series Consoles"
        route="/xbox/consoles"
      >
        <XboxConsoles size={2} />
      </AllItemComponent>
      <AllItemComponent
        componentTitle="Nintendo Switch Consoles"
        route="/nintendo/consoles"
      >
        <NintendoConsoles size={2} />
      </AllItemComponent>
      <AllItemComponent
        componentTitle="PlayStation 5 Consoles"
        route="/playstation/consoles"
      >
        <PsConsoles size={2} />
      </AllItemComponent>
    </div>
  );
}
