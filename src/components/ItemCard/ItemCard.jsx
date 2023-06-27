import { Link } from "react-router-dom"


const ItemCard = ({id, nombre, precio,marca, img}) => {

    return (
        <div className='col-3 m-2'>
            <h4>{nombre}</h4>   
            <img src={img} alt={nombre}/>
            <p>Marca: {marca}</p>
            <p>Precio: ${precio}</p>
            <Link className="btn btn-primary" to={`/detalle/${id}`}>Ver más</Link>
        </div>
    )
}

export default ItemCard