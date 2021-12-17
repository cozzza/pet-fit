import React from 'react'
import heart from '../../assets/heart.svg'
import heartFill from '../../assets/heart-fill.svg'

export const Favorites = () => {
    return (
        <>
            <div style={{ "display": "flex", "paddingTop": "5px", "marginRight": "10px" }}>
                {

// crear favItems array 
                    favItems.length === 0 ? <img src={heart} alt="corazon de favorito" height="32px" />
                        :
                        <img src={heartFill} alt="corazon de favorito" height="32px" />
                }
            </div>

        </>
    )
}
