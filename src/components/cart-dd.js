import { useState } from "react";
import products from "../data/store-data";
import "../styles/_navbar.scss";

const CartDropdown = () => {
  const [cartList, setCartList] = useState(products.slice(0, 3));

  return (
    <div>
      <div className="cart-header">
        <h4>My Cart</h4>
        <div class="bubble">{cartList.length} items</div>
      </div>
      <ul className="cart-items">
        {cartList.map((item) => {
          return (
            <li className="cart-item">
              <img src={item.img}></img>
              <div className="title">
                <a href="#">{item.name}</a>
                <h5>By {item.brand}</h5>
              </div>
              <div className="count">
                <button>+</button>
                <span>{1}</span>
                <button>-</button>
              </div>
              <h5>${item.price}</h5>
              <a>x</a>
            </li>
          );
        })}
      </ul>
      <div>
        <div className="checkout-header">
          <h6>Total</h6>
          <h6>
            $
            {parseFloat(
              cartList.reduce((sum, item, i) => {
                return (sum = sum + item.price);
              }, 0)
            ).toFixed(2)}
          </h6>
        </div>
        <button id="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartDropdown;
