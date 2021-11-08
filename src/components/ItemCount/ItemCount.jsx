import React from 'react'
import { useState } from 'react';
import "./itemCount.css"

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const sumItem = () => {
        count < stock ? setCount(count + 1) : alert('No hay mas productos disponibles en stock')
    }
    const resItem = () => {
        count > initial ? setCount(count - 1) : alert('Seleccione la cantidad de productos deseada')
    }

    const onAdd = () => {
        if (count >= 0) alert(`agregaste ${count} productos al carrito`) // agregar prod name
    }

    return (
        <div id="item-count">
            <button id="masItem" className="btn btn-secondary hov" onClick={sumItem} disabled={count > stock} > + </button>
            <label style={{"margin":"20px"}}> {count}</label>
            <button className="btn btn-secondary hov" id="menosItem" onClick={resItem}> - </button>

            <div id="addItemCart">
                <button className="btn btn-secondary hov" onClick={onAdd}> Agregar al carrito </button>
            </div>

        </div>

    )
}
export default ItemCount