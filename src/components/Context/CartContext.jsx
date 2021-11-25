import React, { useContext, createContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItemtoCart = (prod, cant)=> {
        let inCartList = cartList.find((cartItem) => cartItem.id === prod.id);

        if (inCartList) {
            inCartList.cant += cant
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...prod, cant }])
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
        return cartList.reduce((acum, prod) => acum = acum + prod.cant, 0 )
    }

    const totalPrice = () => {
        return cartList.reduce((acum, prod) => acum += (prod.price * prod.cant), 0)
    }

    return <CartContext.Provider value = {
        { 
            addItemtoCart, 
            removeItemfromCart, 
            clearCart, 
            totalPrice,
            cartItemCount, 
            cartList
        }}>
        {children} 
        </CartContext.Provider>
}

export default CartContextProvider;