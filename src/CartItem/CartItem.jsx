import { useContext } from "react";
import { CarritoCtxt } from "../context/CarritoContext";


const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoCtxt);

  return (
    <div>
        <h3> {item.nombre} </h3>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: {item.precio} </p>
        <button onClick={() => eliminarProducto(item.id)}> Eliminar </button>
        <hr />
    </div>
  )
}

export default CartItem