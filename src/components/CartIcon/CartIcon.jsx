import { CartCount } from '../CartCount/CartCount';
import cart from '../../assets/cart.svg'

const CartIcon = () => {
    
    return (
        <div style={{"display": "flex" , "paddingTop":"5px" , "marginRight": "10px"}}>
        <img src= {cart} alt="icono de carrito de compras" height="32px"/>

        <CartCount/>
        </div>
    )
}
    export default CartIcon;