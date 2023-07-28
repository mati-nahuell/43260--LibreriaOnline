import { useState } from "react"



const ItemCount = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }

    }

    const restar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }


    return (
        <>
            <div>
                <button onClick={incrementar}> + </button>
                <p> {contador} </p>
                <button onClick={restar}> - </button>
            </div>
            <button onClick={() => funcionAgregar(contador) }> Agregar al Carrito </button>



        </>
    )
}

export default ItemCount