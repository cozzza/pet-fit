import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import './itemListContainer.css'
import { Link, useParams } from 'react-router-dom';
import { getFirestore } from '../Services/getFirestore';
import Loading from '../Loading'

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { animal, categoriaId } = useParams()

    useEffect(() => {
        const dbQuery = getFirestore()

        const getDbQ = animal ? dbQuery.collection('products').where('dog', '==', animal) :
        categoriaId ? dbQuery.collection('products').where('categoriaId', '==', categoriaId) :
        dbQuery.collection('products')

        console.log(getDbQ)

        getDbQ.get()
            .then(data => setProducts(data.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

    }, [animal, categoriaId])

    return (
        <>
            {loading ? <Loading />
                :
                <div className="container">
                    <h1> Nuestros productos</h1>
                    <div style={{ "display": "flex", "justifyContent": "end" }}>

                        <h5>Filtrar | </h5>
                        <Link to={'/productos'} ><h5 style={{ "margin": "0 10px 0 10px", "textDecoration": "none" }}> Ver todo</h5> </Link>
                        <Link to={'/productos/pet/dog'}> <h5 style={{ "textDecoration": "none", "margin": "0 10px 0 10px" }}> Perros </h5></Link>
                        <Link to={'/productos/pet/cat'} ><h5 style={{ "textDecoration": "none", "margin": "0 10px 0 10px" }}> Gatos </h5></Link>
                        <Link to={'/productos/category/oferta'} ><h5 style={{ "textDecoration": "none", "margin": "0 10px 0 10px" }}> SALE </h5> </Link>
                    </div>

                    <div className="container, products-container">
                        <ItemList products={products} />
                    </div>
                </div>

            }
        </>
    )
}

export default ItemListContainer
