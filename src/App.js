import React, { useEffect } from "react";
import "./CSS/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import AddProducts from "./AddProducts";
import Hello from "./Hello";
import { DataBucket } from "./StateProvider";
import { clothingArr } from "./firebaseConfig";

function App() {
  const [, dispatch] = DataBucket();

  useEffect(() => {
    dispatch({
      type: "CLOTHING",
      clothing: clothingArr,
    });
  }, []);

  return (
    <Router>
      <div className="app-main">
          <Routes>
            <Route path = '/home'  element = {<Home />}/>
            <Route path = '/checkout'  element = {<Checkout />}/>
            <Route path = '/raggamuffin'  element = {<Hello />}/>
            <Route path = '/addproducts'  element = {<AddProducts />}/>
            <Route path = '/'  element = {<Login />}/>
          </Routes>
      </div>
    </Router>

    
  );
}

export default App;

