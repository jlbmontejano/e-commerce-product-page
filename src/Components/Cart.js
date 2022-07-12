import React from "react";
import "./Components.css";

const Cart = ({ cartQuantity }) => {
  const total = 125 * cartQuantity;

  return (
    <div className="cart-container">
      <h3>Cart</h3>
      <hr />
      {cartQuantity === 0 ? (
        <div>
          <p style={{ textAlign: "center" }}>Your cart is empty.</p>
        </div>
      ) : (
        <div className="cart-container-info">
          <div className="cart-product-info">
            <img
              src={process.env.PUBLIC_URL + `/images/image-product-1.jpg`}
              alt="thumbnail-img"
              className="cart-product-image"
            />
            <p>Fall Limited Edition Sneakers</p>
            <p>
              $125 x {`${cartQuantity}`} <b>${total}</b>
            </p>
          </div>
          <button style={{ justifySelf: "center" }}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
