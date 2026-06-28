import React, { useState } from "react";
import "./NavBar.css";
import { asset } from "../../assets/assets";

const NavBar = () => {
  const [menu, setMenu] = useState("Home");
  return (
    <div className="navbar">
      <img src={asset.logo} alt="Lanka Batiks" className="navbar-logo" />

      <ul className="navbar-menu">
        <li onClick={() => setMenu("Home")} className={menu === "Home" ? "active" : ""}>Home</li>
        <li onClick={() => setMenu("Shop")} className={menu === "Shop" ? "active" : ""}>Shop</li>
        <li onClick={() => setMenu("Categories")} className={menu === "Categories" ? "active" : ""}>Categories</li>
        <li onClick={() => setMenu("Gift Vouchers")} className={menu === "Gift Vouchers" ? "active" : ""}>Gift Vouchers</li>
        <li onClick={() => setMenu("Latest Collection")} className={menu === "Latest Collection" ? "active" : ""}>Latest Collection</li>
        <li onClick={() => setMenu("On Sale")} className={menu === "On Sale" ? "active" : ""}>On Sale</li>
        <li onClick={() => setMenu("About Us")} className={menu === "About Us" ? "active" : ""}>About Us</li>
        <li onClick={() => setMenu("Blog")} className={menu === "Blog" ? "active" : ""}>Blog</li>
        <li onClick={() => setMenu("Contact Us")} className={menu === "Contact Us" ? "active" : ""}>Contact Us</li>
      </ul>

      <div className="navbar-right">
      
        <img src={asset.search_icon} alt="Search" className="nav-icon" />
        <div className="navbar-search-icon">
          <img src={asset.basket_icon} alt="Basket" className="nav-icon" />
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default NavBar;