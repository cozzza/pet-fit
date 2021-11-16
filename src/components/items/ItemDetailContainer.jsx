import { getFetch } from "../Services/getFetch";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [prod, setProd] = useState({})

    const {id} = useParams()

    useEffect(() => {
        getFetch
        .then(res => {        
            setProd(res.find(element=> element.id === id))
        })    
        .catch(err => console.log(err))
        .finally(()=> console.log(false))       
    },[id]) 

    
      
    console.log(prod);

    return (
        <>
            <div style={{"height":"100vh", "marginTop":"50px"}}>
                <ItemDetail product= {prod} />
            </div>
        </>
    )
}

export default ItemDetailContainer

