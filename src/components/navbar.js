import Icon from "@mdi/react";
import {
  mdiMenu,
  mdiStarOutline,
  mdiCalendarBlankOutline,
  mdiMessageOutline,
  mdiEmailOutline,
  mdiCheckboxMarkedOutline,
  mdiWeatherNight,
  mdiMagnify,
  mdiCartOutline,
  mdiBellOutline,
  mdiWeatherSunny,
} from "@mdi/js";
import "../styles/_navbar.scss";
import { useState, useEffect } from "react";

import {
  AdminDropdown,
  CartDropdown,
  Dropdown,
  NotificationsDropdown,
} from "./Dropdowns";

const Navbar = ({ show, showHandler }) => {
  const user = {
    name: "John Doe",
    role: "admin",
    img: "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/13-small.d796bffd.png",
  };

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "light") document.body.classList.add("light-mode");
    else if (theme === "dark") document.body.classList.remove("light-mode");
  }, [theme]);
  const toggleTheme = (e) => {
    setTheme((prev) => {
      return prev === "light" ? "dark" : "light";
    });
    e.preventDefault();
  };

  useEffect(() => {
    let overlay = document.getElementById("sidemenu-overlay");
    if (show) {
      document.getElementById("side-menu").classList.add("show");
      overlay.classList.add("show");
      overlay.addEventListener("mouseup", showHandler);
    } else {
      document.getElementById("side-menu").classList.remove("show");
      overlay.removeEventListener("mouseup", showHandler);
      overlay.classList.remove("show");
      // console.log(overlay);
    }
  }, [show]);

  const IconSize = 1;
  return (
    <nav className="navbar card">
      <div className="left">
        <p id="toggle-side-menu" onClick={showHandler}>
          <Icon path={mdiMenu} className="icon" size={IconSize} />
        </p>
        <div id="nav-menu">
          <Icon
            path={mdiCalendarBlankOutline}
            size={IconSize}
            className="icon"
            title="Calender App"
          />
          <Icon
            path={mdiMessageOutline}
            size={IconSize}
            className="icon"
            title="Chat"
          />
          <Icon
            path={mdiEmailOutline}
            size={IconSize}
            className="icon"
            title="Email"
          />
          <Icon
            path={mdiCheckboxMarkedOutline}
            className="icon"
            size={IconSize}
            title="Todo"
          />
          <Icon
            path={mdiStarOutline}
            className="icon"
            size={IconSize}
            color="orange"
          />
        </div>
      </div>
      <div className="right">
        {theme === "light" ? (
          <Icon
            path={mdiWeatherNight}
            className="icon"
            size={IconSize}
            onClick={toggleTheme}
          />
        ) : (
          <Icon
            path={mdiWeatherSunny}
            className="icon"
            size={IconSize}
            onClick={toggleTheme}
          />
        )}
        <Icon path={mdiMagnify} className="icon" size={IconSize} />
        <Dropdown
          clickable={
            <Icon path={mdiCartOutline} className="icon" size={IconSize} />
          }
        >
          <CartDropdown />
        </Dropdown>
        <Dropdown
          clickable={
            <Icon path={mdiBellOutline} className="icon" size={IconSize} />
          }
        >
          <NotificationsDropdown />
        </Dropdown>
        <Dropdown
          clickable={
            <div className="user-panel">
              <div>
                <p className="usertxt" id="username">
                  {user.name}
                </p>
                <p className="usertxt" id="userrole">
                  {user.role}
                </p>
              </div>
              <div>
                <img id="profile-image" src={user.img} />
                <span id="badge" />
              </div>
            </div>
          }
        >
          <AdminDropdown />
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
