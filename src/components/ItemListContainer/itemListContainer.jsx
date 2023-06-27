import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { pediDatos, getProductosByMarca } from '../../helpers/pediDatos'
import { useParams } from 'react-router-dom'





const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    
    const {marcaId} = useParams()


    useEffect(() => {
        const asyncFunc = marcaId ? getProductosByMarca : pediDatos

        asyncFunc(marcaId)
            .then(response => {
                setProductos(response)
            })
            .catch(error =>{
                console.error(error)
                })
    },[marcaId])





    return(

        <div className="list_container">

        <h2>Sentite Fresco </h2>
        <ItemList productos={productos}/>
        </div>

        
    )

}

export default ItemListContainer