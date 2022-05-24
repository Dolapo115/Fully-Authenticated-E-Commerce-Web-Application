import React from 'react'
import './CSS/navbar.css'
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCart";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import Search from "@mui/icons-material/Search";
import logo from './icons/logo.jpg'
import { DataBucket } from "./StateProvider";
import { Link } from "react-router-dom";



function Navbar(){

  const [{username, cart, userDp},] = DataBucket();


    return (
      <div className="navbar-main">
        <div className="navbar-name-logo">
          <img src={logo} className="navbar-logo" alt="" />
          <p>
            <strong>Nasie</strong>Collections
          </p>
        </div>
        <div className="search-bar-div">
          <input
            type="text"
            placeholder="Search"
            className="search-bar"
            spellcheck="false"
          />
          <Search className="search-icon" />
        </div>
        <div className="navbar-navigation">
          {/* <div className="navbar-heart">
            <FavoriteIcon />
            <p>
              <span>{wishlist.length}</span>
            </p>
          </div> */}
          <div className="navbar-cart" onChange = {e => e.preventDefault()}>
            <Link to = '/checkout' className = 'checkout-link'>
            <ShoppingCartOutlinedIcon />
            <p>
              Checkout: <span>{cart.length}</span>
            </p>
            </Link>
          </div>
          <Link to = '/' className = 'account-link'>
            <div className="navbar-acct">
            <AccountCircleOutlinedIcon src = {userDp ? `${userDp}` : ''}/>
            <p>{username ? `${username}` : "Sign In"}</p>
          </div>
          </Link>
          
        </div>
      </div>
    );

}

export default Navbar