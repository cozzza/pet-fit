import React from 'react'
import { useState } from 'react';
import cart from '../../assets/cart.svg'

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }
    const decrement = () => {
        if (count > initial) {
            setCount(count - 1)
        }
    }

    const onAdd = () => {
        if (count > 0) alert(`agregaste ${count} productos al carrito`) // agregar prod name
    }

    return (
        <div id="item-count">
            <button className="btn btn-secondary hov" id="decrement" onClick={decrement} disabled={count === initial}> - </button>
            <label style={{ "margin": "20px" }}> {count}</label>
            <button id="increment" className="btn btn-secondary hov" onClick={increment} disabled={count >= stock} > + </button>

            <button id="addItemCart" className="btn btn-secondary hov" onClick={onAdd} disabled={count === initial} style={{"marginLeft":"20px"}}>
                <img src={cart} alt="" width="20px" /> </button>


        </div>

    )
}
export default ItemCount