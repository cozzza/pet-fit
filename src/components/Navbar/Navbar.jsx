import React from 'react'
import "./Navbar.css"
import CartIcon from "../CartIcon/CartIcon"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="nav-items">
            <Link to= {'/'}><h1> Pet-fit</h1></Link>

            <Link to= {'/catalogo'} ><h3>Catálogo</h3></Link>

            <Link to= "#" ><h3>Nosotros</h3></Link> 
            
            <CartIcon/>
           
        </nav>
    )
}

export default NavBar