import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import { CartEmpty } from './CartEmpty'

export const Cart = () => {
    const { addItem, removeItem, clearCart, itemsPrice, totalPrice } = useCartContext();
    console.log(cart);

    return (
        <div>
            {cart.length === 0 ? <CartEmpty h1="no hay productos en su carrito" /> :
            
            cart.map(item =>
                <div> 
                    
                </div>)
            }
        </div>
    )

}