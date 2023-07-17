import './Cart.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { BiSolidTrash } from "react-icons/bi";

const Cart = () => {
const {cart, addItem, removeItem, totalCantidad,totalCompra, clearCart} = useContext (CartContext)

    if (totalCantidad() === 0) {
        return (
          <div className='container-vacio-cart'>
            <h1 >Todavía no hay productos</h1>
            <Link to="/" className="Option">Ir a Comprar</Link>
          </div>
        );
      }
      


    return (
        <div className="container-cart">
            <h2>Tu compra</h2>
            <hr/>
            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.nombre}</h4>
                        <img src={prod.img} alt={prod.nombre}/>
                        <p>Precio: ${prod.precio}</p>
                        <p>Cantidad: {prod.quantity}</p>

                        <button 
                            className="btn-borra"
                            onClick={() => removeItem(prod.id)}   
                        >
                            <BiSolidTrash />
                        </button>
                        <hr/>
                    </div>
                ))
            }

            <div>
                <h5>Total: ${totalCompra()}</h5>
                
                <button onClick={clearCart} className="btn-vaciar">Vaciar carrito</button>
                <Link className="btn-checkout " to="/checkout">Finalizar compra</Link>
            </div>
        </div>
    )


}

export default Cart