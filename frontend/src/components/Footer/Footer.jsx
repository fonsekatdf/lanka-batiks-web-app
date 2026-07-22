import React from "react";
import "./Footer.css";
import { asset } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content-left">
        <img src={asset.logo} alt="" />
        <p> Unveil the Essence of Elegance with Our Batik Products!</p>
        <p>245 Hapugala Road, Galle 80240, Sri Lanka</p>
        <p>Phone: +94 91 234 5678</p>
        <p>Email: info@lankabatiks.com</p>
        <div className="footer-social-icons">
          <img src={asset.facebook_icon} alt="" />
          <img src={asset.whatsapp_icon} alt="" />
          <img src={asset.linkedin_icon} alt="" />
          <img src={asset.insta_icon} alt="" />
        </div>
      </div>
      <div className="footer-content-center">
        <h2>USEFULL LINKS</h2>
        <ul>
          <li>Returns & Refunds</li>
          <li>Privacy Policy</li>
          <li>Recent News</li>
          <li>More About Us</li>
          <li>Contact US</li>
        </ul>
      </div>
      <div className="footer-content-right">
        <h2>FOOTER MENU</h2>
        <ul>
          <li>Home Page</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Cart</li>
          <li>Checkout</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <hr />
      <div className="footer-bottom-row">
        <p className="footer-copyright">
          CopyRight © 2026 Lanka Batiks. All Rights Reserved.
        </p>
        <div className="footer-payment-icons">
          <img src={asset.mastercard_icon} alt="Mastercard" />
          <img src={asset.visa_icon} alt="Visa" />
          <img src={asset.paypal_icon} alt="PayPal" />
          <img src={asset.american_express_icon} alt="American Express" />
        </div>
      </div>

    </div>
  );
};

export default Footer;
