import './Carrito.scss'
import { GiShoppingBag } from "react-icons/gi";
import { CartContext } from '../../context/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'

const carrito = ()=>{

const {totalCantidad} = useContext(CartContext)

    return (
    
        <div className='carrito'>
        <div className="icon-container">
        <Link to="/cart" className='icon-link'> <GiShoppingBag className='icon'/></Link>
        
        <p className='quantity'>{totalCantidad()}</p>

        </div>
      </div>
    )


}

export default carrito

