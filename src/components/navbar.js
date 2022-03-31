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
} from "@mdi/js";
import "../styles/_navbar.scss";
import { useState, useEffect } from "react";
import CartDropdown from "./cart-dd";
const Dropdown = (props) => {
  const [list, setList] = useState(["dropdown-content", "card"]);
  const handleShow = () => {
    if (list.includes("show")) setList(["dropdown-content", "card"]);
    else setList([...list, "show"]);
  };
  return (
    <div className="dropdown">
      <button onClick={handleShow} className="dropbtn">
        {props.clickable}
      </button>
      <div className={list.join(" ")}>{props.children}</div>
    </div>
  );
};

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
  };

  useEffect(() => {
    if (show) {
      document.getElementById("side-menu").classList.add("show");
      document.getElementById("content-overlay").classList.add("show");
      document
        .getElementById("content-overlay")
        .addEventListener("onClick", showHandler);
    } else {
      document.getElementById("side-menu").classList.remove("show");
      document
        .getElementById("content-overlay")
        .removeEventListener("onClick", showHandler);
      document.getElementById("content-overlay").classList.remove("show");
      // console.log(document.getElementById("content-overlay"));
    }
  }, [show]);

  return (
    <nav className="navbar card">
      <div className="left">
        <a href="#" id="toggle-side-menu" onClick={showHandler}>
          <Icon path={mdiMenu} size={0.8} />
        </a>
        <div id="nav-menu">
          <Icon
            path={mdiCalendarBlankOutline}
            size={0.8}
            title="Calender App"
          />
          <Icon path={mdiMessageOutline} size={0.8} title="Chat" />
          <Icon path={mdiEmailOutline} size={0.8} title="Email" />
          <Icon path={mdiCheckboxMarkedOutline} size={0.8} title="Todo" />
          <Icon path={mdiStarOutline} size={0.8} color="orange" />
        </div>
      </div>
      <div className="right">
        <Icon path={mdiWeatherNight} size={0.8} onClick={toggleTheme} />
        <Icon path={mdiMagnify} size={0.8} />
        <Dropdown clickable={<Icon path={mdiCartOutline} size={0.8} />}>
          <CartDropdown />
        </Dropdown>
        <Dropdown clickable={<Icon path={mdiBellOutline} size={0.8} />}>
          <p>notifications</p>
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
          <p>user panel</p>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
