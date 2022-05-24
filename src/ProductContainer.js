import React, { useState, useEffect } from "react";
import "./CSS/product-container.css";
import Product from "./Product";
import { DataBucket } from "./StateProvider";
//import imageError from "./images/imageError.png";
import {
  clothingArr,
} from "./firebaseConfig";

function ProductContainer() {
  const [
    {
      selectedCategory,
      bestselling,
      clothing,
      gadgets,
      footwear,
      stationery,
      bags,
      watches,
    },
    
  ] = DataBucket();
  const [mapArray, setMapArray] = useState(clothingArr);

  useEffect(() => {
    if (selectedCategory === "bestselling") {
      setMapArray(bestselling);
    } else if (selectedCategory === "clothing") {
      setMapArray(clothing);
    } else if (selectedCategory === "footwear") {
      setMapArray(footwear);
    } else if (selectedCategory === "bags") {
      setMapArray(bags);
    } else if (selectedCategory === "watches") {
      setMapArray(watches);
    } else if (selectedCategory === "gadgets") {
      setMapArray(gadgets);
    } else if (selectedCategory === "stationery") {
      setMapArray(stationery);
    } else {
      setMapArray([]);
    }
  }, [selectedCategory]);

  // useEffect(()=>{
  //   setMapArray(clothing)
  //   console.log(mapArray);
  // }, [clothingArr.length])

  // setTimeout(()=>{
  //   return(
  //     <h1>...</h1>
  //   )
  // }, 1000)

  
    return (
      <div className="product-container-main">
        <h1 className="product-main-header">
          {selectedCategory ? `${selectedCategory}` : "empty"}
        </h1>
        <div className="product-main-div">
          {mapArray.map((props) => (
          <Product
            imgUrl={props.imgUrl}
            name={props.name}
            desc={props.desc}
            price={props.price}
            availability={props.availability}
            id = {Math.floor(Math.random()*1000)}
            key = {Math.floor(Math.random()*1000)}
          />
          ))}
        </div>
      </div>
    );
  
  

  
}

export default ProductContainer;
