import React from 'react'
import { useState } from 'react';
import cart from '../../assets/cart.svg'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const op = (esSuma) => {
        esSuma ? setCount(count + 1) : setCount(count - 1)
    }

    // const onAdd = () => {
    //     if (count > 0) alert(`agregaste ${count} productos al carrito`) // agregar prod name
    // }

    return (
        <div id="item-count">
            <button className="btn btn-secondary hov" id="decrement" onClick={() => op(false)} disabled={count === initial}> - </button>
            <label style={{ "margin": "20px" }}> {count}</label>
            <button id="increment" className="btn btn-secondary hov" onClick={() => op(true)} disabled={count >= stock} > + </button>

            <button id="addItemCart" className="btn btn-secondary hov" onClick={() => onAdd(count)} disabled={count === initial} style={{ "marginLeft": "20px" }}>
                <img src={cart} alt="" width="20px" /> </button>

        </div>

    )
}
export default ItemCount