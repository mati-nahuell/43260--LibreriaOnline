import { useState, useEffect } from "react";
import { getProductos, getProdsPorCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const funcion = idCategoria ? getProdsPorCategoria : getProductos;

        funcion(idCategoria)
            .then(res => setProductos(res))

    }, [idCategoria])

    


    return (
        <>
            <h2> {props.greeting} </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer