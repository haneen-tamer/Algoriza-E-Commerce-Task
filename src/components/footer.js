import Icon from "@mdi/react";
import { mdiCardsHeartOutline } from "@mdi/js";
const Footer = () => {
  return (
    <footer style={styles.flex}>
      <p style={styles.text}>
        COPYRIGHT &copy; 2022 <a href="#">Pixinvent</a>, All rights Reserved
      </p>
      <div>
        <p style={styles.text}>
          Hand-crafted & Made with{"  "}
          <Icon path={mdiCardsHeartOutline} size={1.2} color="#ea5455" />
        </p>
      </div>
    </footer>
  );
};
const styles = {
  flex: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  text: {
    margin: "0",
  },
};
export default Footer;
