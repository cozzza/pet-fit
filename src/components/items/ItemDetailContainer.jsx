import { getProdDetail } from "../Services/getFetch";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ()=>{
    const [prod, setProd] = useState({})

    useEffect(() => {
        getProdDetail
        .then(res => {        
            setProd(res[0])
        })    
        .catch(err => console.log(err))
        .finally(()=> console.log(false))       
    },[]) 
      
    console.log(prod);

    return (
        <>
            <div style={{"height":"100vh", "margin-top":"50px"}}>
                <ItemDetail product={prod} />
            </div>
        </>
    )
}

export default ItemDetailContainer

