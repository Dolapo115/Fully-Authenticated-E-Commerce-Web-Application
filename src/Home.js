import React, { useEffect } from "react";
import "./CSS/home.css";
import Navbar from "./Navbar";
import Subnav from "./Subnav";
import ProductContainer from "./ProductContainer";
import {
  clothingArr,
  bagsArr,
  stationeryArr,
  footwearArr,
  watchesArr,
  gadgetsArr,
} from "./firebaseConfig";
import { DataBucket } from "./StateProvider";

function Home() {
  const [
    {
      clothing,
      footwear,
      watches,
      stationery,
      gadgets,
      bags,
      selectedCategory,
      categoryFlag,
    },
    dispatch,
  ] = DataBucket();

  //ENSURES THE FIRST ARRAY OF CLOTHES GET LOGGED ON LOAD
  useEffect(() => {
    dispatch({
      type: "CLOTHING",
      clothing: clothingArr,
    });
  }, [clothingArr.length > 0]);

  //PERFORMS SWITCHING
  function effect() {
    if (selectedCategory === "clothing") {
      return dispatch({
        type: "CLOTHING",
        clothing: clothingArr,
      });
    } else if (selectedCategory === "bestselling") {
      return dispatch({
        type: "BESTSELLING",
        bestselling: [
          ...clothing,
          ...bags,
          ...footwear,
          ...watches,
          ...gadgets,
          ...stationery,
        ],
      });
    } else if (selectedCategory === "stationery") {
      return dispatch({
        type: "STATIONERY",
        stationery: stationeryArr,
      });
    } else if (selectedCategory === "bags") {
      return dispatch({
        type: "BAGS",
        bags: bagsArr,
      });
    }
    if (selectedCategory === "footwear") {
      return dispatch({
        type: "FOOTWEAR",
        footwear: footwearArr,
      });
    } else if (selectedCategory === "gadgets") {
      return dispatch({
        type: "GADGETS",
        gadgets: gadgetsArr,
      });
    } else if (selectedCategory === "watches") {
      return dispatch({
        type: "WATCHES",
        watches: watchesArr,
      });
    }
  }

  //ENSURES THE SWITCHING FUNCTION RUNS EVERYTIME THE CATEGORY FLAG I PUT IN THE REDUCER CHANGES
  useEffect(() => {
    effect();
  }, [categoryFlag]);

  return (
    <div className="home-main">
      <Navbar />
      <div className="main-div">
        <Subnav />
        <ProductContainer />
      </div>
    </div>
  );
}

export default Home;
