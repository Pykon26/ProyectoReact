import './Cart.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
const {cart, addItem, removeItem, totalCantidad, clearCart} = useContext (CartContext)



}

export default Cart