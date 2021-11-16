import { CartCount } from '../CartCount/CartCount';
import cart from '../../assets/cart.svg'
import { Link } from 'react-router-dom';

const CartIcon = () => {
    
    return (
        <Link to={'/cart'}>
        <div style={{"display": "flex" , "paddingTop":"5px" , "marginRight": "10px"}}>
        <img src= {cart} alt="icono de carrito de compras" height="32px"/>

        <CartCount/>
        </div>
        </Link>
    )
}
    export default CartIcon;