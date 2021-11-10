import React from 'react'

const ItemDetail = ({ product }) => {

    return (
        <div>
            <div>
                <label>{product.name}</label>
            </div>
            <div>
                <img src={product.img} className="w-25" alt="foto del producto" />
                <br />
                <label>{product.description}</label>
            </div>
            <div>
                <label>{product.price}</label>
            </div>
        </div>
    )
}

export default ItemDetail