    import ItemCount from '../ItemCount/ItemCount'

    const ItemDetail = ({id, nombre, precio, marca, descripcion, img, stock}) => {
        
        
        return (
            <div>
                <h2>
                    {nombre}
                </h2>
                <picture>
                    <img src={img} alt={nombre} />
                </picture>
                <section>
                    <p className="Info">
                        Marca: {marca}
                    </p>
                    <p className="Info">
                        Descripción: {descripcion}
                    </p>
                    <p className="Info">
                        Precio: ${precio}
                    </p>
                </section>

                <footer>
              
                </footer>
            </div>

        )
        
    }

    export default ItemDetail