import React from "react";
import imageError from "./images/imageError.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { DataBucket } from "./StateProvider";
import "./CSS/checkoutcard.css";

function CheckoutCard({ name, desc, availability, imgUrl, price, id }) {
  const [, dispatch] = DataBucket();

  function deletePrompt() {
    const toDelete = window.confirm("Remove Item?");
    if (toDelete) {
      dispatch({
        type: "REMOVE_FROM_CART",
        id: id,
        price: price
      });
    }
  }

  
  

  return (
    <div classname="checkout-card-container">
      <div className="checkout-product-main">
        <img
          src={imgUrl ? `${imgUrl}` : { imageError }}
          alt=""
          className="checkout-product-image"
        />
        <div className="checkout-product-desc">
          <div className="checkout-product-name">
            <p className="checkout-main-name">{name ? `${name}` : "No Name"}</p>
            <p className="checkout-aux-name">
              {desc ? `${desc}` : "No Description"}
            </p>
          </div>
          <div className="checkout-colors-and-availability">
            <p className="checkout-availability">
              {availability ? `${`${availability}`} ` : "- "}available
            </p>
          </div>
          <div className="checkout-price-wishlist-basket">
            <p className="price">#{price ? `${price}` : "0000"}</p>
            <DeleteIcon onClick={deletePrompt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutCard;
