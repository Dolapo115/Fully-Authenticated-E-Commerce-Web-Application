import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './CSS/checkouttotal.css'
import { DataBucket } from "./StateProvider";
import whatsappLogo from './icons/whatsapp.png'

function CheckoutTotal(){

  const [{ cart, cartTotal, username }, dispatch] = DataBucket();
  const [message, setMessage] = useState('')
  const [link, setLink] = useState('')

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
       arrayOfNames.join(', and')
      })
      let _sendMessage = `Hello Nasie! I am ${username ? username : 'a customer'}, and I would like to order a ${arrayOfNames}`
      //console.log(`${arrayOfNames}`)
      //console.log(sendMessage)
      let sendMessage = _sendMessage.replace(/ /g, '%20')
      setMessage(sendMessage)
      console.log(message)
      setLink(`https://wa.me/2348180593602?text=${message}. As soon as you can deliver.`);
      window.open(link, "_blank", "width=300,height=500");
    }


    

    return (
      <div className="checkouttotal-main">
        <h1>Total: {cart.length === 0 ? '#0000' : `#${cartTotal}`}</h1>
        <a href={''} target = '_blank' className="whatsapp-order-link" onClick = {whatsappOrder}>
          
          <button className="whatsapp-order-button"><img alt = '' className = 'whatsapp-logo' src = {whatsappLogo}/>Order On Whatsapp</button>
        </a>
        <button className="clear-cart" onClick = {clearCart}>Clear Cart</button>
        <Link to="/home" className="return-from-checkout-to-shop">
          <button>Return To Shop</button>
        </Link>
      </div>
    );

}

export default CheckoutTotal