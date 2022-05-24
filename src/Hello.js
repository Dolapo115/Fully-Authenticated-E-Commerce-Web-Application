import React from 'react'
import './CSS/hello.css'
import UniversalLogo from "./UniversalLogo";
import { DataBucket } from "./StateProvider";
import {Link} from 'react-router-dom'


function Hello(){

    const [
      {
        username
      },
      
    ] = DataBucket();

    return(
        <div className = 'hello-main'>
            <UniversalLogo />
            <div className = 'greeting'>
                <h1>Hello {username ? `${username}` : 'user'}!</h1>
                <p>What would you like to do?</p>
                <div className = 'admin-button-div'>
                    <Link to = '/addproducts'>
                    <button className = 'hello-button create-item'>Create Item</button>
                    </Link>
                    <Link to = '/home'>
                    <button className = 'hello-button admin-login-button'>Login As Customer</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Hello