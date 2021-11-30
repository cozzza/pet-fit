import { useContext, createContext, useState } from 'react'

const CartContext = createContext([]);

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    const [cantItems, setcantItems] = useState(0);

    const addItemtoCart = (product) => {
        const inCartList = cartList.find((cartItem) => cartItem.id === product.id)

        if (inCartList) {
            inCartList.cantidad += product.cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, { ...product }])
        }

        setcantItems(cantItems + product.cantidad)

    }

    const removeItemfromCart = (id, product) => {
        setCartList(
            cartList.filter((product) => product.id !== id))

        setcantItems(cantItems - product.cantidad);
    }

    const clearCart = () => {
        setCartList([]);
        setcantItems(0);
    }

    const totalPrice = () => {
        return cartList.reduce((acum, product) => acum += (product.price * product.cantidad), 0)
    }

    return (
        <>
            <CartContext.Provider value={{
                addItemtoCart,
                removeItemfromCart,
                clearCart,
                totalPrice,
                cantItems,
                cartList
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider;