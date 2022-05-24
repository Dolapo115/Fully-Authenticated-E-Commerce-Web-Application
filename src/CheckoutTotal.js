import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './CSS/checkouttotal.css'
import { DataBucket } from "./StateProvider";


function CheckoutTotal(){

  const [{ cart, cartTotal, username }, dispatch] = DataBucket();
  const [message, setMessage] = useState('')

   //THIS FUNCTION ALLOWS THE SUER TO CLEAR THEIR CART
    function clearCart(){
        const confirmation = window.confirm('Clear Cart?')
        if(confirmation){
            dispatch({
            type: 'CLEAR_CART',
            cart: []
        })
        alert('Cart Cleared!')
        }
    }

    //FUNCTION THAT COMPILES THE MESSAGE TO SEND ON WHATSAPP
    function whatsappOrder(e){
      e.preventDefault()
      const arrayOfNames = [];

      cart.map((item)=>{
       arrayOfNames.push(item.name)
       //arrayofNames.lastIndexOf(' ')
       arrayOfNames.join(', ')
      })
      let sendMessage = `Hello Nasie! I am ${username ? username : 'a customer'}, and I would like to order a ${arrayOfNames}`
      console.log(`${arrayOfNames}`)
      console.log(sendMessage)
      setMessage(sendMessage)
    }

    //https://wa.me/2348164394476?text=hello%20nasie

    

    return (
      <div className="checkouttotal-main">
        <h1>Total: {cart.length === 0 ? '#0000' : `#${cartTotal}`}</h1>
        <a href="" className="whatsapp-order-link" onClick = {whatsappOrder}>
          <button className="whatsapp-order-button">Order On Whatsapp</button>
        </a>
        <button className="clear-cart" onClick = {clearCart}>Clear Cart</button>
        <Link to="/home" className="return-from-checkout-to-shop">
          <button>Return To Shop</button>
        </Link>
      </div>
    );

}

export default CheckoutTotal