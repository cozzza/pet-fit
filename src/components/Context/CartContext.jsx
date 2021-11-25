import { useContext, createContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItemtoCart = (product, cant)=> {
        let inCartList = cartList.find((cartItem) => cartItem.id === product.id);

        if (inCartList) {
            console.log('is in cart')
            inCartList.cantidad += cant
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...product, cant }])
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
        return cartList.reduce((acum, product) => acum = acum + product.cant, 0 )
    }

    const totalPrice = () => {
        return cartList.reduce((acum, product) => acum += (product.price * product.cant), 0)
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