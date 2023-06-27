import './header.scss'
import logo from '../../assets/Logo Fresco.jpg'
import Cart  from '../Cart/Cart'
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

                    <Cart /> 
                </div>

            </header>

        )


}

export default header