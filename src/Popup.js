import React from 'react'
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteIcon from "@mui/icons-material/FavoriteBorder";
import './CSS/popup.css'
import wearable1 from "./images/wearable1.jpg";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


function Popup(){

    return (
      <div className="popup-main">
        <div className="cancel-popup"></div>
        <img className="popup-image" src = {wearable1}/>
        <div className="popup-desc-div">
          <h1 className="popup-title">Name Of Product</h1>
          <p className="popup-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit
            cupiditate atque sed harum aut culpa distinctio, accusamus at
            dolores quod magni consectetur minima hic, ut eum nemo eaque dicta.
          </p>
          <div className="popup-icons">
            <ShoppingCartOutlinedIcon className="popup-cart" />
            <FavoriteIcon className="popup-fave" />
          </div>
        </div>
      </div>
    );

}

export default Popup;