import React, { useContext, createContext, useState } from 'react'

export const CartContext = createContext();

export const useCartContext = useContext(CartContext);

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, cant) => {
     
        if (isInCart(item)) {
            let newCart = cart;
            newCart.forEach(cartItem => {
                if(cartItem.id === item.id) {
                    cartItem.cant += cant;
                }
            } );
            setCart(newCart)
        } 
        else {
            setCart( [...cart, {...item, cant} ] );
        }
    };

    const removeItem = (id) => {
        setCart(
            cart.filter((item) => item.id !== id));
    }

    const clearCart = () => {
        setCart([]);
    }

    const isInCart = (item) => {
        return cart.some(cartItem => cartItem.id)
    }

    const itemsPrice = () => {
        return cart.reduce((acum, item) => acum = acum + item.price, 0)

    }   

    const totalPrice = () => {
        return cartList.reduce((acum, item) => (acum += item.price * item.cantidad), 0)
    }

    return <CartContext.Provider value = {{ 
            addItem, 
            removeItem, 
            clearCart, 
            itemsPrice, 
            totalPrice
        }}>
        {children} </CartContext.Provider>
}

cart = [ {item, cant}, {}, {}]

export default CartContextProvider;