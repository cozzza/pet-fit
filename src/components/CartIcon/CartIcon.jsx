import cart from '../../assets/cart.svg'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';


const CartIcon = () => {

    const { cartItemCount } = useCartContext();

    console.log (cartItemCount())

    return (

        <>
            <Link to={'/cart'}>
                <div style={{ "display": "flex", "paddingTop": "5px", "marginRight": "10px" }}>
                    <img src={cart} alt="icono de carrito de compras" height="32px" />
                </div>
            </Link>
            
            <span> {cartItemCount()} </span>
        </>

    )
};
export default CartIcon