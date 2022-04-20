import { useState } from "react";
import products from "../data/store-data";
import "../styles/_navbar.scss";
import Icon from "@mdi/react";
import {
  mdiMessageOutline,
  mdiEmailOutline,
  mdiCheckboxMarkedOutline,
  mdiLogout,
  mdiHelpCircleOutline,
  mdiCreditCardOutline,
  mdiCogOutline,
  mdiAccountOutline,
  mdiClose,
  mdiCheck,
  mdiAlertOutline,
} from "@mdi/js";

const AdminItem = ({ iconPath, title }) => {
  return (
    <li className="admin-item">
      <a href="#">
        <Icon path={iconPath} className="icon" size={1} />
        {title}
      </a>
    </li>
  );
};

const AdminDropdown = () => {
  return (
    <ul className="admin-list">
      <AdminItem iconPath={mdiAccountOutline} title="Profile" />
      <AdminItem iconPath={mdiEmailOutline} title="Inbox" />
      <AdminItem iconPath={mdiCheckboxMarkedOutline} title="Task" />
      <AdminItem iconPath={mdiMessageOutline} title="Chat" />
      <li>
        <hr className="divider" />
      </li>
      <AdminItem iconPath={mdiCogOutline} title="Settings" />
      <AdminItem iconPath={mdiCreditCardOutline} title="Pricing" />
      <AdminItem iconPath={mdiHelpCircleOutline} title="FAQ" />
      <AdminItem iconPath={mdiLogout} title="Logout" />
    </ul>
  );
};

const CartDropdown = () => {
  const [cartList, setCartList] = useState(products.slice(0, 3));

  return (
    <div>
      <div className="header">
        <h4>My Cart</h4>
        <span className="header-badge">{cartList.length} items</span>
      </div>
      <ul className="cart-items">
        {cartList.map((item) => {
          return (
            <li className="cart-item" key={item.id}>
              <img src={item.img}></img>
              <div className="title">
                <a href="#">{item.name}</a>
                <h5>By {item.brand}</h5>
              </div>
              <div className="count">
                <button>+</button>
                <span className="out">{1}</span>
                <button>-</button>
              </div>
              <h5>${item.price}</h5>
              <a className="close">x</a>
            </li>
          );
        })}
      </ul>
      <div className="footer">
        <div className="checkout-header">
          <h6>Total:</h6>
          <h6>
            $
            {parseFloat(
              cartList.reduce((sum, item, i) => {
                return (sum = sum + item.price);
              }, 0)
            ).toFixed(2)}
          </h6>
        </div>
        <div>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

const NotificationsDropdown = () => {
  const [userList, setUserList] = useState([
    {
      id: 0,
      subject: " Congratulation Sam 🎉 ",
      imgSrc:
        "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/6-small.c9b47a98.png",
      content: "Won the monthly best seller badge",
    },
    {
      id: 1,
      subject: " New message received ",
      imgSrc:
        "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/9-small.30df7a62.png",
      content: "You have 10 unread messages",
    },
  ]);
  const [sysList, setSysList] = useState([
    {
      id: 0,
      subject: " Server down ",
      avatarPath: mdiClose,
      content: "USA Server is down due to hight CPU usage",
    },
    {
      id: 1,
      subject: " Sales report generated ",
      avatarPath: mdiCheck,
      content: "Last month sales report generated",
    },
    {
      id: 2,
      subject: " High memory usage ",
      avatarPath: mdiAlertOutline,
      content: "BLR Server using high memory",
    },
  ]);
  return (
    <div>
      <div className="header">
        <h4>Notifications</h4>
        <span className="header-badge">5 items</span>
      </div>
      <ul className="notification-list">
        {userList.map((item) => {
          return (
            <li key={item.id} className="notification-item">
              <img src={item.imgSrc} className="notification-avatar" />
              <div>
                <p className="n-subject">{item.subject}</p>
                <p className="n-content">{item.content}</p>
              </div>
            </li>
          );
        })}
        <li className="notification-item">System Notifications</li>
        {sysList.map((item) => {
          return (
            <li key={item.id} className="notification-item">
              <Icon
                path={item.avatarPath}
                size={1}
                className="notification-avatar"
              />
              <div>
                <p className="n-subject">{item.subject}</p>
                <p className="n-content">{item.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="footer">
        <button>Read All Notifications</button>
      </div>
    </div>
  );
};

const Dropdown = (props) => {
  const [list, setList] = useState(["dropdown-content", "card"]);
  const handleShow = () => {
    if (list.includes("show")) setList(["dropdown-content", "card"]);
    else setList([...list, "show"]);
  };
  return (
    <div className="dropdown">
      <div onClick={handleShow} className="dropbtn">
        {props.clickable}
      </div>
      <div className={list.join(" ")}>{props.children}</div>
    </div>
  );
};

export { Dropdown, NotificationsDropdown, CartDropdown, AdminDropdown };
