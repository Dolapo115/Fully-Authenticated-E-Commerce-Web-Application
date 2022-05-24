import React, { useState, useEffect } from "react";
import "./CSS/subnav.css";
import bestsellingImage from "./images/bestselling.jpg";
import clothingImage from "./images/clothing.jpg";
import footwearImage from "./images/footwear.jpg";
import gadgetsImage from "./images/gadgets.jpg";
import stationeryImage from "./images/stationery.jpg";
import bagsImage from "./images/bags.png";
import watchesImage from "./images/watches.png";
import { DataBucket } from "./StateProvider";

function Subnav() {
  const [, dispatch] = DataBucket();
  const [categoryState, setCategoryState] = useState("clothing");
  const [categoryFlagState, setCategoryFlagState] = useState(false);

  let clothingStyle,
    watchesStyle,
    bagsStyle,
    gadgetsStyle,
    stationeryStyle,
    bestsellingStyle,
    footwearStyle;

  useEffect(() => {
    dispatch({
      type: "SWITCH_CATEGORY",
      selectedCategory: categoryState,
    });
    dispatch({
      type: "CATEGORY_FLAG",
      categoryFlag: categoryFlagState,
    });
  }, [categoryState]);

  console.log(categoryState);
  return (
    <div className="subnav-main">
      <div
        className="subnavigation"
        id={clothingStyle && "effect"}
        onClick={() => {
          setCategoryState("clothing");
          setCategoryFlagState(!categoryFlagState);
          clothingStyle = true;
          footwearStyle = false;
          gadgetsStyle = false;
          bagsStyle = false;
          watchesStyle = false;
          stationeryStyle = false;
          bestsellingStyle = false;
        }}
      >
        <img src={clothingImage} alt="" className="subnav-image" />
        <p className="subnav-name">Clothing</p>
      </div>
      <div
        className="subnavigation"
        id={watchesStyle && "effect"}
        onClick={() => {
          setCategoryState("watches");
          setCategoryFlagState(!categoryFlagState);
          clothingStyle = false;
          footwearStyle = false;
          gadgetsStyle = false;
          bagsStyle = false;
          watchesStyle = true;
          stationeryStyle = false;
          bestsellingStyle = false;
        }}
      >
        <img src={watchesImage} alt="" className="subnav-image" />
        <p className="subnav-name">Watches</p>
      </div>
      <div
        className="subnavigation"
        id={footwearStyle && "effect"}
        onClick={() => {
          setCategoryState("footwear");
          setCategoryFlagState(!categoryFlagState);
          clothingStyle = false;
          footwearStyle = true;
          gadgetsStyle = false;
          bagsStyle = false;
          watchesStyle = false;
          stationeryStyle = false;
          bestsellingStyle = false;
        }}
      >
        <img src={footwearImage} alt="" className="subnav-image" />
        <p className="subnav-name">Footwear</p>
      </div>
      <div
        className="subnavigation"
        id={gadgetsStyle && "effect"}
        onClick={() => {
          setCategoryState("gadgets");
          setCategoryFlagState(!categoryFlagState);
          clothingStyle = false;
          footwearStyle = false;
          gadgetsStyle = true;
          bagsStyle = false;
          watchesStyle = false;
          stationeryStyle = false;
          bestsellingStyle = false;
        }}
      >
        <img src={gadgetsImage} alt="" className="subnav-image" />
        <p className="subnav-name">Gadgets</p>
      </div>
      <div
        className="subnavigation"
        id={bagsStyle && "effect"}
        onClick={() => {
          setCategoryState("bags");
          setCategoryFlagState(!categoryFlagState);
          clothingStyle = false;
          footwearStyle = false;
          gadgetsStyle = false;
          bagsStyle = true;
          watchesStyle = false;
          stationeryStyle = false;
          bestsellingStyle = false;
        }}
      >
        <img src={bagsImage} alt="" className="subnav-image" />
        <p className="subnav-name">Bags</p>
      </div>
      <div
        className="subnavigation"
        value="stationery"
        id={stationeryStyle && "effect"}
        onClick={() => {
          setCategoryState("stationery");
          setCategoryFlagState(!categoryFlagState);
          clothingStyle = false;
          footwearStyle = false;
          gadgetsStyle = false;
          bagsStyle = false;
          watchesStyle = false;
          stationeryStyle = true;
          bestsellingStyle = false;
        }}
      >
        <img src={stationeryImage} alt="" className="subnav-image" />
        <p className="subnav-name">Stationery</p>
      </div>
      <div
        className="subnavigation"
        id={bestsellingStyle && "effect"}
        onClick={() => {
          setCategoryState("bestselling");
          setCategoryFlagState(!categoryFlagState);
          clothingStyle = false;
          footwearStyle = false;
          gadgetsStyle = false;
          bagsStyle = false;
          watchesStyle = false;
          stationeryStyle = false;
          bestsellingStyle = true;
        }}
      >
        <img src={bestsellingImage} alt="" className="subnav-image" />
        <p className="subnav-name">Best Selling</p>
      </div>
    </div>
  );
}

export default Subnav;
