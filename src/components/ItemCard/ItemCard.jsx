import { Link } from "react-router-dom"
import './ItemCard.scss'


const ItemCard = ({id, nombre, precio,marca, img}) => {

    return (
        <div className='container-card col-5'>
            <h4>{nombre}</h4>   
            <img src={img} alt={nombre}/>
            <p><span>Marca:</span> {marca}</p>
            <p> ${precio}</p>
            <Link className="btn " to={`/detalle/${id}`}><button>Ver detalle</button></Link>
            <hr/>

        </div>
    )
}

export default ItemCard