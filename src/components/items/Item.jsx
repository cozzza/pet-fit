import React from 'react'
import { Link } from 'react-router-dom'
import heart from '../../assets/heart.svg'
import heartFill from '../../assets/heart-fill.svg'

export const Item = ({ prod }) => {
    return (

        <Link to={`/item/${prod.id}`} > 
        <div className="card, card-container" style={{ "width": "300px","textAlign": "center","margin": "10px"}} >
            <div className="card-img card-img-top" style={{"backgroundColor":"white", "border": "dotted grey 0.5px", 'minHeight':'300px'}}> 
                {/* <img src={heart} alt="corazon de favorito" height="32px" onClick={addToFavorite()}/> */}
                <img src={prod.img} alt="" style={{ "width": "200px"}} />
            </div> 

            <div className="card-body">
                <h3 className="card-title"> {prod.name}</h3>
                <p className="card-text"> Precio: ${prod.price}</p>
            </div>
        </div>
        </Link>
    )
}

export default Item
