import React from "react";
import "./FeaturedProducts.css";
import { product_list } from "../../assets/assets";
import { ShoppingCart, Search, Heart } from "lucide-react";

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

              <div className="icon-box">
                <button className="icon-btn" data-toolpit="Add to cart" onClick={(e) => e.stopPropagation()}>
                  <ShoppingCart size={18} strokeWidth={1.5}></ShoppingCart>
                </button>

                <button className="icon-btn" data-toolpit="Quick view" onClick={(e) => e.stopPropagation()}>
                  <Search size={18} strokeWidth={1.5} />
                </button>

                <button className="icon-btn" data-toolpit="Add to wishlist" onClick={(e) => e.stopPropagation()}>
                  <Heart size={18} strokeWidth={1.5}></Heart>
                </button>
                

              </div>
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
