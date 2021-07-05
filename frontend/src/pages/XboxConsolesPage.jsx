import React from "react";
import SubPageComponent from "../components/SubPageComponent";
import { XboxConsoles } from "../components/ApiComponents";
import useWindowSize from "../components/UseWindowSize";
import desktopImg from "../public/images/xbox-medium.png";

export default function XboxConsolesPage() {
  let isSmall = useWindowSize();
  if (isSmall) {
    return (
      <div className="main-container all-item-container flex-wrap">
        <XboxConsoles size={1000} />
      </div>
    );
  } else {
    return (
      <SubPageComponent imgSource={desktopImg} alt="Xbox Series S">
        <XboxConsoles size={1000} />
      </SubPageComponent>
    );
  }
}
