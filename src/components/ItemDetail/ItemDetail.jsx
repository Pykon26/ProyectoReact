    import ItemCount from '../ItemCount/ItemCount'
    import './ItemDetail.scss'
    import { Link } from "react-router-dom"
    import { useContext, useState } from 'react'
    import { CartContext } from '../../context/CartContext'

    const ItemDetail = ({id, nombre, precio, marca, descripcion, img, stock}) => {
        
        const [quantityAdded, setQuantityAdded] = useState(0)

        const { addItem }  = useContext(CartContext)

        const handleOnAdd = (quantity) => {
            setQuantityAdded(quantity)

            const item = {
                id,nombre,precio,img
            }

            addItem(item,quantity)
        }
        
        return (
            <div className='container-detail-item'>
                <h2>
                    {nombre}
                </h2>
                <hr />
                <picture>
                    <img src={img} alt={nombre} />
                </picture>
                <div className='info-container'>
                <section>
                    <p className="Info">
                    <span>Marca:</span> {marca}
                    </p>
                    <p className="Info">
                    <span>Descripción:</span> {descripcion}
                    </p>
                    <p className="Info">
                        <span>Precio:</span> ${precio}
                    </p>
                </section>
                <footer>
                    {
                        quantityAdded > 0 ? (
                            <>
                            <Link to='/' className='Option'>
                              <button className='btn-seguir-comprando'>Seguir Comprando</button>
                            </Link>
                            <Link to='/cart' className='Option'>
                              <button className='btn-terminar-compra'>Terminar Compra</button>
                            </Link>
                          </>
                        ) : (

                            <ItemCount initial={1} stock={stock} onAdd={(handleOnAdd)}/>
                        )


                    }

                </footer>

                </div>
            </div>

        )
        
    }

    export default ItemDetail