import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductosById } from '../../helpers/pediDatos'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

   const [producto, Setproduct] = useState(null)
   
   const {itemId} = useParams()


   useEffect(() => {
    getProductosById (itemId)
        .then(response => {
            Setproduct(response)

        })
        .catch(error => {
            console.error(error)

        })

   },[itemId])
    


return (
    <div>
        <ItemDetail {...producto}/>

    </div>

)
}
export default ItemDetailContainer