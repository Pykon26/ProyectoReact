import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../Firebase/config'
import Loader from '../Loader/Loader'



const ItemListContainer = () => {
    
    const [loading, setLoading] = useState(true)
    
    const {marcaId} = useParams()
    
    const [productos, setProductos] = useState([])


    useEffect(() => {

        setLoading(true)

        // 1.- armar una referencia (sync)
        const productosRef = collection(db, "productos")
        const q = marcaId 
                    ? query(productosRef, where("marca", "==", marcaId))
                    : productosRef
        // 2.- peticion de esa referencia (async)
        getDocs(q)
            .then((resp) => {
                const productos = resp.docs.map((doc) => ({...doc.data(), id: doc.id}))
                setProductos(productos)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))


    }, [marcaId])




    return(

        <div className="list_container">

        <h2>FrescosClub</h2>
        <div className='loader-container'>
        {
                loading
                    ?<Loader />
                    : <ItemList productos={productos}/>
            }
        </div>

        </div>

        
    )

}

export default ItemListContainer