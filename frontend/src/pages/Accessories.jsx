import React from "react";
import AllItemComponent from "../components/AllItemComponent";
import {
  XboxAccessories,
  NintendoAccessories,
  PsAccessories,
} from "../components/ApiComponents";

export default function Accessories() {
  return (
    <div className="main-container all-item-container item-border">
      <AllItemComponent
        componentTitle="Xbox Series Accessories"
        route="/xbox/accessories"
      >
        <XboxAccessories size={2} />
      </AllItemComponent>
      <AllItemComponent
        componentTitle="Nintendo Switch Accessories"
        route="/nintendo/accessories"
      >
        <NintendoAccessories size={2} />
      </AllItemComponent>
      <AllItemComponent
        componentTitle="PlayStation 5 Accessories"
        route="/playstation/accessories"
      >
        <PsAccessories size={2} />
      </AllItemComponent>
    </div>
  );
}
