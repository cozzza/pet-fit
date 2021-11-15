import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

export const Item = ({ prod }) => {
    return (

        // <Link to={`/item/${prod.id}`} > 
        <div className="card, card-container" style={{ "width": "300px","textAlign": "center","border": "solid grey 1px","margin": "10px","backgroundColor":"#9077aa","borderRadius":"10px"}} onclick key={prod.id}>
            <div className="card-img card-img-top" style={{"backgroundColor":"white","borderRadius":"10px"}}> 
                <img src={prod.img} alt="" style={{ "width": "200px"}} />
            </div> 

            <div className="card-body">
                <h3 className="card-title"> {prod.name}</h3>
                <p className="card-text"> Precio: ${prod.price}</p>

                <ItemCount initial={0} stock={5} />
            </div>
        </div>
        // </Link>
        

    )
}

export default Item
