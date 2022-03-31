import Rating from "./rating";
import Icon from "@mdi/react";
import { mdiCartOutline, mdiCardsHeartOutline, mdiCardsHeart } from "@mdi/js";
import "../styles/_products-panel.scss";

const ProductItem = ({ item, isGrid }) => {
  return (
    <article className="card" style={styles.card}>
      {isGrid ? (
        <div>
          <img src={item.img} style={styles.img} />
          <div style={styles.container}>
            <Rating rating={item.rating} />
            <h6>${item.price}</h6>
          </div>
          <a href="#">{item.name}</a>
          <p style={styles.desc}>{item.discription}</p>
          <div style={styles.container}>
            <button style={styles.button}>
              <Icon path={mdiCardsHeartOutline} size={0.8} />
              Wishlist
            </button>
            <button style={{ ...styles.button, ...styles.twilight }}>
              <Icon path={mdiCartOutline} size={0.8} />
              View in cart
            </button>
          </div>
        </div>
      ) : (
        <div className="grid2">
          <img src={item.img} />
          <div style={styles.midSection}>
            <a href="#">{item.name}</a>
            <h5>
              By <span style={styles.twilightText}>{item.brand}</span>
            </h5>
            <Rating rating={item.rating} />
            <p style={styles.descLong}>{item.discription}</p>
          </div>
          <div style={styles.right}>
            <p style={{ ...styles.twilightText, ...styles.block }}>
              ${item.price}
            </p>
            <button style={styles.button}>
              <Icon path={mdiCardsHeartOutline} size={0.8} />
              Wishlist
            </button>
            <button
              style={{ ...styles.button, ...styles.twilight, ...styles.block }}
            >
              <Icon path={mdiCartOutline} size={0.8} />
              View in cart
            </button>
          </div>
        </div>
      )}
    </article>
  );
};

const styles = {
  card: {
    // flex: "0 3 20rem",
    // height: "25rem",
    // padding: "0.1rem 0.25rem",
    // margin: "0.1rem 0.25rem",
    overflow: "hidden",
  },
  container: {
    display: "flex",
    alignItems: "space-around",
    justifyItems: "center",
  },
  img: {
    height: "auto",
    width: "100%",
  },
  desc: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: "0.875rem",
  },
  descLong: {
    fontSize: "0.875rem",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    lineHeight: "1.5rem",
  },
  button: {
    width: "50%",
    flexGrow: "1",
    border: "none",
    backgroundColor: "#f8f8f8",
    margin: "0px",
  },
  twilight: {
    backgroundColor: "rgb(115, 103, 240)",
  },
  twilightText: {
    color: "rgb(115, 103, 240)",
  },
  block: { display: "block", width: "100%" },

  midSection: {
    // maxWidth: "400px",
    // flexGrow: "2",
    borderRight: "1px solid #ebe9f1",
    overflowWrap: "break-word",
  },
  right: {
    flex: "0 1 auto",
  },
};

export default ProductItem;
