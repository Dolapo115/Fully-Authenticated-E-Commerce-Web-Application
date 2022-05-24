import React from "react";
import "./CSS/login.css";
import logo from "./icons/logo.jpg";
import google from "./icons/google.png";
import shop from "./icons/shop.png";
import UniversalLogo from "./UniversalLogo";
import { Link, useNavigate } from "react-router-dom";
import { DataBucket } from "./StateProvider";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebaseConfig";

function Login() {
  const [, dispatch] = DataBucket();
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  function handleLogin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        if (user !== null) {
          const displayName = user.displayName;
          const _username = displayName.substr(displayName.indexOf(" ") + 1);
          const username = `${_username
            .charAt()
            .toUpperCase()}${_username.slice(1)}`;
          console.log(username);
          console.log(user);
          //HERE, I DISPATCH THE FUNCTIONS THAT UPDATE THE REDUCER
          dispatch({
            type: "LOGGED_IN",
            loginStatus: true,
          });
          dispatch({
            type: "USERNAME",
            username: username,
          });
          dispatch({
            type: "USER_DP",
            userdP: user.photoURL,
          });
          dispatch({
            type: "USER_ID",
            userId: user.uid,
          });
          //STORING THE USER OBJECT IN LOCAL STORAGE
          localStorage.setItem("_user", user);
          //SETTING UP ROUTING TO TAKE ADMIN TO DASHBOARD
          if (
            user.email === "bashorun115@gmail.com" &&
            user.uid === "pg9uAErspOQsXNSeuulOoiz6Kgv2" &&
            user.displayName === "bashorun dolapo"
          ) {
            navigate("/raggamuffin");
            dispatch({
            type: "IS_ADMIN",
            isAdmin: true,
          });
          } else {
            navigate("/home");
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //

  

  return (
    <div className="login-main">
      <UniversalLogo />
      <div className="name-logo-div">
        <img src={logo} alt="" className="logo" />
        <h1 className="name">
          <b>
            NasieCollections<sup>&trade;</sup>
          </b>
        </h1>
      </div>
      <div className="sign-in-div">
        <Link className="link" to="/home">
          <button className="sign-in-button">
          <img className="shop-icon" src={shop} alt="" />
            <p className="button-text">Continue to Shop</p>
          </button>
        </Link>        
        <button className="sign-in-button" onClick={handleLogin}>
          <img className="google-icon" src={google} alt="" />
          <p className="button-text">Sign In With Google</p>
        </button>
        <p className="disclaimer">
          By signing-in you agree to NASIE COLLECTIONS' Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
      </div>
    </div>
  );
}

export default Login;
