import cart from '../../assets/cart.svg'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';


const CartIcon = () => {

    const { cantItems, cartList } = useCartContext();

    console.log(cantItems)

    return (

        <>
            <Link to={'/cart'}>
                <div style={{ "display": "flex", "paddingTop": "5px", "marginRight": "10px" }}>
                    <img src={cart} alt="icono de carrito de compras" height="32px" />
                    {

                        cartList.length === 0 ? null
                        :
                            <h3> {cantItems}</h3>
                    }
                </div>
            </Link>


        </>

    )
};
export default CartIcon