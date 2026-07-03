import React from "react";
import "./FeaturedProducts.css";
import { product_list } from "../../assets/assets";

const FeaturedProducts = ({ category, setCategory }) => {
  const handleProductClick = (productName) => {
    if (!setCategory) return;

    setCategory((prev) => (prev === productName ? "all" : productName));
  };

  return (
    <div className="featured-products-menu" id="featured-products-menu">
      <h1>Featured Products</h1>
      <p className="featured-products-text">
        Experience the vibrant heritage of Sri Lanka through our handpicked
        selection of authentic, brilliantly crafted masterpieces.
      </p>
      <div className="featured-product-list">
        {product_list.map((product, index) => {
          return (
            <div
              onClick={() => handleProductClick(product.product_name)}
              key={index}
              className="featured-product-list-product"
            >
              <img
                className={category === product.product_name ? "active" : ""}
                src={product.product_image}
                alt=""
              />
              <p>{product.product_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default FeaturedProducts;
