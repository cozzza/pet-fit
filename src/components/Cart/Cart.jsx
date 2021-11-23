import { useCartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom';

export const Cart = () => {

    const { cartList, removeItemfromCart, clearCart, totalPrice } = useCartContext()

    console.log(cartList);

    return (
        <>
            {
                cartList.map(item =>
                    <div>
                        <div>
                            <img src={item.img} className="card-img card-img-top" alt="foto del itemo" />
                            <br />
                            <h3 className="card-text"> {item.description}</h3>
                        </div>
                        <div className="card-title" >
                            <h2 style={{ "fontWeight": "bold" }}>{item.name}</h2>
                        </div>
                        <div className="card-body" style={{ "textAlign": "center", "minWidth": "150px" }}>
                            <h4 style={{ "marginBottom": "200px" }}> Precio: ${item.price}</h4>
                            <h4> Cantidad: ${item.cantidad} </h4>
                        </div>
                        <i className="bi bi-trash-fill text-dark deletBtn fs-3" onClick={() => removeItemfromCart(item.id)}></i>

                    </div>
                )
            }
            {
                cartList.length === 0 ? null :
                    <>
                        <button type="button" className="btn btn-outline-secondary ms-5 " onClick={clearCart}>Eliminar carrito</button>

                        <div className="card container vw-100 mt-3 mb-5 text-center ">
                            <div className="card-body">
                                <h4 className="card-title">Su orden</h4>
                                <p className="card-text">Total: {totalPrice()}  </p>
                                <Link to='/checkout' className="card-link">Terminar compra</Link>
                                <Link to='/catalog' className="card-link">Seguir comprando</Link>
                            </div>
                        </div>
                    </>

            }
        </>
    )
}
