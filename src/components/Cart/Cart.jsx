import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CheckOut  from './CheckOut'; 

export const Cart = () => {

    const { cartList, removeItemfromCart, clearCart, totalPrice } = useCartContext()

    const [showForm, setShowForm] = useState(false)

    return (
        <>
            {
                cartList.map(prod =>
                    <div className="container-fluid card-container" style={{ "display": "flex", "justifyContent": "space-evenly"}}>
                        <div style={{ "display": "flex", 'marginTop':'5%'}}>
                            <span className="card-body">
                                <img src={prod.img} style={{ "width": "200px" }} className="card-img card-img-top" alt="foto del prodo" />
                                <br />
                                <h3 className="card-text"> {prod.description}</h3>
                            </span>
                            <span >
                                <div className="card-title" style={{ "textAlign": "center", "minWidth": "150px" }}>
                                    <h2 style={{ "fontWeight": "bold" }}>{prod.name}</h2>
                                </div>

                                <div className="card-text">
                                    <h4> Precio: ${prod.price * prod.cantidad}</h4>
                                    <h4> Cantidad: {prod.cantidad} </h4>
                                    <button className="btn btn-outline-secondary ms-5" onClick={() => removeItemfromCart(prod.id, prod)}> eliminar </button>
                                </div>

                            </span>
                        </div>
                    </div>
                )

            }
            {
                
                cartList.length === 0 ?
                    <div style={{'minHeight':'100vh', 'textAlign':'center', 'marginTop':'15%'}}>
                        <h1 className="cart-empty" > No hay productos en el carrito </h1>
                        <button type="button" className="btn btn-outline-secondary ms-5" style={{"marginTop":"2%"}}><Link style={{ "textDecoration": "none", 'color':'black' }} to={'/productos'} className="card-link">Ir a comprar</Link></button>

                    </div>

                    :
                    <>
                        <div className="card container text-center">
                            <div className="card-body">
                                <h4 className="card-title">Su orden</h4>
                                <p className="card-text">Total: {totalPrice()}  </p>
                                <button type="button" className="btn btn-outline-secondary ms-5" onClick={clearCart}>Eliminar carrito</button>
                                <button type="button" className="btn btn-outline-secondary ms-5"><Link style={{ "textDecoration": "none", 'color':'black'}} to={'/productos'}>Continuar comprando</Link></button>
                                <button type="button" className="btn btn-outline-secondary ms-5" show={showForm} onClick={()=> setShowForm(true)} > finalizar compra </button>
                                <CheckOut show={showForm} onHide={() => setShowForm(false)} />
                            </div>
                        </div>
                    </>

            }
        </>
    )
}
