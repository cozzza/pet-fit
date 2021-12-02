import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getFirestore } from '../Services/getFirestore';

export const Cart = () => {

    const { cartList, removeItemfromCart, clearCart, totalPrice } = useCartContext()

    const [idOrder, setIdOrder] = useState('')

    const [formData, setFormData] = useState({
        name: '' ,
        phone: '' ,
        email: ''
    })

    const generateOrder = (e) => {
      
        e.preventDefault()
        const order = {}

        // order.date = firebase.firestore.Timestamp.fromDate(new Date());
       
        order.buyer = { name: 'juan', email: 'bla@gmail.com', phone: '111175897' }
        order.total = totalPrice();

        order.items = cartList.map(cartItem => {
            const id = cartItem.id
            const name = cartItem.name
            const price = cartItem.price * cartItem.cantidad

            return { id, name, price }
        })

        console.log(order)

        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(order)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
    // ('su orden de compra es ')
    return (
        <>
            {
                cartList.map(prod =>
                    <div className="container-fluid card-container" style={{ "display": "flex", "justifyContent": "space-evenly" }}>
                        <div style={{ "display": "flex" }}>
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
                    <div>
                        <h1 className="cart-empty"> No hay productos en el carrito </h1>
                        <button type="button" className="btn btn-outline-secondary ms-5 "><Link style={{ "textDecoration": "none" }} to={'/catalogo'} className="card-link">Ir a comprar</Link></button>

                    </div>

                    :
                    <>
                        <div className="card container text-center">
                            <div className="card-body">
                                <h4 className="card-title">Su orden</h4>
                                <p className="card-text">Total: {totalPrice()}  </p>
                                <button type="button" className="btn btn-outline-secondary ms-5 " onClick={clearCart}>Eliminar carrito</button>
                                <button type="button" className="btn btn-outline-secondary ms-5 " onClick='' ><Link style={{ "textDecoration": "none" }} to={'/checkout'} className="card-link">Terminar compra</Link></button>
                                <button type="button" className="btn btn-outline-secondary ms-5 "><Link style={{ "textDecoration": "none" }} to={'/catalogo'} className="card-link">Continuar comprando</Link></button>
                            </div>
                        </div>
                    </>

            }
        </>
    )
}
