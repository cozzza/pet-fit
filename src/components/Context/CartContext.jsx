import { useContext, createContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItemtoCart = (product)=> {
        const inCartList = cartList.find((cartItem) => cartItem.id === product.id)

        if (inCartList) {
            console.log('is in cart')
            inCartList.cantidad += product.cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...product}])
        }
    }
// esto 
    const removeItemfromCart = (id) => {
        setCartList(
            cartList.filter((product) => product.id !== id))
    }
 //esto
    const clearCart = () => {
        setCartList([]);
    }
    
    const cartItemCount = () => {
        return cartList.reduce((acum, product) => parseInt(acum = acum + product.cant) , 0 )
    }

    const totalPrice = () => {
        return cartList.reduce((acum, product) => acum += (product.price * product.cantidad), 0)
    }

    return (
       <>
       <CartContext.Provider value = {{
            addItemtoCart, 
            removeItemfromCart, 
            clearCart, 
            totalPrice,
            cartItemCount, 
            cartList
       }}>
        {children} 
        </CartContext.Provider>
    </>
    )
}

export default CartContextProvider;