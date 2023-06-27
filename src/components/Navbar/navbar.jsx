import './navbar.scss'
import { Link } from 'react-router-dom'

const navbar = () => {

    return(

        <nav className='header_nav'> 
        
        <Link className="header__link" to="/">Inicio</Link>
        <Link className="header__link" to="/productos/Kongo">Kongo</Link>
        <Link className="header__link" to="/productos/H&W">H&W</Link>
        <Link className="header__link" to="/productos/Luxo">Luxo</Link>
        <Link className="header__link" to="/productos/G&F">Garage & Friends</Link>

        </nav>   
    )

}

export default navbar