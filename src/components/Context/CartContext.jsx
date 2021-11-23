import React, { useContext, createContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItemtoCart = (prod, cantidad)=> {
        let inCartList = cartList.find((cartItem) => cartItem.id === prod.id);

        if (inCartList) {
            inCartList.cantidad += cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...prod, cantidad }])
        }
    }

    const removeItemfromCart = (id) => {
        setCartList(
            cartList.filter((prod) => prod.id !== id))
    }

    const clearCart = () => {
        setCartList([]);
    }
    
    const cartItemCount = () => {
        return cartList.reduce((acum, prod) => acum = acum + prod.cantidad, 0 )
    }

    const totalPrice = () => {
        return cartList.reduce((acum, prod) => acum += (prod.price * prod.cantidad), 0)
    }

    return <CartContext.Provider value = {{ 
            addItemtoCart, 
            removeItemfromCart, 
            clearCart, 
            totalPrice,
            cartItemCount
        }} >
        {children} </CartContext.Provider>
}

export default CartContextProvider;