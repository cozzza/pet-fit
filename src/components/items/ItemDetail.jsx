import React, { useState }  from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import './itemDetail.css'


const ItemDetail = ({ product }) => {
    const [wasClicked, setWasClicked] = useState(false)

    const onAdd = (cant) =>{
        setWasClicked(true);
        console.log(cant)
    }

    return (
        <div className="container-fluid card-container und" style={{"display": "flex", "justifyContent":"space-evenly"}}>

            <span>
                <img src={product.img} className="card-img card-img-top" alt="foto del producto" />
                <br />
                <h3 className="card-text"> {product.description}</h3>
            </span>

            <span style={{"width": "fit-content", "margin": "50px"}}>
                <div className="card-title" >
                    <h2 style={{"fontWeight":"bold"}}>{product.name}</h2>
                </div>

                <div className="card-body" style={{"textAlign":"center", "minWidth":"150px"}}>
                    <h4 style={{"marginBottom":"200px"}}> Precio: ${product.price}</h4>
                   {wasClicked ? ( 
                       <Link to={'/cart'}> ir al carrito</Link>
                   ): (
                    <ItemCount initial={0} stock={10} onAdd={onAdd}/>
                   )}
                   
                </div>
            </span>
        </div>

    )
}

export default ItemDetail