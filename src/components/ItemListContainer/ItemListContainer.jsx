import React from 'react'
import ItemList from './ItemList'
import { useEffect, useState } from 'react';
import './itemListContainer.css'
import { Link, useParams } from 'react-router-dom';
import { getFirestore } from '../Services/getFirestore';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoriaId } = useParams()

    console.log({ categoriaId })

    useEffect(() => {
        const dbQuery = getFirestore()

        const getDbQ = categoriaId ? dbQuery.collection('products').where('categoriaId', '==', categoriaId) : dbQuery.collection('products')

        getDbQ.get()
            .then(data => setProducts(data.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))


    }, [categoriaId])

    return (
        <>
            {loading ? <h2> Cargando...</h2>
                :
                <div className="container">
                    <h1> Catálogo </h1>
                    <div style={{ "display": "flex", "justifyContent": "end" }}>
                        <h5>Filtrar | </h5>

                        <Link to={'/catalogo'} ><h5 style={{ "margin": "0 10px 0 10px", "textDecoration": "none" }} > Todos los productos</h5> </Link>
                        <Link to={'/catalogo/oferta'} ><h5 style={{ "textDecoration": "none", "margin": "0 10px 0 10px" }}> Ofertas </h5> </Link>
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
