import React from 'react'
import { Link } from 'react-router-dom';
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import "./Footer.css"

const Footer = () => {
    return (
        <div id="footer" className='container-fluid'>

            <div id="footer-info" className='container-fluid'>
                <div>
                    <Link to={'/'}> <h6> Inicio </h6></Link>
                    <Link to={'/productos'}> <h6> Productos </h6></Link>
                    <Link to={'/contacto'} ><h6> Contacto</h6></Link>
                    <Link to={'/faQs'} ><h6> Faqs</h6></Link>
                </div>
                <div>
                    <h5> CONTACTO</h5>

                    <h6> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                        petfit_store@gmail.com
                    </h6>

                    <h6> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                        Thames 1526, CABA
                    </h6>
                </div>
                <div>
                    <h5> FOLLOW </h5>
                    <div className='social-media' style={{ 'display': 'flex', 'justifyContent': 'space-evenly' }}>
                        <a href='https://www.facebook.com/'> <img width='30px' src={facebook} alt="" /></a>
                        <a href='https://www.instagram.com/'><img width='30px' src={instagram} alt="" /> </a>
                        <a href='https://twitter.com/'><img width='30px' src={twitter} alt="" /> </a>
                    </div>
                </div>

                <div>
                    <h2>PETFIT</h2>
                </div>
            </div>

            <p id="copyright"> © Todos los derechos reservados. Cozza 2021</p>
        </div>

    )
}

export default Footer;