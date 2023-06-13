import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <h2>Libreria Online</h2>

        <nav>
            <ul>
                <li>Resaltadores</li>
                <li>Lapiceras</li>
                <li>Reglas</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar