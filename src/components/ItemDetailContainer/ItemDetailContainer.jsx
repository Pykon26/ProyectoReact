import { useState, useEffect } from "react"
import ItemDetail from '../ItemDetail/ItemDetail'
import { getProductosById } from '../../helpers/pediDatos'

const ItemDetailContainer = () => {

   const [producto, Setproduct] = useState(null)
   
   useEffect(() => {
    getProductosById (1)
        .then(response => {
            Setproduct(response)

        })
        .catch(error => {
            console.error(error)

        })

   },[])
    


return (
    <div>
        <ItemDetail {...producto}/>

    </div>

)
}
export default ItemDetailContainer