import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { pediDatos } from '../../helpers/pediDatos'





const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        pediDatos()
            .then(response =>{
                setProductos(response)
            })
            .catch(error =>{
                console.error(error)
            })

    },[])




    return(

        <div className="list_container">

        <h2>Sentite Fresco </h2>
        <ItemList productos={productos}/>
        </div>

        
    )

}

export default ItemListContainer