import React, { useEffect, useState } from "react";
import "./Header.css";
import { asset } from "../../assets/assets";

const Header = () => {
  const headerImages = [
    asset.header_img_1,
    asset.header_img_2,
    asset.header_img_3,
    asset.header_img_4,
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentIndex) =>
        (currentIndex + 1) % headerImages.length
      );
    }, 4000);

    return () => clearInterval(intervalId);
  }, [headerImages.length]);

  return (
    <div className="header">
      <img
        className="header-image"
        src={headerImages[currentImageIndex]}
        alt="Batik collection header"
      />
      <div className="header-contents">
        <h2>Discover Authentic Batik Elegance</h2>
        <p>
          Choose from a stunning collection of handcrafted Sri Lankan batiks
          featuring rich, vibrant colors and intricate designs. Our mission is
          to blend traditional artistry with modern fashion, elevating your
          wardrobe with truly unique, ethically made garments.
        </p>
        <button>View Collection</button>
      </div>
    </div>
  );
};

export default Header;
