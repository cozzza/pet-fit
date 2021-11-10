import { getProdDetail } from "../Services/getFetch";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail.jsx";

const ItemDetailContainer = ()=>{
    const [prod, setProd] = useState({})

    useEffect(() => {
        getProdDetail
        .then(res => {        
            console.log('llamada a api') // alguna accion con la respuesta  
            setProd(res)
        })    
        .catch(err => console.log(err))
        .finally(()=> console.log(false))       
    },[]) 
      
    console.log(prod);

    return (
        <>
            <div className='border border-3 border-secondary'>
                <ItemDetail product={prod} />
            </div>
        </>
    )
}

export default ItemDetailContainer

