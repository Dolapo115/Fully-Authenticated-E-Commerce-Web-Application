import React, {useEffect} from "react";
import "./CSS/product.css";
import imageError from "./images/imageError.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import { DataBucket } from "./StateProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  doc,
  deleteDoc,
  getDocs,
  getFirestore,
  collection,
  where,
  query
} from "firebase/firestore";
//import {clothingRef, gadgetsRef, bagsRef , stationeryRef, footwearRef, watchesRef} from './firebaseConfig'

function Product({ imgUrl, name, price, availability, desc, id }) {
  const [{ isAdmin, cart, selectedCategory, cartTotal }, dispatch] = DataBucket();

  function calculateTotal() {
    dispatch({
      type: "CART_TOTAL",
      price: price,
    });
  }

  //ADDS AN ITEM TO THE CART
  function addToCart() {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        name: name,
        imgUrl: imgUrl,
        price: price,
        desc: desc,
        availability: availability
      },
    });

    console.log(cart);
    calculateTotal()
  }

  //ALLOWS THE ADMIN TO DELETE ANY ITEM IN THE SHOP.
  //THE BUTTON THAT CONTROLS THIS IS ONLY VISIBLE TO ADMINISTRATORS.
  async function deletePrompt() {
    const toDelete = window.confirm("Delete Item From Database?");
    if (toDelete) {
      const db = getFirestore();
      const ref = query(
        collection(db, "clothing"),
        where("name", '==', name)
      );
      //const docRef = doc(ref);
      const docSnap = await getDocs(ref);
      //console.log(docSnap)
      if (docSnap) {
        docSnap.forEach(async (document) => {
          console.log(document.id, " => ", document.data());
          await deleteDoc(doc(db, selectedCategory, document.id));
          alert("Deleted! Changes Will Take Effect Shortly");
        });
      } else {
        console.log("No such document!");
      }
      
    }
  }

  //COMBINES THE ADD TO CART AND THE CALCULATE TOTAL FUNCTIONS INTO A SINGLE FUNCTION THAT CAN BE CALLED AT THE SAME TIME.
  // function combineFunctions() {
  //     addToCart();
  //     calculateTotal(price);
  //   }

  // useEffect(()=>{
  //   combineFunctions()
  // }, [cartTotal])

  return (
    <div className="product-main" onClick={addToCart}>
      <img
        src={imgUrl ? `${imgUrl}` : { imageError }}
        alt=""
        className="product-image"
      />
      <div className="product-desc">
        <div className="product-name">
          <p className="main-name">{name ? `${name}` : "No Name"}</p>
          <p className="aux-name">{desc ? `${desc}` : "No Description"}</p>
        </div>
        <div className="colors-and-availability">
          <p className="availability">
            {availability ? `${`${availability}`} ` : "- "}available
          </p>
        </div>
        <div className="price-wishlist-basket">
          <p className="price">#{price ? `${price}` : "0000"}</p>
          <div className="basket-and-heart">
            <ShoppingCartOutlinedIcon className="cart" />
            {isAdmin && (
              <DeleteIcon className="delete-card" onClick={deletePrompt} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
