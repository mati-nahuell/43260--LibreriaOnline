import { useContext } from 'react';
import { CarritoCtxt } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
    const { cantidadTotal } = useContext(CarritoCtxt);
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/107/107831.png?w=360";
    return (
        <div>
            <Link to="/cart">
                <img className='imgCarrito' src={imgCarrito} alt="carrito de compras" />
                {
                    cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
                }
            </Link>



        </div>
    )
}

export default CartWidget