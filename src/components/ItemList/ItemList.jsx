import ItemCard from "../ItemCard/ItemCard"



const ItemList = ({productos}) => {

    return (
        <div>
            <h2>Productos</h2>
            <hr/>

            <div >
                {
                    productos.map((prod) => <ItemCard key={prod.id} {...prod}/>)
                }
            </div>


        </div>
    )
}

export default ItemList