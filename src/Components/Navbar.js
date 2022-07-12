import React, { useState } from "react";
import Cart from "./Cart";
import "./Components.css";

const Navbar = ({ windowWidth, cartQuantity }) => {
  const [displaySidemenu, setDisplaySidemenu] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);

  return (
    <div>
      {/* MOBILE NAVBAR */}
      {windowWidth < 600 ? (
        <div className="mobile-navbar">
          <div className="mobile-navbar-leftside">
            <img
              src={process.env.PUBLIC_URL + "/images/icon-menu.svg"}
              alt="menu"
              onClick={() => setDisplaySidemenu(true)}
              className="mobile-navbar-image"
            />
            <img
              src={process.env.PUBLIC_URL + "/images/logo.svg"}
              alt="logo"
              className="mobile-navbar-image"
            />
          </div>
          <div className="mobile-navbar-rightside">
            <div className="cart-icon-container">
              <p className="current-cart-amount">{cartQuantity}</p>
              <img
                src={process.env.PUBLIC_URL + "/images/icon-cart.svg"}
                alt="cart-icon"
                onClick={() => setDisplayCart(!displayCart)}
                className="mobile-navbar-image"
              />
            </div>
            <img
              src={process.env.PUBLIC_URL + "/images/image-avatar.png"}
              alt="avatar-pic"
              className="mobile-avatar-image"
            />
          </div>
          {/* MOBILE SIDEMENU */}
          {displaySidemenu === true ? (
            <div className="mobile-sidemenu">
              <img
                src={process.env.PUBLIC_URL + "/images/icon-close.svg"}
                alt="menu"
                onClick={() => setDisplaySidemenu(false)}
                className="icon-close"
              />
              <h3>Collections</h3>
              <h3>Men</h3>
              <h3>Women</h3>
              <h3>About</h3>
              <h3>Contact</h3>
            </div>
          ) : (
            <></>
          )}
          {displayCart === true ? <Cart cartQuantity={cartQuantity} /> : <></>}
        </div>
      ) : (
        <div className="desktop-navbar">
          {/* DESKTOP NAVBAR */}
          <div className="desktop-navbar-options">
            <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="logo" />
            <h3>Collections</h3>
            <h3>Men</h3>
            <h3>Women</h3>
            <h3>About</h3>
            <h3>Contact</h3>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "/images/icon-cart.svg"}
              alt="cart-icon"
              onClick={() => setDisplayCart(!displayCart)}
            />
            {displayCart === true ? (
              <Cart cartQuantity={cartQuantity} />
            ) : (
              <></>
            )}
            <img
              src={process.env.PUBLIC_URL + "/images/image-avatar.png"}
              alt="avatar-pic"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
