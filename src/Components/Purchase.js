import React, { useState } from "react";
import "./Components.css";

const Purchase = ({ cartQuantity, setCartQuantity }) => {
  const [shoeQuantity, setShoeQuantity] = useState(0);

  const handleIncreaseButton = () => {
    setShoeQuantity(shoeQuantity + 1);
  };

  const handleDecreaseButton = () => {
    if (shoeQuantity > 0) {
      setShoeQuantity(shoeQuantity - 1);
    }
  };

  const handlePurchase = () => {
    setCartQuantity(cartQuantity + shoeQuantity);
    setShoeQuantity(0);
  };

  return (
    <div className="purchase-container">
      <div className="shoe-quantity-container">
        <img
          src={process.env.PUBLIC_URL + "/images/icon-minus.svg"}
          alt="minus-icon"
          className="icon-minus"
          onClick={handleDecreaseButton}
        />
        <span>{shoeQuantity}</span>
        <img
          src={process.env.PUBLIC_URL + "/images/icon-plus.svg"}
          alt="plus-icon"
          className="icon-plus"
          onClick={handleIncreaseButton}
        />
      </div>
      {shoeQuantity === 0 ? (
        <button disabled>Add to cart</button>
      ) : (
        <button onClick={handlePurchase}>Add to cart</button>
      )}
    </div>
  );
};

export default Purchase;
