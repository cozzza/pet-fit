import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../Services/getFirestore";
import Loading from "../Loading";

const ItemDetailContainer = () => {
    const [prod, setProd] = useState({})
    const [loading, setLoading] = useState(true);
    const {id} = useParams()

    useEffect(() => {
        const dbQuery = getFirestore()

       dbQuery.collection('products').doc(id).get()
        .then(res => {setProd({id: res.id, ...res.data()})
        })    
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))      
    },[id]) 

    return (
        <>

        { loading ? <Loading/> : 
            <div style={{"height":"100vh", "marginTop":"50px"}}>
                <ItemDetail product= {prod} />
            </div>
        }

        </>
    )
}

export default ItemDetailContainer

