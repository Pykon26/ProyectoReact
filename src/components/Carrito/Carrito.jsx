import cart from '../../assets/cart-shopping-solid.svg'
import './Carrito.scss'
import { GiShoppingBag } from "react-icons/gi";

const carrito = ()=>{

    return (

        <div className='carrito'>
           <div><GiShoppingBag /></div>
            <p>0</p>   

        </div>
    )


}

export default carrito

