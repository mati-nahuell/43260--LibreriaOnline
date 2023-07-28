import { useContext } from "react";
import { CarritoCtxt } from "../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";



const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoCtxt);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> El Carrito esta vacio </h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }

    return (
        <div>
            {carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)}
            <h3>Total: $ {total} </h3>
            <h3>Cantidad Total: {cantidadTotal} </h3>
            <button onClick={() => vaciarCarrito()}> Vaciar Carito </button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart