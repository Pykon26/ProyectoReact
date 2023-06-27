import cart from '../../assets/cart-shopping-solid.svg'
import './Cart.scss'


const carrito = ()=>{

    return (

        <div className='carrito'>
                <img src={cart} alt="carrito" className='foto_carrito'/>
                0
                
        </div>
    )


}

export default carrito

