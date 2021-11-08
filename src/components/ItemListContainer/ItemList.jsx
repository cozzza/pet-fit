import React from 'react'

const ItemList = (products) => {
    return (
        <>
            {
                products.map(prod => {
                    <div className="prod-card" key={prod.id}>
                        <img src= {prod.img} className="prod-img" alt=""></img>
                        <h3 className="prod-name"> {prod.nombre}</h3>
                        <p class="prod-price"> Precio: ${prod.precio}</p>
                        <button class="btn-agregar"> Agregar al carrito </button>
                    </div>
                }
                )
            }
        </>

    )
}
export default ItemList