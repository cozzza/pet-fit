import React from 'react'
import { useState } from 'react';
import "./itemCount.css"

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const sumItem = () => {
        if(count < stock){
            setCount(count + 1)
        } 
    }
    const resItem = () => {
        if(count > initial){
            setCount(count - 1)
        }
    }

    const onAdd = () => {
        if (count > 0) alert(`agregaste ${count} productos al carrito`) // agregar prod name
    }

    return (
        <div id="item-count">
            <button id="masItem" className="btn btn-secondary hov" onClick={sumItem} disabled={count >= stock} > + </button>
            <label style={{"margin":"20px"}}> {count}</label>
            <button className="btn btn-secondary hov" id="menosItem" onClick={resItem} disabled={count == initial}> - </button>

            <div id="addItemCart">
                <button className="btn btn-secondary hov" onClick={onAdd} disabled={count == initial}> Agregar al carrito </button>
            </div>

        </div>

    )
}
export default ItemCount