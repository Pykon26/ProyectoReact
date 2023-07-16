import './Carrito.scss'
import { GiShoppingBag } from "react-icons/gi";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';

const carrito = ()=>{

const {totalCantidad} = useContext(CartContext)

    return (
    
        <div className='carrito'>
        <div className="icon-container">
          <GiShoppingBag className='icon'/>
        
        <p className='quantity'>{totalCantidad()}</p>

        </div>
      </div>
    )


}

export default carrito

