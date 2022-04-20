import "../styles/_side-menu.scss";
import Icon from "@mdi/react";
import {
  mdiHomeOutline,
  mdiChevronRight,
  mdiCircleOutline,
  mdiCalendarBlankOutline,
  mdiMessageOutline,
  mdiEmailOutline,
  mdiCheckboxMarkedOutline,
  mdiAlphaT,
  mdiWaterOutline,
  mdiEyeOutline,
  mdiContentCopy,
  mdiPackageVariantClosed,
  mdiCheckboxMarkedCircleOutline,
  mdiViewList,
  mdiViewGridOutline,
  mdiMapOutline,
  mdiShieldOutline,
  mdiEyeOffOutline,
  mdiLifebuoy,
  mdiFileDocumentOutline,
  mdiCartOutline,
  mdiAccountOutline,
} from "@mdi/js";
import { useState } from "react";

const NavItem = (props) => {
  const [isExpanded, setExpanded] = useState(false);
  const handleClick = (e) => {
    if (props.hasSub) {
      setExpanded((prev) => !prev);
    }
  };
  const styles = { icon: { marginRight: "1.1rem" } };
  return (
    <li onClick={handleClick}>
      <div className="nav-item">
        {props.icon && (
          <Icon path={props.icon} size={0.9} style={styles.icon} />
        )}
        <h3>{props.title}</h3>
        {props.hasSub && <Icon path={mdiChevronRight} size={0.8} />}
      </div>
      {props.hasSub && isExpanded && <ul className="sub">{props.children}</ul>}
    </li>
  );
};

const SideMenu = () => {
  return (
    <aside id="side-menu">
      <div className="logo">
        <img src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/logo.36f34a9f.svg" />
        <h2 className="brand-text"> Vuexy </h2>
      </div>
      <ul className="nav-list">
        <NavItem icon={mdiHomeOutline} hasSub={true} title="Dashboards">
          <NavItem hasSub={false} title="eCommerce" />
          <NavItem hasSub={false} title="Analytics" />
        </NavItem>
        <li className="section-header">Apps & Pages</li>
        <NavItem icon={mdiEmailOutline} hasSub={false} title="Email" />
        <NavItem icon={mdiMessageOutline} hasSub={false} title="Chat" />
        <NavItem icon={mdiCheckboxMarkedOutline} hasSub={false} title="Todo" />
        <NavItem
          icon={mdiCalendarBlankOutline}
          hasSub={false}
          title="Calendar"
        />
        <NavItem icon={mdiFileDocumentOutline} hasSub={true} title="Invoice">
          <NavItem hasSub={false} title="List" />
          <NavItem hasSub={false} title="Preview" />
          <NavItem hasSub={false} title="Edit" />
          <NavItem hasSub={false} title="Add" />
        </NavItem>
        <NavItem icon={mdiCartOutline} hasSub={true} title="eCommerce">
          <NavItem hasSub={false} title="Shop" />
          <NavItem hasSub={false} title="Details" />
          <NavItem hasSub={false} title="Wishlist" />
          <NavItem hasSub={false} title="Checkout" />
        </NavItem>
        <NavItem icon={mdiAccountOutline} hasSub={true} title="User">
          <NavItem hasSub={false} title="List" />
          <NavItem hasSub={false} title="View" />
          <NavItem hasSub={false} title="Edit" />
        </NavItem>
        <NavItem icon={mdiAccountOutline} hasSub={true} title="Pages">
          <NavItem hasSub={false} title="Account Settings" />
          <NavItem hasSub={false} title="Profile" />
          <NavItem hasSub={false} title="Faq" />
          <NavItem hasSub={false} title="Knowledge Base" />
          <NavItem hasSub={false} title="Pricing" />
        </NavItem>
        <li className="section-header">User Interface</li>
        <NavItem icon={mdiAlphaT} hasSub={false} title="Typography" />
        <NavItem icon={mdiWaterOutline} hasSub={false} title="Colors" />
        <NavItem icon={mdiEyeOutline} hasSub={false} title="Feather" />
        <li className="section-header">Forms & Tables</li>
        <NavItem icon={mdiContentCopy} hasSub={false} title="Form Layout" />
        <NavItem
          icon={mdiPackageVariantClosed}
          hasSub={false}
          title="Form Wizard"
        />
        <NavItem
          icon={mdiCheckboxMarkedCircleOutline}
          hasSub={false}
          title="Form Validtion"
        />
        <NavItem icon={mdiContentCopy} hasSub={false} title="Form Repeater" />
        <NavItem icon={mdiViewList} hasSub={false} title="BS Table" />
        <NavItem icon={mdiViewGridOutline} hasSub={false} title="Good Table" />
        <li className="section-header">Charts & Maps</li>
        <NavItem icon={mdiMapOutline} hasSub={false} title="Leaflets" />
        <li className="section-header">Other</li>
        <NavItem
          icon={mdiShieldOutline}
          hasSub={false}
          title="Access Control"
        />
        <NavItem icon={mdiEyeOffOutline} hasSub={false} title="Disable Menu" />
        <NavItem icon={mdiLifebuoy} hasSub={false} title="Raise Support" />
        <NavItem
          icon={mdiFileDocumentOutline}
          hasSub={false}
          title="Documentation"
        />
      </ul>
    </aside>
  );
};

export default SideMenu;
