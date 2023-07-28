import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import './ItemDetail.css'

import { CarritoCtxt } from '../../context/CarritoContext';
import { useContext } from 'react';


const ItemDetail = ({ id, nombre, precio, img, stock }) => {

    const [agregarCantidad, setAgregarCantidad] = useState(0);

    const {agregarProducto} = useContext(CarritoCtxt);


    const manejadorCantidad = (cantidad) => {
        setAgregarCantidad(cantidad);
        //console.log("Productos Agregados: " + cantidad);


        const item = {id, nombre, precio};
        agregarProducto(item, cantidad);


    }

    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reprehenderit sunt quaerat quis culpa asperiores iste non nihil quia a eius possimus in, aperiam repellendus numquam et molestiae quasi. Mollitia.</p>
            <img src={img} alt={nombre} />
            {
                agregarCantidad > 0 ? (<Link className='miBtn' to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
            }

        </div>
    )
}

export default ItemDetail