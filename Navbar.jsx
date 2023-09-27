import React from 'react'
import logo from "./logo1.png"
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <header>
        
        <div className="logo">
        <img className = "headlogo" src={logo} alt="" />
        </div>
        <h1 className='Event'>Event Alerto</h1>
               <ul className='list'>
                <li><Link to="./">Home</Link></li>
                <li><Link to="./About">About</Link></li>
                <li><Link to="./signup">Sign Up</Link></li>
                <li><Link to="Contact">Contact</Link></li>
            </ul>
    </header>
    </>
  )
}
export default Navbar
