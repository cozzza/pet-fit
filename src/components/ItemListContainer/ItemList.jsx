import React from 'react'
import Item from '../items/Item.jsx'


function ItemList({products}) {

    
    return (             
        products.map(prod => <Item key={prod.id} prod={prod} /> )   
    )
}

export default ItemList