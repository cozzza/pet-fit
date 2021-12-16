import React from 'react'
import "./Navbar.css"
import CartIcon from "../CartIcon/CartIcon"
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, Container } from 'react-bootstrap';
import petfit from '../../assets/Layer 1.png'

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand ><Link to={'/'}> 
                <img src={petfit} id="logo-petfit" style={{'marginRight':'200px'}} width='150px' alt="" />
                </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link> <Link to={'/'}> <h5> Inicio </h5></Link></Nav.Link>
                        <NavDropdown title="Productos" id="offcanvasNavbarDropdown">
                            <Nav.Link>  </Nav.Link>
                            <NavDropdown.Item ><Link to={'/productos'}> <h6> Todos los productos </h6></Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={'/productos'}> <h6> Perros </h6></Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={'/productos'}> <h6> Gatos </h6></Link></NavDropdown.Item>
                            <NavDropdown.Item ><Link to={'/productos/oferta'}> <h6> Ofertas </h6></Link></NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link><Link to={'/contacto'} ><h5> Contacto</h5></Link> </Nav.Link>
                        <Nav.Link><Link to={'/faQs'} ><h5> FaQs</h5></Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartIcon />
            </Container>

        </Navbar>
    )

}

export default NavBar