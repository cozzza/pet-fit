import React from 'react'
import { Link } from 'react-router-dom'
import cat from '../../assets/cat.png'
import dog from '../../assets/dog.png'
import './Index.css'

const Index = ({ saludo }) => {
    return (
        <div className='container-fluid'>
            <div id='saludo'><h1> {saludo}</h1></div>

            <div id='menu' className='container-fluid'>
                <div>
                    <Link to={'/productos/dog'}>
                        <img src={dog} alt=''></img> <br /> <br />
                        <h2> Perros</h2>
                    </Link>
                </div>
                <div>
                    <Link to={'/productos/cat'}>
                        <img src={cat} alt=''></img>
                        <h2>Gatos</h2>
                    </Link>
                </div>
                <div id='sale'>
                <Link to={'/productos/category/oferta'} >
                <h1> SALE </h1>
                </Link>
                </div>

            </div>

        </div>
    )
}
export default Index
