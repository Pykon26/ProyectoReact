import ItemCard from "../ItemCard/ItemCard"
import './ItemList.scss'


const ItemList = ({productos}) => {

    return (
        <div>
            
            <div className="container-list">
                {
                    productos.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                }
            </div>


        </div>
    )
}

export default ItemList