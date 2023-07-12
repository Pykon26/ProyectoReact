import { useState   } from "react"
import './ItemCount'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, SetQuantity] = useState(initial)


    const increment = () => {
        if (quantity<stock){
            SetQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if (quantity>1){
            SetQuantity(quantity-1)
        }    }  

        
    return (
        <div className='container-count'>
            <div className="btn-cont">
                <button onClick={decrement}>-</button>
                <h4>{quantity}</h4>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <button onClick={()=> onAdd(quantity)} disabled={!stock}>Agregar al carrito</button>
            </div>
        </div>
    )
}
    
export default ItemCount