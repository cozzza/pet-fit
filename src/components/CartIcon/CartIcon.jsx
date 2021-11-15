import { CartCount } from '../CartCount/CartCount';

const CartIcon = () => {
    
    return (
        <div style={{"display": "flex" , "paddingTop":"5px" , "marginRight": "10px"}}>
        <img src= '/assets/cart.svg' alt="icono de carrito de compras" height="32px"/>

        <CartCount/>
        </div>
    )
}
    export default CartIcon;