import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';

export const Cart = () => {

    const { cartList, cartItemCount, removeItemfromCart, clearCart, totalPrice } = useCartContext()

    console.log(cartList);

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
                                    <button className="btn btn-outline-secondary ms-5" onClick={() => removeItemfromCart(prod.id)}> eliminar </button>
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
                                <button type="button" className="btn btn-outline-secondary ms-5 "><Link style={{ "textDecoration": "none" }} to={'/checkout'} className="card-link">Terminar compra</Link></button>
                                <button type="button" className="btn btn-outline-secondary ms-5 "><Link style={{ "textDecoration": "none" }} to={'/catalogo'} className="card-link">Continuar comprando</Link></button>
                                <h1>  prods: {cartItemCount()} </h1>
                            </div>
                        </div>
                    </>

            }
        </>
    )
}
