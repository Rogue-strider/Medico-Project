import React from "react";
import { useEffect } from "react";
import "./cart.css";
import { useCart } from "./CartContext";
const Cartnew = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    addToCart,
    IncreaseQuantity,
    DecreaseQuantity,
  } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalquantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total_each_price = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className="main-container">
        <div className="cart-head">
          <h2 className="cart-heading">
            Your Cart{" "}
            {totalquantity == 0 ? (
              <span></span>
            ) : (
              <span>[ {totalquantity}items] </span>
            )}
          </h2>
          <button onClick={clearCart} className="clear-cart">
            Clear Cart
            <i className="ri-shopping-cart-2-line"></i>
          </button>
        </div>
        <div className="cart-container">
          <div className="item-list">
            <h2> Medicine Name</h2>
            {cart.map((item) => (
              <div className="item-name"> {item.name} </div>
            ))}
          </div>

          <div className="quantity-list">
            <h2> Quantity</h2>
            {cart.map((item) => (
              <div className="item-quantity">
                <div className="quantity-container">
                  <div
                    className="plus"
                    onClick={() => IncreaseQuantity(item.id)}
                  >
                    <i className="ri-subtract-line"></i>
                  </div>{" "}
                  <div className="display-quantity">{item.quantity}</div>
                  <div className="minus">
                    <i
                      className="ri-add-box-line"
                      onClick={() => DecreaseQuantity(item.id)}
                    ></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="price-list">
            <h2> Price</h2>
            {cart.map((item) => (
              <div className="item-price"> price: ${item.price} </div>
            ))}
          </div>
          <div className="total-list">
            <h2> Total</h2>
            {cart.map((item) => (
              <div className="item-total-price">
                {" "}
                Total Price: ${total_each_price}
                <i
                  className="ri-delete-bin-2-line rembtn"
                  on
                  onClick={() => removeFromCart(item.id)}
                ></i>
              </div>
            ))}
          </div>
        </div>
        <p>
          <strong>Total: ${total}</strong>
        </p>
      </div>
    </div>
  );
};

export default Cartnew;
