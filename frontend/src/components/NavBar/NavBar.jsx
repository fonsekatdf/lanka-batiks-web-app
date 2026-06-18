import React from "react";
import "./NavBar.css";
import { asset } from "../../assets/assets";
// import { FiSearch, FiHeart, FiShoppingCart} from 'reat-icons/fi';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo-box">
        <img src={asset.logo} alt="Lanka Batiks" className="navbar-logo" />
      </div>

      <ul className="navbar-menu">
        <li>HOME</li>
        <li>SHOP</li>
        <li className="dropdown">
          CATEGORIES <span className="arrow">▼</span>
        </li>
        <li>GIFT VOUCHERS</li>
        <li>LATEST COLLECTION</li>
        <li>ON SALE</li>
        <li>ABOUT US</li>
        <li>BLOG</li>
        <li>CONTACT US</li>
      </ul>

      <div className="navbar-actions">
        <span className="login-text">LOGIN / REGISTER</span>
        {/* <FiSearch className="navbar-icon" />
          <FiHeart className="navbar-icon" /> */}
        <div className="cart-container">
          {/* <FiShoppingCart className="navbar-icon" /> */}
          <span className="cart-badge">0</span>
          <span className="cart-total">Rs.0.00</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
