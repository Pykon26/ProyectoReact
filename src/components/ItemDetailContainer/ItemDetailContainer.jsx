import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase/config'


const ItemDetailContainer = () => {

   const [producto, Setproduct] = useState(null)
   const [loading, setLoading ] = useState(true)

   const {itemId} = useParams()


   useEffect(() => {
    setLoading(true)

        // 1.- armar la referencia
        const itemRef = doc(db, "productos", itemId)
        // 2.- solicitar el doc
        getDoc(itemRef)
            .then((doc) => {
                Setproduct({
                    ...doc.data(),
                    id: doc.id
                })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

   },[itemId])
    


return (
    <div>
        {
            loading
            ? <h2>Cargando...</h2>
            : <ItemDetail {...producto}/>
        }
        

    </div>

)
}
export default ItemDetailContainer