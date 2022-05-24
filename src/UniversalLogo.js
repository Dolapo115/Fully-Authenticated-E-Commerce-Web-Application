import React from 'react'
import './CSS/universal-logo.css'
import logo from './icons/logo.jpg'

function UniversalLogo(){

    return(
        <div className = 'universal-logo-main'>
          <img src={logo} className="universal-logo" alt="" />
          <p>
            <strong>Nasie</strong>Collections
          </p>
        </div>
    )

}

export default UniversalLogo