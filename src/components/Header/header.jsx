import './header.scss'
import logo from '../../assets/Logo Fresco.jpg'
import Carrito  from '../Carrito/Carrito'
import Navbar from '../Navbar/navbar'
import { Link } from 'react-router-dom'

const header = () => {


        return (    


            <header className='header'>   
                <div className='header_container'>
                <Link to='/'>
                    <img src={logo} alt="logo" className='header_logo'/>
                </Link>
                    <Navbar /> 
                    <Carrito /> 
                </div>

            </header>

        )


}

export default header