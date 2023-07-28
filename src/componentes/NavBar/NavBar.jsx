import CartWidget from '../CartWidget/CartWidget'
import { Link,NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>

      <Link to="/">
      <img src="../img/libreria.jpg" className='imgLibreria' alt="Logo Libreria" />
      </Link>

      <nav>
        <ul>
          <li>
              <NavLink to="/categoria/1"> Lapiceras </NavLink>
          </li>

          <li>
              <NavLink to="/categoria/2" > Abrochadoras </NavLink>
          </li>

          <li>
              <NavLink to="/categoria/3"> Papel </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar