import React from "react";
import "./Components.css";

const Description = () => {
  return (
    <div className="description-container">
      <p className="sneaker-company">
        <b>Sneaker Company</b>
      </p>
      <h1>Fall Limited Edition Sneakers</h1>
      <p className="product-description">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-details">
        <div className="price-details-final">
          <h1>$125.00</h1> <span className="discount">50%</span>
        </div>
        <p className="original-price"> $250.00</p>
      </div>
    </div>
  );
};

export default Description;
