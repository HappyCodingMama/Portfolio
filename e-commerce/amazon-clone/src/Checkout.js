import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/bday/bday.jpg"
          alt=""
        />

        <div>
          <h2 className="checkout__title">Your shopping Cart</h2>

          
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        {/* BasketItem */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        <h2>The subtotal will go here</h2>

      </div>
    </div>
  );
}

export default Checkout;
