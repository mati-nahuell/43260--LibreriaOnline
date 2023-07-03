import { useState } from "react"

const ItemCount = () => {
    const [contador, setContador] = useState(1);

    const incrementar = () => {
        if (contador < 10) {
            setContador (contador + 1);
        }
        
    }

    const restar = () => {
        if (contador > 1) {
            setContador (contador - 1);
        }
    }


  return (
    <>
        <button onClick={incrementar}> + </button>
        <p> {contador} </p>
        <button onClick={restar}> - </button>


    
    </>
  )
}

export default ItemCount