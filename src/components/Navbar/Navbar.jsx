import React from 'react'
import "./Navbar.css"
import CartIcon from "../CartIcon/CartIcon"

const NavBar = () => {
    return (
        <nav className="nav-items">
            <a href="#" ><h1> Pet-fit</h1></a>
            <a href="#" ><h3>Quienes somos</h3></a> 
            <a href="#" ><h3>Productos</h3></a>
            <a href="#" ><h3>Ofertas</h3></a>
            
            <div id="user-section"> 
            <h3 id="login-btn"> Log in </h3>

            <CartIcon/>
            </div>
        </nav>
    )
}

export default NavBar