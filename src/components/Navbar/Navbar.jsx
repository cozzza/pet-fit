import React from 'react'

const NavBar = () => {
    return (
        <nav className="nav-items">
            <a href="#" ><h1> Pet-fit</h1></a>
            <a href="#" > <h3>Quienes somos</h3> </a> 
            <a href="#" > <h3>Productos</h3> </a>
            <a href="#" > <h3>Ofertas</h3> </a>
            
            <div id="user-section"> 
            <h3 id="login-btn"> Log in </h3>
            <a id= "carrito" href="" > <h3>Carrito</h3> </a>
            </div>
            
        </nav>
    )
}

export default NavBar