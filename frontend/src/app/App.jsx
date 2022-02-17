import React from "react";
import { BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import LazyLoad from "react-lazyload";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Index from "../pages/Index";
import Consoles from "../pages/Consoles";
import Accessories from "../pages/Accessories";
import Games from "../pages/Games";
import XboxPage from "../pages/XboxMain";
import NintendoPage from "../pages/NintendoMain";
import PsPage from "../pages/PsMain";
import XboxConsolesPage from "../pages/XboxConsolesPage";
import SearchResults from "../pages/SearchResults";

const Wrapper = ({ children }) => {
  const location = useLocation().pathname;

  const getClass = () => {
    switch (location) {
      case "/":
        return "index-wrapper main-theme";
      case "/xbox":
        return "xbox-theme";
      case "/nintendo":
        return "nintendo-theme";
      case "/playstation":
        return "ps-theme";
      case "/xbox/consoles":
        return "xbox-theme";
      default:
        return "main-theme";
    }
  };
  return (
    <div id="page-wrapper" className={getClass()}>
      {children}
    </div>
  );
};

function App() {
  return (
    <Router>
      <Wrapper>
        <div id="page-container" className="flex-column">
          <Header />
          <LazyLoad>
            <Route exact path="/" component={Index} />
          </LazyLoad>
          <LazyLoad>
            <Route exact path="/consoles" component={Consoles} />
          </LazyLoad>
          <LazyLoad>
            <Route exact path="/accessories" component={Accessories} />
          </LazyLoad>
          <LazyLoad>
            <Route exact path="/games" component={Games} />
          </LazyLoad>
          <LazyLoad>
            <Route exact path="/shipping" component={Consoles} />
          </LazyLoad>
          <LazyLoad>
            <Route exact path="/xbox" component={XboxPage} />
          </LazyLoad>
          <LazyLoad>
            <Route exact path="/nintendo" component={NintendoPage} />
          </LazyLoad>
          <LazyLoad>
            <Route exact path="/playstation" component={PsPage} />
          </LazyLoad>
          <LazyLoad>
            <Route exact path="/xbox/consoles" component={XboxConsolesPage} />
          </LazyLoad>
          <LazyLoad>
            <Route path="/results/:slug" />
          </LazyLoad>
          <Footer />
        </div>
      </Wrapper>
    </Router>
  );
}

export default App;
