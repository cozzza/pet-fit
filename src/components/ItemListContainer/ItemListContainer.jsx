import React from 'react'
import ItemList from '../items/ItemList'
import { getFetch } from '../Services/getFetch';
import { useEffect , useState } from 'react';
import './itemListContainer.css'

function ItemListContainer ({ catalog }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then(res => {
                setProducts(res)
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
}, [])


return (
    <div className="container">
        <h1> {catalog} </h1>
        <div className="container, products-container">
        <ItemList products={products}/>
        </div>
    </div>
)  }

export default ItemListContainer;
