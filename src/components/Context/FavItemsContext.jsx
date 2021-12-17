import React from 'react'
import { useContext, createContext, useState } from 'react'

const FavItemsContext = () => {

    const FavItemsContext = createContext([]);

    export const UseFavItemsContext = () => {
        return useContext(FavItemsContext)
    }

    const FavItemsContextProvider = ({ children }) => {
        const [favList, setFavList] = useState([])

        const addFavItem = (product) => {
            const inCartList = favList.find((favItem) => favItem.id === product.id)

            setFavList([...favList, { ...product }])
        }

        const removeFavItem = (id, product) => {
            setFavList(
                favList.filter((product) => product.id !== id))

        }
    }

    return (

        <>
            <FavItemsContext.Provider value={{
                addFavItem,
                removeFavItem,
            }}>
                {children}
            </FavItemsContext.Provider>
        </>

    )
}

export default FavItemsContext;