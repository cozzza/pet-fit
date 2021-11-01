import React from 'react'
import {useState} from 'react';
import ItemListContainer from '../ItemListContainer/ItemListContainer';
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {
    const [count, setCount] = useState(initial);
  
    const sumItem = ()=> {
       count < stock ?  setCount(count + 1): alert('No hay mas productos disponibles en stock') 
    }
    const resItem = ()=> {
        count > initial ? setCount (count - 1) : alert('Seleccione la cantidad de productos deseada')
    }

    const onAdd = ()=>{
       if(count >= 0) alert(`agregaste ${count} productos al carrito`)
    }

    return (
        <div class= "product-card">

            <div id="item-count">
            <button id="masItem" class="btn" onClick={sumItem} disabled = {count > stock} > + </button>
            <label> cantidad: {count}</label>
            <button class= "btn" id="menosItem" onClick={resItem}> - </button>
            <button class = "btn" id="addItemCart" onClick={onAdd}> Agregar al carrito </button>
            </div>
        </div>
      
)}
export default ItemCount