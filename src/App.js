import "./App.css";
import Store from "../src/components/store.js";
import Navbar from "./components/navbar";
import SideMenu from "./components/side-menu";
import Footer from "./components/footer";
import { useState } from "react";
import Header from "./components/header";
import Icon from "@mdi/react";
import { mdiCogOutline } from "@mdi/js";

function App() {
  const [showSideMenu, setShowMenu] = useState(false);
  function toggleShowMenu(e) {
    setShowMenu((prev) => !prev);
    e.stopPropagation();
    e.preventDefault();
  }
  return (
    <div>
      <SideMenu />
      <button id="btn-settings">
        <span id="cog">
          <Icon path={mdiCogOutline} size={0.7} />
        </span>
      </button>
      <div className="content-overlay" id="sidemenu-overlay" />
      <div className="content-overlay" id="filter-overlay" />
      <div className="content">
        <Navbar show={showSideMenu} showHandler={toggleShowMenu} />
        <Header />
        <Store />
        <Footer />
      </div>
    </div>
  );
}

export default App;
