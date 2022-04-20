import "../styles/_header.scss";
import Icon from "@mdi/react";
import { mdiChevronRight, mdiHomeOutline, mdiCogOutline } from "@mdi/js";
const BreadCrumbItem = ({ text, className }) => {
  return (
    <li className={className}>
      <Icon path={mdiChevronRight} size={0.8} />
      <a>{text}</a>
    </li>
  );
};

const Header = () => {
  return (
    <div id="header">
      <div className="row">
        <h2 className="bordered">Shop</h2>
        <ol className="breadcrumb-list">
          <li className="breadcrumb-item">
            <Icon path={mdiHomeOutline} size={0.8} />
          </li>
          <BreadCrumbItem className="breadcrumb-item" text="eCommerce" />
          <BreadCrumbItem className="breadcrumb-item" text="Shop" />
        </ol>
      </div>
      <div>
        <button id="btn">
          <Icon path={mdiCogOutline} size={0.7} />
        </button>
      </div>
    </div>
  );
};

export default Header;
