import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {

    // getItem = async () => {

    // }
    return (
        <div className="container-fluid" style={{"display": "flex", "justifyContent":"space-evenly"}}>

            <span>
                <img src={product.img} className="card-img card-img-top" alt="foto del producto" />
                <br />
                <h3 className="card-text"> {product.description}</h3>
            </span>

            <span style={{"width": "fit-content", "margin": "50px"}}>
                <div className="card-title" >
                    <h2 style={{"fontWeight":"bold"}}>{product.name}</h2>
                </div>

                <div className="card-body" style={{"textAlign":"center"}}>
                    <h4 style={{"marginBottom":"200px"}}> Precio: ${product.price}</h4>
                    <ItemCount initial={0} stock={5} />
                </div>
            </span>





        </div>
    )
}

export default ItemDetail