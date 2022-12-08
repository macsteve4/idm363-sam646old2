import React from 'react'
import './header.css';

import { Link } from "react-router-dom";

function Header() {

  return (
    <header className="header">
    <div className="logo"><Link to="/"><img src="https://mcinerneymedia.com/idm250/wp-content/uploads/2022/11/buldaklogo.png" alt="Buldak Logo" className="logo"></img></Link>
    </div>
    <input className="menu-btn" type="checkbox" id="menu-btn"></input>
    <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
    <ul className="menu">
      <li><Link to="/admin">ADMIN</Link></li>
      <li><Link to="/cart"><img src="https://mcinerneymedia.com/idm250/wp-content/uploads/2022/12/cart2.png" alt="shopping cart" className="cart"></img></Link></li>
    </ul>
  </header>
  )
}

export default Header