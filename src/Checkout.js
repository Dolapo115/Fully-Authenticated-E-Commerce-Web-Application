import React from "react";
import Navbar from "./Navbar";
import { DataBucket } from "./StateProvider";
// import imageError from "./images/imageError.png";
import CheckoutCard from "./CheckoutCard";
import "./CSS/checkout.css";
import CheckoutTotal from "./CheckoutTotal";
function Checkout() {
  const [{ cart }, ] = DataBucket();

  return (
    <div className="checkout-main">
      <Navbar />
      <div className="checkout-card-container">
        {cart.map((item) => {
          return <CheckoutCard
            name={item.name}
            desc={item.desc}
            availability={item.availability}
            price={item.price}
            imgUrl={item.imgUrl}
            id={item.id}
            key = {Math.floor(Math.random() * 1000)}
          />;
        })}
      </div>

      <CheckoutTotal />
    </div>
  );
}

export default Checkout;
