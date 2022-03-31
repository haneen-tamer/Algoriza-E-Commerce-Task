import "./App.css";
import Store from "../src/components/store.js";
import Navbar from "./components/navbar";
import SideMenu from "./components/side-menu";
import { useState } from "react";

function App() {
  const [showSideMenu, setShowMenu] = useState(false);
  const toggleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  return (
    <div>
      <SideMenu />
      <div id="content-overlay" />
      <div className="content">
        <Navbar show={showSideMenu} showHandler={toggleShowMenu} />
        <Store />
      </div>
    </div>
  );
}

export default App;
