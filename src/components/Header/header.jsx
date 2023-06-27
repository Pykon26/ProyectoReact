import './header.scss'
import logo from '../../assets/Logo Fresco.jpg'
import Cart  from '../Cart/Cart'
import Navbar from '../Navbar/navbar'

const header = () => {


        return (    


            <header className='header'>   
                <div className='header_container'>
                    
                    <img src={logo} alt="logo" className='header_logo'/>
                    


                 

                    <Navbar /> 

                    <Cart /> 
                </div>

            </header>

        )


}

export default header