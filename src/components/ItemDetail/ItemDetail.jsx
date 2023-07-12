    import ItemCount from '../ItemCount/ItemCount'
    import './ItemDetail.scss'

    const ItemDetail = ({id, nombre, precio, marca, descripcion, img, stock}) => {
        
        
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
                    <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad Agregada')}/>
                </footer>

                </div>
            </div>

        )
        
    }

    export default ItemDetail