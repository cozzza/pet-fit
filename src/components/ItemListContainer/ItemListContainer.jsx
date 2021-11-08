import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList';
import { getFetch } from '../Services/getFetch';
import { useEffect , useState } from 'react';

function ItemListContainer ({ saludo }) {
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
    <div className="disfraces">
        <h1> {saludo} </h1>
        <ItemCount initial={0} stock={5} />
        <ItemList products={products}/>
    </div>
)  }

export default ItemListContainer;
