import React, { useContext } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import "./Cart.css";

const Cart = () => {

  const { cartItems,saree_list, removeFromCart } = useContext(StoreContext);


  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {saree_list.map((item) => {
          if(cartItems[item._id]>0){
            return (
              <div key={item._id} className="cart-items-title cart-items-item">
                <p>{item.name}</p>
                <p>{item.description}</p>
              </div>
            )
          }
        })}
      </div>
      
    </div>
  );
}

export default Cart;
