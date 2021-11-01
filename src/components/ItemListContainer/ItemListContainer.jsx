import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({saludo}) => {
    return (
        <div className= "disfraces">
        <h1> {saludo} </h1> 
        <ItemCount initial={0} stock={5}/>
        </div>
    )        
}
    export default ItemListContainer;
