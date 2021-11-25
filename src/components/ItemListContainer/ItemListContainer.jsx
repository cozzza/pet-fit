import React from 'react'
import ItemList from './ItemList'
import { getFetch } from '../Services/getFetch';
import { useEffect, useState } from 'react';
import './itemListContainer.css'
import { Link, useParams } from 'react-router-dom';

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams()
    
    useEffect(() => {

        if (id) {
            getFetch
                .then(res => {setProducts(res.filter(prod => prod.categoria === id)) })
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            getFetch
                .then(res => setProducts(res))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [id])

    return (
        <>
            {loading ? <h2> Cargando...</h2>
                :
                <div className="container">
                    <h1> Catálogo </h1>
                    <div style={{ "display": "flex", "justifyContent": "end" }}>
                        <h5>Filtrar | </h5>

                        <Link to={'/catalogo'} ><h5 style={{ "margin": "0 10px 0 10px", "textDecoration":"none"}} > Todos los productos</h5> </Link>
                        <Link to={'/categoria/oferta'} ><h5 style={{ "textDecoration":"none", "margin": "0 10px 0 10px" }}> Ofertas </h5> </Link>
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
